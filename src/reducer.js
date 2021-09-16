import { combineReducers } from "redux";

import { 
  searchRequest, 
  clearFilters, 
  bottomSheet, 
  examsPage, 
  assesmentItem, 
  createAssesmentTest, 
  previousTests,
  sigleTest,
  updateTest,
  sendToClassroom,
} from './core/reducers/exams'

const appReducer = combineReducers({
  searchRequest,
  clearFilters,
  bottomSheet,
  examsPage,
  assesmentItem,
  createAssesmentTest,
  previousTests,
  sigleTest,
  updateTest,
  sendToClassroom,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
