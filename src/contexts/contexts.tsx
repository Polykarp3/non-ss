import React, { createContext, FC, Reducer, useReducer } from 'react';

export type CurrentUserState = {
  isLoading: boolean;
  isLoggedIn: boolean;
  currentUser: string | null;
};

export const initialState: CurrentUserState = {
  isLoading: false,
  isLoggedIn: false,
  currentUser: null,
};

type Actions = {
  type: 'LOADING' | 'SET_AUTHORIZED' | 'SET_UNAUTHORIZED';
  payload: string;
};

export const reducer: Reducer<CurrentUserState, Actions> = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'SET_AUTHORIZED':
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        currentUser: action.payload,
      };
    case 'SET_UNAUTHORIZED':
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export const CurrentUserContext = createContext<any>({});

const CurrentUserProvider: FC = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
