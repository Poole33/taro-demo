import { combineReducers } from 'redux'
import home from './home'
import mine from './mine'
import collect from './collect'

export default combineReducers({
  home,
  mine,
  collect
})