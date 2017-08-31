import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
