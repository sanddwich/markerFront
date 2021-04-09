import { HIDE_TOAST, SET_ERROR_TOAST, SET_SUCCESS_TOAST } from "../constants/ActionTypes"

export const setErrorToast = (message: string) => ({
  type: SET_ERROR_TOAST,
  message,
})

export const setSuccessToast = (message: string) => ({
  type: SET_SUCCESS_TOAST,
  message,
})

export const hideToast = () => ({
  type: HIDE_TOAST,
})