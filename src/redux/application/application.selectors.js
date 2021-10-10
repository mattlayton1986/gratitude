import { createSelector } from 'reselect'

const selectApplication = state => state.application

export const selectModalOpen = createSelector(
  [selectApplication],
  (application) => application.modalOpen
)

export const selectTabValue = createSelector(
  [selectApplication],
  (application) => application.tabValue
)