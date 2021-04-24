import { MarketUser } from "./AdditionalInterfaces/MarketUser";

export interface AppState {
  loading: boolean
  error: string
  tariff: string
  marketUser: MarketUser | null
}

export interface ToastState {
  isActive: boolean
  message: string
  error: boolean
}

export interface ModalState {
  modalRequestForm: {
    isActive: boolean
  }
  mobileMenu: {
    isActive: boolean
  }
  modalWindow: {
    isActive: boolean
  }
}