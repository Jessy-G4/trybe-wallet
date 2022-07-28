// import user from './user';
// import wallet from './wallet';

// Configurando os meus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import { combineReducers } from 'redux';
import usuario from './user';
import carteira from './wallet';

const rootReducer = combineReducers({
  usuario,
  carteira,
});

export default rootReducer;
