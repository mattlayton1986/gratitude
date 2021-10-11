import { createSelector } from "reselect";

export const selectCategoriesById = state => state.gratitude.categories.byId

export const selectAllCategories = state => state.gratitude.categories.allIds

export const selectCategoryNames = createSelector(
  selectCategoriesById, selectAllCategories,
  (catById, allCatIds) => {
    return allCatIds.map(catId => catById[catId].category)
  }
)

export const selectAllCategoriesAsArray = createSelector(
  selectCategoriesById, selectAllCategories,
  (catById, allCatIds) => {
    return allCatIds.map(catId => catById[catId])
  }
)


export const selectCategoriesLength = createSelector(
  [selectAllCategories],
  (allCatIds) => allCatIds.length
)