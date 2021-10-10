import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from './root.reducer'

const middlewares = []

//Added to enable Redux DevTools extension
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

const persistor = persistStore(store)

export { store, persistor }