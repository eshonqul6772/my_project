import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import * as Api from '../api';
import * as Actions from '../actions';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  useQuery(
    [Constants.ENTITY, 'profile', token],
      async () => {
        dispatch(Actions.Profile.request());

        const { data } = await Api.Profile({ token });

        return Mappers.Profile(data);
      },
      {
        enabled: !!token,
        onSuccess: profile => {
          dispatch(Actions.Profile.success(profile));
        },
        onError: () => {
          dispatch(Actions.Logout.success());
        },
        retry: false,
        refetchOnWindowFocus: false
      }
  );

  return children;
};

export default Auth;
