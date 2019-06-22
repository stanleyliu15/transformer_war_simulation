import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { allegiances } from '../../constants';
import {
  Header,
  ErrorMessage,
  TransformerStatsSliderFormFieldList,
  TextFormField,
  AllegianceFormField
} from '../../components';
import TransformerAPI from '../../api/TransformerAPI';
import styles from './Index.module.css';
import common_styles from '../../CommonStyles.module.css';

class TransformerCreate extends Component {
  state = {
    inputs: {
      name: '',
      allegiance: allegiances[0],
      strength: 5,
      intelligence: 5,
      speed: 5,
      endurance: 5,
      rank: 5,
      courage: 5,
      firepower: 5,
      skill: 5
    },
    created: false,
    error: null
  };

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

  handleCreate = event => {
    event.preventDefault();
    const { inputs: transformer } = this.state;
    TransformerAPI.postTransformer(transformer)
      .then(response => {
        if (response.success) {
          this.setState({ created: true });
        }
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { handleInputChange, handleCreate } = this;
    const { created, error } = this.state;
    const { inputs } = this.state;
    const { name: nameInput, allegiance: allegianceInput, ...transformerStatInputs } = inputs;

    if (created) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Header />
        <div className={styles.create_form_title_wrapper}>
          <h2>Build a Transformer</h2>
        </div>
        {error && <ErrorMessage message={error.message} />}
        <form className={common_styles.form_fields_container} onSubmit={handleCreate}>
          <TextFormField name="name" value={nameInput} onInputChange={handleInputChange} />
          <AllegianceFormField value={allegianceInput} onInputChange={handleInputChange} />
          <TransformerStatsSliderFormFieldList
            statInputs={transformerStatInputs}
            onInputChange={handleInputChange}
          />
          <div className={styles.create_button_wrapper}>
            <input className={styles.create_button} type="submit" value="Create" />
          </div>
        </form>
      </>
    );
  }
}

export default TransformerCreate;
