export const addListItem = (listsById, payload) => {
  // Check if list with payload.category already exists
  const listExists = Object.keys(listsById).some(key => {
    return listsById[key].category === payload.category
  })

  if (listExists) {
    return listsById
  } else {
    return {
      ...listsById,
      [payload.listId]: {
        id: payload.listId,
        category: payload.category,
        createdAt: Date.now()
      }
    }
  }
}

export const addListID = (listIds, listToAdd) => {
  // unfinished
}