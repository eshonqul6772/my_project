import * as Constants from './constants';

export const Register = {
  request: () => ({
    type: Constants.REGISTER_REQUEST
  }),
  success: (args) => ({
    type: Constants.REGISTER_SUCCESS,
    payload: args
  }),
  error: () => ({
    type: Constants.REGISTER_ERROR
  })
};

export const Login = {
  request: () => ({
    type: Constants.LOGIN_REQUEST
  }),
  success: (args) => ({
    type: Constants.LOGIN_SUCCESS,
    payload: args
  }),
  error: () => ({
    type: Constants.LOGIN_ERROR
  })
};

export const Profile = {
  request: () => ({
    type: Constants.PROFILE_REQUEST
  }),
  success: (args) => ({
    type: Constants.PROFILE_SUCCESS,
    payload: args
  }),
  error: () => ({
    type: Constants.PROFILE_ERROR
  })
};

export const Logout = {
  request: () => ({
    type: Constants.LOGOUT_REQUEST,
  }),
  success: () => ({
    type: Constants.LOGOUT_SUCCESS
  })
};