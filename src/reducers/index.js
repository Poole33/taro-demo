import { combineReducers } from 'redux'
import home from './home'
import mine from './mine'
import collect from './collect'
import detail from './detail'

export default combineReducers({
  home,
  mine,
  collect,
  detail
})