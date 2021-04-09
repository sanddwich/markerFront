import { HIDE_TOAST, SET_ERROR_TOAST, SET_SUCCESS_TOAST } from '../constants/ActionTypes'
import { ToastState } from '../interfaces/interfaces'
import { ToastActionType } from '../interfaces/toast'

const initialState: ToastState = {
  isActive: false,
  error: false,
  message: '',
}

const toast = (state: ToastState = initialState, action: ToastActionType) => {
  switch (action.type) {
    case SET_ERROR_TOAST:
      return {
        ...state,
        message: action.message,
        isActive: true,
        error: true,
      }
    case SET_SUCCESS_TOAST:
      return {
        ...state,
        message: action.message,
        isActive: true,
        error: false,
      }
    case HIDE_TOAST:
      return {
        ...state,
        isActive: false,
        error: false,
      }
    default:
      return state
  }
}

export default toast
