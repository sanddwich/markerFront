import { HIDE_REQUESTFORM_MODAL, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes";

interface showRequestModal {
  type: typeof SHOW_REQUESTFORM_MODAL
}

interface hideRequestModal {
  type: typeof HIDE_REQUESTFORM_MODAL
}

export type ModalActionType = 
  | showRequestModal
  | hideRequestModal