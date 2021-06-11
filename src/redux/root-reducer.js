// Here is where all reducers will combine

import { combineReducers } from  'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});