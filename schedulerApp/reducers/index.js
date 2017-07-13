import { combineReducers } from 'redux'
import rodalReducer from './rodalReducer'
import newEventTimeReducer from './newEventTimeReducer'

export default combineReducers({
  rodalVisibility: rodalReducer,
  slotInfo: newEventTimeReducer
});
