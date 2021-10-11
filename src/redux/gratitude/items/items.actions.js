import { ActionTypes } from "../../types";

export const toggleItemComplete = (itemId) => ({
  type: ActionTypes.TOGGLE_ITEM_COMPLETE,
  payload: itemId
})

export const addGratitudeItem = (item) => ({
  type: ActionTypes.ADD_GRATITUDE_ITEM,
  payload: item
})

export const deleteGratitudeItem = (item) => ({
  type: ActionTypes.DELETE_GRATITUDE_ITEM,
  payload: item
})

// export const editGratitudeItem = (item) => ({
//   type: ActionTypes.EDIT_GRATITUDE_ITEM,
//   payload: item
// })