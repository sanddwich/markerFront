import { HIDE_REQUESTFORM_MODAL, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes"
import { ModalState } from "../interfaces/interfaces"
import { ModalActionType } from "../interfaces/modal"

const initialState: ModalState = {
  modalRequestForm: {
    isActive: false,
  }
}

const modal = (state: ModalState = initialState, action: ModalActionType) => {
  switch (action.type) {
    case SHOW_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: true
        }
      }
    case HIDE_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: false
        }
      }
    default:
      return state
  }
}

export default modal