import { HIDE_REQUESTFORM_MODAL, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes"

export const showRequestModal = () => ({
  type: SHOW_REQUESTFORM_MODAL
})

export const hideRequestModal = () => ({
  type: HIDE_REQUESTFORM_MODAL
})