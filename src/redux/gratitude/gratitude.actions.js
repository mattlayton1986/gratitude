import { ActionTypes } from "../types"

export const addGratitudeItem = (item) => ({
  type: ActionTypes.ADD_GRATITUDE_ITEM,
  payload: item
})

// export const deleteGratitudeItem = (item) => ({
//   type: ActionTypes.DELETE_GRATITUDE_ITEM,
//   payload: item
// })

// export const editGratitudeItem = (item) => ({
//   type: ActionTypes.EDIT_GRATITUDE_ITEM,
//   payload: item
// })