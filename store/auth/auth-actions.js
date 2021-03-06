import {authActions} from './auth-slice';
import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

export const postRegister = (username, email, password) => {
  return async dispatch => {
    const postData = async () => {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      return await response.json();
    };

    try {
      const result = await postData();

      if (result.userId) {
        return result;
      } else {
        throw new Error('could not get data');
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export const postLogin = (username, password) => {
  return async dispatch => {
    const postData = async () => {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status === 401) {
        //   could be wrong
        throw new Error(response.statusText);
      }
      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Could not authenticate');
      }
      return await response.json();
    };

    try {
      const result = await postData();
      if (result.token && result.userId) {
        dispatch(
          authActions.LoggedIn({
            jwt: result.token,
            userIdLogin: result.userId,
          }),
        );
        // maybe expire in future
        await MMKV.setStringAsync('token', result.token);
        // await MMKV.setStringAsync('userId', result.userId);
        await MMKV.setStringAsync(
          'auth',
          JSON.stringify({
            user: username,
            password: password,
          }),
        );

        // console.log('MMKV: ', await MMKV.getStringAsync('auth'));
        return result;
      } else {
        throw new Error('could not get data');
      }
    } catch (e) {
      console.log(e);
    }
  };
};

//logout

export const logout = () => {
  return async dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch(authActions.LoggedOut());
    try {
      let response = await fetch('http://localhost:8080/auth/logout', {
        method: 'GET',
      });

      return await response.json();
    } catch (e) {
      console.log(e);
    }
  };
};
