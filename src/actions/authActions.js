export const signup = (user, history) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/users`, {
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
          dispatch({
            type: 'AUTH_SUCCESSFUL',
            payload: { loggedIn: data.logged_in, currentUser: data.user },

          });
          history.push(`/stories`);
        });
    };
  };

  export const login = (user, history) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ user: user }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: 'AUTH_SUCCESSFUL',
            payload: { loggedIn: data.logged_in, currentUser: data.user },
          });
          history.push(`/stories`);
        });
    };
  };

  export const checkLoggedIn = (callback) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/logged_in`, {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: 'AUTH_SUCCESSFUL',
            payload: { loggedIn: data.logged_in, currentUser: data.user },
          });
          
        });
    };
  };
  
  // export const logout = (history) => {
  //   return (dispatch) => {
  //     fetch(`http://localhost:3000/logout`, {
  //       method: 'DELETE',
  //       credentials: 'include',
  //     })
  //       .then((res) => res.json())
  //       .then(() => {
  //         console.log('in authActions')
  //         dispatch({ type: 'LOGOUT' });
  //         history.push('/login');
  //       });
  //   };
  // };
  