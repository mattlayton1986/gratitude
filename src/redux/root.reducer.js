import { combineReducers } from "redux"
import gratitudeReducer from "./gratitude/gratitude.reducer"
import applicationReducer from "./application/application.reducer"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'application',
    'gratitude',
  ]
}

const rootReducer = combineReducers({
  application: applicationReducer,
  gratitude: gratitudeReducer
})

export default persistReducer(persistConfig, rootReducer)