import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logar } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      desabilitado: true,
      senha: '',
    };
  }

  desabilitar = () => {
    const { email, senha } = this.state;
    const seis = 6;
    if (senha.length >= seis && email.includes('@' && '.com')) {
      return this.setState({ desabilitado: false });
    }
    return this.setState({ desabilitado: true });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.desabilitar());
  };

  handleClick = () => {
    const { history, efetuarLogin } = this.props;
    const { email } = this.state;
    efetuarLogin(email);
    history.push('/carteira');
  };

  render() {
    const { email, desabilitado, senha } = this.state;
    return (
      <div>
        <input
          name="email"
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          name="senha"
          data-testid="password-input"
          type="password"
          onChange={ this.handleChange }
          value={ senha }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ desabilitado }
        >
          Entrar

        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  efetuarLogin: (state) => dispatch(logar(state)) });

Login.propTypes = {
  history: PropTypes.func,
  efetuarLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
