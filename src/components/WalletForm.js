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
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      exchangeRates: [],
    };
  }

  componentDidMount() {
    const { enviaMoedas } = this.props;
    enviaMoedas();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

requisicaoApi = async () => {
  const link = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(link);
  const resultado = await response.json();
  return resultado;
};

  handleClick = async () => {
    const { dados } = this.props;
    this.setState({ exchangeRates: await this.requisicaoApi() });
    dados(this.state);
    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    }));
  }

  render() {
    const { moeda } = this.props;
    const { value, description } = this.state;
    return (
      <div>
        <input
          value={ value }
          name="value"
          type="number"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
        <input
          value={ description }
          name="description"
          type="text"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
        <select
          name="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          { moeda.map((coin) => (<option key={ coin }>{coin}</option>)) }
        </select>
        <select
          name="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          name="tag"
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
