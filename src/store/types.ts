import { Dispatch } from 'react';
import { IStateRequest } from '../interface';
import { ITypesRequest } from '../interface/pokemons';
import req from '../utils/request';
import { IInitalState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

export type ActionTypes = TypesAction;

export interface IPokemonsInitalState {
  types: IStateRequest<string>;
}

const initialState: IPokemonsInitalState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export const pokemonsTypes = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IInitalState) => state.pokemonsTypes.types.data;
export const getPokemonsTypesLoading = (state: IInitalState) => state.pokemonsTypes.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>('getOther');
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export default pokemonsTypes;