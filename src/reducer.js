import { combineReducers } from "redux";

import { searchRequest, clearFilters } from './core/reducers/exams'

const appReducer = combineReducers({
  searchRequest,
  clearFilters,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
