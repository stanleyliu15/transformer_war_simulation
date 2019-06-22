import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Header, ErrorMessage, LoadingSpinner } from '../../components';
import getTransformerStats from '../../util/getTransformerStats';
import computeTransformerRating from '../../util/computeTransformerRating';
import TransformerAPI from '../../api/TransformerAPI';
import EditingProfileView from './EditingProfileView';
import ProfileView from './ProfileView';

class TransformerProfile extends Component {
  state = {
    transformer: {},
    inputs: {},
    isLoading: true,
    isEditing: false,
    deleted: false,
    error: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    TransformerAPI.getTransformer(id)
      .then(transformer => {
        this.setState({
          isLoading: false,
          transformer
        });
      })
      .catch(error => this.setState({ isLoading: false, error }));
  }

  handleInputChange = event => {
    event.preventDefault();

    const { name: inputName } = event.target;
    let { value: inputValue } = event.target;
    const { inputs } = this.state;

    if (!isNaN(inputValue) && typeof inputValue === 'string' && inputValue.trim() !== '') {
      inputValue = +inputValue;
    }

    this.setState({
      inputs: { ...inputs, [inputName]: inputValue }
    });
  };

  handleEditClicked = _ => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleEditSave = event => {
    event.preventDefault();

    const { id } = this.props.match.params;
    const { transformer, inputs } = this.state;
    const update = { ...transformer, ...inputs };

    if (transformer.rank > 7) {
      this.setState({ error: Error('*Cannot update a transformer with higher than a rank of 8') });
    } else {
      this.setState({ isLoading: true });
      TransformerAPI.putTransformer(id, update)
        .then(_ => {
          TransformerAPI.getTransformer(id)
            .then(transformer => {
              this.setState({ isLoading: false, transformer, inputs: {}, isEditing: false });
            })
            .catch(error => this.setState({ isLoading: false, isEditing: false, error }));
        })
        .catch(error => this.setState({ isLoading: false, isEditing: false, error }));
    }
  };

  handleEditCancel = event => {
    event.preventDefault();

    this.setState({ isEditing: false, inputs: {} });
  };

  handleDeleteClicked = event => {
    const { id } = this.props.match.params;
    TransformerAPI.deleteTransformer(id)
      .then(_ => {
        this.setState({ deleted: true });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const {
      handleEditClicked,
      handleEditSave,
      handleEditCancel,
      handleDeleteClicked,
      handleInputChange
    } = this;
    const { transformer, inputs, isLoading, isEditing, deleted, error } = this.state;
    const { name, allegiance, ...transformerStatInputs } = inputs;
    const nameInput = name === undefined ? transformer.name : name;
    const allegianceInput = allegiance === undefined ? transformer.allegiance : allegiance;
    const transformerStats = getTransformerStats(transformer);
    const transformerRating = computeTransformerRating(transformer);

    if (deleted) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Header />
        {error && <ErrorMessage message={error.message} />}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {isEditing ? (
              <EditingProfileView
                onSave={handleEditSave}
                onCancel={handleEditCancel}
                onInputChange={handleInputChange}
                nameInput={nameInput}
                allegianceInput={allegianceInput}
                transformerStats={transformerStats}
                transformerStatInputs={transformerStatInputs}
              />
            ) : (
              <ProfileView
                onEdit={handleEditClicked}
                onDelete={handleDeleteClicked}
                transformerName={transformer.name}
                transformerAllegiance={transformer.allegiance}
                transformerRating={transformerRating}
                transformerStats={transformerStats}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default TransformerProfile;
