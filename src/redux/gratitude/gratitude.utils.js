import uniqid from 'uniqid'

export const addItemToList = (lists, itemToAdd) => { 
  // Check if the list we're trying to add an item to already exists
  const existingList = lists?.find(list => 
    list.category.toLowerCase() === itemToAdd.category.toLowerCase()
  )

  // If the list already exists
  if (existingList) {
    return lists.map(list => {
      // If the list is the one we want to add to
      if (list.category.toLowerCase() === itemToAdd.category.toLowerCase()) {
        // add the new item to it
        return {
          ...list,
          items: [
            ...list.items,
            {
              person: itemToAdd.person,
              gratitude: itemToAdd.gratitude,
              id: uniqid(),
              completed: false,
              createdAt: Date.now()
            }
          ]
        }
      } else {
        // Otherwise just return it as is
        return list
      }
    }) 
  }

  // Otherwise, it is a new list, so create the new list and add the new item to it
  return [...lists || [], {
    id: uniqid(),
    // capitalize category name
    category: itemToAdd.category[0].toUpperCase() + itemToAdd.category.substring(1),
    items: [
      {
        person: itemToAdd.person,
        gratitude: itemToAdd.gratitude,
        id: uniqid(),
        completed: false,
        createdAt: Date.now()
      }
    ]
  }]
}