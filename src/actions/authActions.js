import ENDPOINT from '../constants';

export const signup = (user, history) => {
  return (dispatch) => {
    fetch(ENDPOINT + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ user: user }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('signup', data);
        if (data.user) {
          dispatch({
            type: 'AUTH_SUCCESSFUL',
            payload: { loggedIn: data.logged_in, currentUser: data.user },

          });
          history.push('/stories');
        }
        else {
          dispatch({
            type: 'AUTH_UNSUCCESSFUL',
            payload: { errors: data },
          });
        }
      })
  };
};

export const login = (user, history) => {
  return (dispatch) => {
    fetch(ENDPOINT + 'sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ user: user }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          dispatch({
            type: 'AUTH_SUCCESSFUL',
            payload: { loggedIn: data.logged_in, currentUser: data.user },

          });
          history.push('/stories');
        }
        else {
          dispatch({
            type: 'AUTH_UNSUCCESSFUL',
            payload: { errors: data },
          });
        }
      })
  };
};

export const checkLoggedIn = (callback) => {
  return (dispatch) => {
    fetch(ENDPOINT + 'logged_in', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'AUTH_SUCCESSFUL',
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        callback();
      })
      .catch((error) => console.log(error) );
  };
};

export const logout = (history) => {
  return (dispatch) => {
    fetch(ENDPOINT + 'logout', {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
      });
  };
};
