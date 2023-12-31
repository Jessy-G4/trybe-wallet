// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const estadoInicial = {
  currencies: [],
  expenses: [],
};

const wallet = (state = estadoInicial, action) => {
  switch (action.type) {
  case 'moeda':
    return {
      ...state,
      currencies: action.api,
    };
  case 'DadosBancarios':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'apagar':
    return {
      ...state,
      expenses: state.expenses.filter((get) => (
        Number(action.payload) !== Number(get.id))),
    };
  default:
    return state;
  }
};

export default wallet;
