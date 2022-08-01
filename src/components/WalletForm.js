// funcionalidades
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// importações
import { currenciesThunk, EnviarDados, alimentacao } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: 0,
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: alimentacao,
    };
  }

  componentDidMount() {
    const { enviaMoedas } = this.props;
    enviaMoedas();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = () => {
    const { dados } = this.props;
    dados(this.state);
    this.setState({
      valueInput: 0,
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: alimentacao,
    });
  }

  render() {
    const { moeda } = this.props;
    const { valueInput, descriptionInput } = this.state;
    return (
      <div>
        <input
          value={ valueInput }
          name="valueInput"
          type="number"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
        <input
          value={ descriptionInput }
          name="descriptionInput"
          type="text"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
        <select
          name="currencyInput"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          { moeda.map((coin) => (<option key={ coin }>{coin}</option>)) }
        </select>
        <select
          name="methodInput"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          name="tagInput"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option>{alimentacao}</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button onClick={ this.handleClick } type="submit">Adicionar despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moeda: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  enviaMoedas: () => dispatch(currenciesThunk()),
  dados: (payload) => dispatch(EnviarDados(payload)),
});

WalletForm.propTypes = {
  enviaMoedas: PropTypes.func,
  moeda: PropTypes.array,
  dados: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
