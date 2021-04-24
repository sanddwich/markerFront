import { HIDE_REQUESTFORM_MODAL, SET_MOBILE_MENU, SET_MODAL_WINDOW, SHOW_REQUESTFORM_MODAL } from '../constants/ActionTypes'
import { ModalState } from '../interfaces/interfaces'
import { ModalActionType } from '../interfaces/modal'

const initialState: ModalState = {
  modalRequestForm: {
    isActive: false,
  },
  mobileMenu: {
    isActive: false,
  },
  modalWindow: {
    isActive: true,
  },
}

const modal = (state: ModalState = initialState, action: ModalActionType) => {
  switch (action.type) {
    case SHOW_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: true,
        },
      }
    case HIDE_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: false,
        },
      }
    case SET_MOBILE_MENU:
      return {
        ...state,
        mobileMenu: {
          isActive: action.isActive,
        },
      }
    case SET_MODAL_WINDOW:
      return {
        ...state,
        modalWindow: {
          isActive: action.isActive,
        },
      }
    default:
      return state
  }
}

export default modal
