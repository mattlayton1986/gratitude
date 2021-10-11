import { combineReducers } from "redux";
import { 
  addItemItem, 
  addItemId, 
  deleteItemItem,
  deleteItemId,
  toggleComplete 
} from './items.utils'
import { ActionTypes } from "../../types";

const itemsById = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GRATITUDE_ITEM:
      return addItemItem(state, action.payload)
    case ActionTypes.DELETE_GRATITUDE_ITEM: 
      return deleteItemItem(state,action.payload)
    case ActionTypes.TOGGLE_ITEM_COMPLETE:
      return toggleComplete(state, action.payload)
    default: 
      return state
  }
}

const allItems = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_GRATITUDE_ITEM:
      return addItemId(state, action.payload.itemId)
    case ActionTypes.DELETE_GRATITUDE_ITEM: 
      return deleteItemId(state, action.payload)
    default: 
      return state
  }
}

const itemsReducer = combineReducers({
  byId: itemsById,
  allIds: allItems
})

export default itemsReducer