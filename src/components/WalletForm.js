// funcionalidades
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// importações
import { currenciesThunk } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { enviaMoedas } = this.props;
    enviaMoedas();
  }

  render() {
    const { moeda } = this.props;
    return (
      <div>
        <input
          type="number"
          data-testid="value-input"
        />
        <input
          type="text"
          data-testid="description-input"
        />
        <select data-testid="currency-input">
          { moeda.map((coin) => (<option key={ coin }>{coin}</option>)) }
        </select>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moeda: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  enviaMoedas: () => dispatch(currenciesThunk()) });

WalletForm.propTypes = {
  enviaMoedas: PropTypes.func,
  moeda: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
