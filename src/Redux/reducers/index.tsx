import { combineReducers } from 'redux'
import app from './app'
import toast from './toast'
import modal from './modal'

export default combineReducers({
  app,
  toast,
  modal,
})