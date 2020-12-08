export const authReducer = (state = { loggedIn: false, currentUser: {} }, action) => {
    switch (action.type) {
      case 'AUTH_SUCCESSFUL':
        console.log('authReducer', action)
        return {
          ...state,
          loggedIn: action.payload.loggedIn,
          currentUser: action.payload.currentUser
        };

      case 'AUTH_UNSUCCESSFUL':
        console.log('goal',action)
        return {
          ...state,
          errors: action.payload.errors
        };

      case 'LOGOUT':
        console.log('inAuthReducer')
        return {
          ...state,
          loggedIn: false,
          currentUser: {},
        };

      default:
        return state;
    }
  };

