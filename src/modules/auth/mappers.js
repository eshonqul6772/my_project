import get from 'lodash/get';

export const Profile = (item) => ({
  id: get(item, 'id') || '',
  firstName: get(item, 'firstName') || '',
  lastName: get(item, 'lastName') || ''
});

export const Token = (item) => ({
  token: get(item, 'access_token') || ''
});