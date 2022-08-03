// Funcionalidades
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Importações
import { EliminarDaExistencia } from '../redux/actions';

class Table extends Component {
  handleClick = (event) => {
    const { id } = event.target;
    const { chamarDispatch } = this.props;
    chamarDispatch(id);
  };

  render() {
    const { valores } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {
            valores.map((valor, index) => (
              <tr key={ index }>
                <td>{valor.description}</td>
                <td>{valor.tag}</td>
                <td>{valor.method}</td>
                <td>{Number(valor.value).toFixed(2)}</td>
                <td>{valor.exchangeRates[valor.currency].name}</td>
                {/* <td>{valor.exchangeRates[valor.currency].codein}</td> */}
                <td>{Number(valor.exchangeRates[valor.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(valor.value)
                  * Number(valor.exchangeRates[valor.currency].ask)).toFixed(2)}
                </td>
                {/* <td>{valor.currency}</td> */}
                <td>Real</td>
                <td>
                  <button
                    type="submit"
                    data-testid="delete-btn"
                    id={ valor.id }
                    key={ valor.id }
                    onClick={ this.handleClick }
                  >
                    Excluir

                  </button>

                </td>
              </tr>
            ))
          }
        </tbody>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  valores: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  chamarDispatch: (payload) => dispatch(EliminarDaExistencia(payload)),
});

Table.propTypes = {
  valores: PropTypes.array,
  chamarDispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
