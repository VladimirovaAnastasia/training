import { combineReducers } from 'redux';
import pokemons, { IPokemonsInitalState } from './pokemons';

export interface IInitalState {
  pokemons: IPokemonsInitalState;
}

const createRootReducer = () =>
  combineReducers({
    pokemons,
  });

export default createRootReducer;
