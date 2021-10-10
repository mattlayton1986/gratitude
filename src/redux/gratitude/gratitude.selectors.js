import { createSelector } from "reselect";

const selectGratitude = state => state.gratitude

export const selectCategories = createSelector(
  [selectGratitude],
  (gratitude) => gratitude.lists?.map(list => list.category) || []
)

export const selectLists = createSelector(
  [selectGratitude],
  (gratitude) => gratitude.lists
)

export const selectListsLength = createSelector(
  [selectGratitude], 
  (gratitude) => gratitude.lists.length
)