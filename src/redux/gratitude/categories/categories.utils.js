export const addCategoryItem = (categoriesById, categoryToAdd) => {
  const categoryId = categoryToAdd.toLowerCase()
  
  return {
    ...categoriesById,
    [categoryId]: {
      id: categoryId,
      category: categoryToAdd
    }
  }
}

export const addCategoryId = (categoryIds, categoryIdToAdd) => {
  const categoryId = categoryIdToAdd.toLowerCase()

  if (categoryIds.includes(categoryId)) {
    // don't add it again
    return categoryIds
  } else {
    return categoryIds.concat(categoryId)
  }
}