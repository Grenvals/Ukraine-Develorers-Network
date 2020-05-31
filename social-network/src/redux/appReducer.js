import { getAuthUserData } from './authReducer';
import { getDialogsUsersList } from './dialogsReducer';

const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS';

let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZED_SUCSESS': {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCSESS,
  };
};

export const initializedApp = () => dispatch => {
  const getUserData = dispatch(getAuthUserData());
  // Watchers
  Promise.all([getUserData]).then(() => {
    dispatch(initializedSuccess());
    dispatch(getDialogsUsersList());
    setInterval(() => {
      dispatch(getDialogsUsersList());
    }, 20000);
  });
};

export default appReducer;
