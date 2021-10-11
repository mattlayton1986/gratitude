import { combineReducers } from "redux";
import { ActionTypes } from "../../types";
import { addCategoryItem, addCategoryId } from './categories.utils'

// byId
const categoriesById = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GRATITUDE_ITEM: 
      return addCategoryItem(state, action.payload.category)
    default: 
      return state
  }
}

// allIds
const allCategories = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_GRATITUDE_ITEM: 
      return addCategoryId(state, action.payload.category)
    default: 
      return state
  }
}

const categoriesReducer = combineReducers({
  byId: categoriesById,
  allIds: allCategories
})

export default categoriesReducer