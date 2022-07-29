// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const estadoInicial = {
  currencies: [],
};

const wallet = (state = estadoInicial, action) => {
  switch (action.type) {
  case 'moeda':
    return {
      currencies: action.api,
    };
  default:
    return state;
  }
};

export default wallet;
