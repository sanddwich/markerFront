import { SET_APP_ERROR, SET_APP_LOADING, SET_APP_MARKETUSER, SET_APP_TARIFF} from "../constants/ActionTypes";
import { MarketUser } from "../interfaces/AdditionalInterfaces/MarketUser";

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

export const setAppMarketUser = (marketUser: MarketUser) => ({
  type: SET_APP_MARKETUSER,
  marketUser,
})
