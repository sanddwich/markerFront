import {
  SET_APP_ERROR,
  SET_APP_LOADING,
  SET_APP_MARKETUSER,
  SET_APP_PAGINATION,
  SET_APP_PRODUCTS,
  SET_APP_PRODUCT_CATEGORIES,
  SET_APP_TARIFF,
} from '../constants/ActionTypes'
import Pagination from '../interfaces/AdditionalInterfaces/Pagination'
import Product from './AdditionalInterfaces/Product'
import ProductCategory from './AdditionalInterfaces/ProductCategory'

interface setAppLoading {
  type: typeof SET_APP_LOADING
  loading: boolean
}

interface setAppError {
  type: typeof SET_APP_ERROR
  error: string
}

interface setAppTariff {
  type: typeof SET_APP_TARIFF
  tariff: string
}

interface setAppMarketUser {
  type: typeof SET_APP_MARKETUSER
  marketUser: string
}

interface setAppProducts {
  type: typeof SET_APP_PRODUCTS
  products: Product[]
}

interface setAppProductCategories {
  type: typeof SET_APP_PRODUCT_CATEGORIES
  productCategories: ProductCategory[]
}

interface setAppPagination {
  type: typeof SET_APP_PAGINATION
  pagination: Pagination
}

export type AppActionType =
  | setAppLoading
  | setAppError
  | setAppTariff
  | setAppMarketUser
  | setAppProducts
  | setAppPagination
  | setAppProductCategories
