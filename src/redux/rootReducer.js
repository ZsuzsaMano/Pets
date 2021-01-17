import { combineReducers } from 'redux';

import counterReducer from './Login/login.reducer';

const rootReducer = combineReducers({

  login: loginReducer,

});

export default rootReducer;
