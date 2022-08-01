import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  filtrando = () => {
    const { valores } = this.props;
    const valor = valores.reduce((acc, rates) => (acc + Number(rates.value)
    * Number(rates.exchangeRates[rates.currency].ask)),
    0).toFixed(2);
    return valor;
  };

  render() {
    const { email } = this.props;
    return (
      <>
        <h1 data-testid="email-field">{email}</h1>
        <p data-testid="total-field">{this.filtrando()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valores: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  valores: PropTypes.array,
}.isRequired;
export default connect(mapStateToProps, null)(Header);
