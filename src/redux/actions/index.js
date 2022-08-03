// Colocando aqui minhas actions
export const alimentacao = 'Alimentação';

export const logar = (payload) => ({
  type: 'login',
  payload,
});

export const moeda = (api) => ({
  type: 'moeda',
  api,
});

export const currenciesThunk = () => async (dispatch) => {
  const link = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(link);
  const resultado = await response.json();
  const resultadoArray = Object.keys(resultado).filter((key) => key !== 'USDT');
  dispatch(moeda(resultadoArray));
};

export const EnviarDados = (payload) => ({
  type: 'DadosBancarios',
  payload,
});

export const EliminarDaExistencia = (payload) => ({
  type: 'apagar',
  payload,
});
