import axios from 'axios';
import { http } from '@/services';

import config from '@/config';

export const Register = ({ values }) => axios.post(`${config.api.baseUrl}/api/auth/signup`, {}, {
  params: {
    firstName: values.firstName,
    lastName: values.lastName,
    username: values.username,
    password: values.password
  }
});

export const Login = ({ values }) => axios.post(`${config.api.baseUrl}/oauth/token`, {}, {
  params: {
    grant_type: 'password',
    username: values.username,
    password: values.password
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic azE2LTcxdDNyYXR1cjM6emh6YjJzbjh6MXBsbXF4MDdxeGpla2Z0ZnV2d2VrNnl2YndobTN5Yw=='
  }
});

export const Profile = ({ token }) => http.request.get('/api/user/me', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});