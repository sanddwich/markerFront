import {
  SET_APP_ERROR,
  SET_APP_LOADING,
  SET_APP_MARKETUSER,
  SET_APP_PAGINATION,
  SET_APP_PRODUCTS,
  SET_APP_PRODUCT_CATEGORIES,
  SET_APP_TARIFF,
} from '../constants/ActionTypes'
import { AppActionType } from '../interfaces/app'
import { AppState } from '../interfaces/interfaces'

const initialState: AppState = {
  error: '',
  loading: false,
  tariff: '',
  marketUser: null,
  products: [],
  productCategories: [],
  pagination: {
    paginate: 10,
    lastPage: 1,
    page: 1,
    total: 1,
  },
}

const app = (state: AppState = initialState, action: AppActionType) => {
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case SET_APP_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case SET_APP_TARIFF:
      return {
        ...state,
        tariff: action.tariff,
      }
    case SET_APP_MARKETUSER:
      return {
        ...state,
        marketUser: action.marketUser,
      }
    case SET_APP_PRODUCTS:
      return {
        ...state,
        products: action.products,
      }
    case SET_APP_PRODUCT_CATEGORIES:
      return {
        ...state,
        productCategories: action.productCategories,
      }
    case SET_APP_PAGINATION:
      return {
        ...state,
        pagination: action.pagination,
      }
    default:
      return state
  }
}

export default app
