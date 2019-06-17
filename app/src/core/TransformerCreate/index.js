import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { allegiances } from '../../constants';
import { Header, TransformerStatSliderField, ErrorMessage } from '../../components';
import TransformerAPI from '../../api/TransformerAPI';

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

  onInputChange = event => {
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
    const { onInputChange, handleCreate } = this;
    const { created, error } = this.state;
    const { inputs } = this.state;
    const { name: nameInput, allegiance: allegianceInput, ...transformerStatInputs } = inputs;

    if (created) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Header />
        <h2>Build a Transformer</h2>
        {error && <ErrorMessage message={error.message} />}
        <form onSubmit={handleCreate}>
          {``}
          <label htmlFor="name">Name</label>
          <div>
            <input name="name" type="text" value={nameInput} onChange={onInputChange} />
          </div>
          {``}
          <label htmlFor="allegiance">Allegiance</label>
          <div>
            {allegiances.map(allegiance => (
              <input
                key={allegiance}
                name="allegiance"
                type="button"
                value={allegiance}
                onClick={onInputChange}
              />
            ))}
          </div>
          {``}
          {Object.keys(transformerStatInputs).map(statInputKey => (
            <TransformerStatSliderField
              key={statInputKey}
              name={statInputKey}
              value={transformerStatInputs[statInputKey]}
              onChange={onInputChange}
            />
          ))}
          {``}
          <div>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    );
  }
}

export default TransformerCreate;
