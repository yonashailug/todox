import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer
})

export default rootReducer;