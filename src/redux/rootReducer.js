import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import cells from './modules/cell'
import isOn from './modules/isOn'

export default combineReducers({
  cells,
  isOn,
  router
})
