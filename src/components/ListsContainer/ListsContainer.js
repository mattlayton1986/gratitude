import React from 'react'
import { useSelector } from 'react-redux'
import Container from '@mui/material/Container'
import TabToolbar from '../TabToolbar/TabToolbar'
import TabPanel from '../TabPanel/TabPanel'
import GratitudeList from '../GratitudeList/GratitudeList'
import { selectAllCategoriesAsArray } from '../../redux/gratitude/categories/category.selectors'
import { selectTabValue } from '../../redux/application/application.selectors'

const ListsContainer = () => {
  const categoriesArray = useSelector(selectAllCategoriesAsArray)
  const tabValue = useSelector(selectTabValue)

  return (
    <Container component="main" maxWidth="false" disableGutters>
      <TabToolbar />
      {
        categoriesArray.map((category, index) => (
          <TabPanel key={category.id} value={tabValue} index={index}>
            <GratitudeList category={category} />
          </TabPanel>
        ))
      }
    </Container>
  )
}

export default ListsContainer