import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import appReducer from './appReducer';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import { reducer as formReducer } from 'redux-form';
import profileReducer from './profileReducer';
import { sidebarReducer } from './sidebarReducer';
import thunkMiddleware from 'redux-thunk';
import usersReducer from './usersReducer';

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
