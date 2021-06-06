import { combineReducers } from 'redux';
import pokemonsTypes, { IPokemonsInitalState } from './types';

export interface IInitalState {
  pokemonsTypes: IPokemonsInitalState;
}

const createRootReducer = () =>
  combineReducers({
    pokemonsTypes,
  });

export default createRootReducer;
