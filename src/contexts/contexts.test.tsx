import CurrentUserProvider, {
  reducer,
  CurrentUserState,
  initialState,
  Actions,
} from './contexts';
import { render, waitFor } from '@testing-library/react';

const getInitialState = (initial?: Partial<CurrentUserState>) =>
  reducer(initial as CurrentUserState, {} as Actions);

describe('Current user state ', () => {
  describe('initial state', () => {
    it('should match a snapshot', () => {
      const initialState = getInitialState();
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('Load, Authorized and Unauthorized', () => {
    const initialState = getInitialState();

    it(' loading in progress', () => {
      const state = reducer(initialState, { type: 'LOADING', payload: null });
      expect(state.isLoading).toEqual(true);
    });

    it(' authorized', () => {
      const state = reducer(initialState, {
        type: 'SET_AUTHORIZED',
        payload: 'Андрей Астахов',
      });
      expect(state).toEqual({
        isLoggedIn: true,
        isLoading: false,
        currentUser: 'Андрей Астахов',
      });
    });

    it(' unauthorized', () => {
      const state = reducer(initialState, {
        type: 'SET_UNAUTHORIZED',
        payload: null,
      });
      expect(state).toEqual({
        isLoggedIn: false,
        isLoading: false,
        currentUser: null,
      });
    });
  });
});

describe('Current user provider ', () => {
  const Content = () => {
    return <div>Ok</div>;
  };

  it('rendering context', async () => {
    const { queryByText } = render(
      <CurrentUserProvider>
        <Content />
      </CurrentUserProvider>
    );

    await waitFor(() => {
      expect(queryByText('Ok')).toBeInTheDocument();
    });
  });
});
