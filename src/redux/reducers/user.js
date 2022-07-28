// Esse reducer será responsável por tratar as informações da pessoa usuária
const estadoInicial = {
  email: '',
};

const user = (state = estadoInicial, action) => {
  switch (action.type) {
  case 'login':
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
