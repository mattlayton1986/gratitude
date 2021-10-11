import { createSelector } from "reselect"

export const selectItemsById = state => state.gratitude.items.byId

export const selectAllItemIds = state => state.gratitude.items.allIds

export const selectAllItemsAsArray = createSelector(
  selectItemsById, selectAllItemIds,
  (itemsById, allItemIds) => {
    return allItemIds.map(itemId => itemsById[itemId])
  }
)