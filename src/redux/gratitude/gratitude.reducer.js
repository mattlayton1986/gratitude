import categoriesReducer from "./categories/categories.reducer";
import listsReducer from "./lists/lists.reducer";
import itemsReducer from './items/items.reducer'
import { combineReducers } from "redux";

const gratitudeReducer = combineReducers({
  categories: categoriesReducer,
  items: itemsReducer
})

export default gratitudeReducer