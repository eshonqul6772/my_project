import * as Constants from './constants';

const initialState = {
  isAuthenticated: false,
  isFetched: true,
  token: localStorage.getItem('token'),
  profile: {
    id: '',
    firstName: '',
    lastName: ''
  },
};

export const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case Constants.LOGIN_REQUEST: {
      return {
        ...state,
        isFetched: false,
      };
    }
    case Constants.LOGIN_SUCCESS: {
      const token = action.payload;

      localStorage.setItem('token', token);

      return {
        ...state,
        isFetched: true,
        token,
      };
    }
    case Constants.LOGIN_ERROR: {
      return {
        ...state,
        isFetched: true,
      };
    }
    case Constants.PROFILE_REQUEST: {
      return {
        ...state,
        isFetched: false,
      };
    }
    case Constants.PROFILE_SUCCESS: {
      const profile = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        isFetched: true,
        profile,
      };
    }
    case Constants.PROFILE_ERROR: {
      localStorage.removeItem('token');

      return {
        ...initialState,
      };
    }
    case Constants.LOGOUT_REQUEST: {
      localStorage.removeItem('token');

      return {
        ...initialState,
        isFetched: true,
      };
    }
    case Constants.LOGOUT_SUCCESS: {
      localStorage.removeItem('token');

      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};