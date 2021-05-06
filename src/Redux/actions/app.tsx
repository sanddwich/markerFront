import { SET_APP_ERROR, SET_APP_LOADING, SET_APP_MARKETUSER, SET_APP_PAGINATION, SET_APP_PRODUCTS, SET_APP_PRODUCT_CATEGORIES, SET_APP_TARIFF} from "../constants/ActionTypes";
import { MarketUser } from "../interfaces/AdditionalInterfaces/MarketUser";
import Pagination from "../interfaces/AdditionalInterfaces/Pagination";
import Product from "../interfaces/AdditionalInterfaces/Product";
import ProductCategory from "../interfaces/AdditionalInterfaces/ProductCategory";

export const setAppLoading = (loading: boolean) => ({
  type: SET_APP_LOADING,
  loading,
})

export const setAppError = (error: string) => ({
  type: SET_APP_ERROR,
  error,
})

export const setAppTariff = (tariff: string) => ({
  type: SET_APP_TARIFF,
  tariff,
})

export const setAppMarketUser = (marketUser: MarketUser | null) => ({
  type: SET_APP_MARKETUSER,
  marketUser,
})

export const setAppProducts = (products: Product[]) => ({
  type: SET_APP_PRODUCTS,
  products,
})

export const setAppProductCategories = (productCategories: ProductCategory[]) => ({
  type: SET_APP_PRODUCT_CATEGORIES,
  productCategories,
})

export const setAppPagination = (pagination: Pagination) => ({
  type: SET_APP_PAGINATION,
  pagination,
})
