import { SET_APP_ERROR, SET_APP_LOADING, SET_APP_TARIFF } from "../constants/ActionTypes";

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

export type AppActionType =
  | setAppLoading
  | setAppError
  | setAppTariff