export const addItemItem = (itemsById, payload) => {
  const { person, gratitude, itemId, category, createdAt, completed } = payload

  return {
    ...itemsById,
    [itemId]: {
      id: itemId,
      person,
      gratitude,
      category,
      createdAt,
      completed
    }
  }
}

export const addItemId = (itemIds, itemIdToAdd) => {
  return itemIds.concat(itemIdToAdd)
}

export const deleteItemItem = (itemsById, itemId) => {
  let itemsCopy = Object.assign({}, itemsById)
  delete itemsCopy[itemId]
  return itemsCopy
}

export const deleteItemId = (itemIds, itemIdToDelete) => {
  return itemIds.filter(item => item !== itemIdToDelete)
}

export const toggleComplete = (itemsById, itemId) => {
  
  return {
    ...itemsById,
    [itemId]: {
      ...itemsById[itemId],
      completed: !itemsById[itemId].completed
    }
  }
}