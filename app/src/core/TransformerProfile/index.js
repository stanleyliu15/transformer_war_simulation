import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Header } from '../../components';
import { allegiances } from '../../constants';
import getTransformerStats from '../../util/getTransformerStats';
import computeTransformerRating from '../../util/computeTransformerRating';
import TransformerStatList from './TransformerStatList';
import TransformerStatSliderFieldList from './TransformerStatSliderFieldList';
import TransformerAPI from '../../api/TransformerAPI';

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

  handleEditSave = _ => {
    const { id } = this.props.match.params;
    const { transformer, inputs } = this.state;
    const update = { ...transformer, ...inputs };

    if (transformer.rank > 7) {
      this.setState({ error: Error('*Cannot update a transformer with higher than 8 rank') });
    }

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
  };

  handleEditCancel = _ => {
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
    const { transformer, inputs, isLoading, isEditing, message, deleted, error } = this.state;
    const transformerStats = getTransformerStats(transformer);
    const transformerRating = computeTransformerRating(transformer);

    if (deleted) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Header />
        {error && <div>Error: {error.message}</div>}
        {message && <div>{message}</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              <div>
                {isEditing ? (
                  <input
                    name="name"
                    type="text"
                    value={inputs.name === undefined ? transformer.name : inputs.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <h2>{transformer.name}</h2>
                )}
              </div>
              <div>
                <h3>Allegiance</h3>
                {isEditing ? (
                  <div>
                    {allegiances.map(allegiance => (
                      <input
                        key={allegiance}
                        name="allegiance"
                        type="button"
                        value={allegiance}
                        onClick={handleInputChange}
                      />
                    ))}
                  </div>
                ) : (
                  <h4>{transformer.allegiance}</h4>
                )}
              </div>
              <div>
                {isEditing ? (
                  <>
                    <button onClick={handleEditSave}>Save Changes</button>
                    <button onClick={handleEditCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={handleEditClicked}>Edit</button>
                    <button onClick={handleDeleteClicked}>Delete</button>
                  </>
                )}
              </div>
            </div>
            <div>
              <div>
                <h6>Stats</h6>
                <div>
                  {isEditing ? (
                    <TransformerStatSliderFieldList
                      inputs={inputs}
                      onInputChange={handleInputChange}
                      transformerStats={transformerStats}
                    />
                  ) : (
                    <TransformerStatList
                      transformerRating={transformerRating}
                      transformerStats={transformerStats}
                    />
                  )}
                </div>
              </div>
              <div />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TransformerProfile;
