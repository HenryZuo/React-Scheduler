import { combineReducers } from 'redux'
import rodalReducer from './rodalReducer'
import newEventTimeReducer from './newEventTimeReducer'
import eventsReducer from './eventsReducer'

export default combineReducers({
  rodalVisibility: rodalReducer,
  slotInfo: newEventTimeReducer,
  events: eventsReducer
});
