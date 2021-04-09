import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store