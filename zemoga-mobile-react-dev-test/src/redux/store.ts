import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import generalReducer from './reducers';

export default createStore(generalReducer, compose(applyMiddleware(thunk)));
