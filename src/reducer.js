import { combineReducers } from "redux";

import { searchRequest } from './core/reducers/exams'

const appReducer = combineReducers({
  searchRequest
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
