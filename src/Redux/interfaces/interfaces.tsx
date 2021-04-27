import { MarketUser } from "./AdditionalInterfaces/MarketUser";
import Pagination from "./AdditionalInterfaces/Pagination";
import Product from "./AdditionalInterfaces/Product";

export interface AppState {
  loading: boolean
  error: string
  tariff: string
  marketUser: MarketUser | null
  products: Product[]
  pagination: Pagination
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