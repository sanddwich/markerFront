import { HIDE_TOAST, SET_ERROR_TOAST, SET_SUCCESS_TOAST } from "../constants/ActionTypes";

interface setErrorToast {
  type: typeof SET_ERROR_TOAST
  message: string
}

interface setSuccessToast {
  type: typeof SET_SUCCESS_TOAST
  message: string
}

interface hideToast {
  type: typeof HIDE_TOAST
}

export type ToastActionType =
  | setErrorToast
  | setSuccessToast
  | hideToast