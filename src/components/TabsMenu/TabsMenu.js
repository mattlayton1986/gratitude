import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategoriesById } from '../../redux/gratitude/categories/category.selectors'
import { selectTabValue } from '../../redux/application/application.selectors'
import { setTabValue } from '../../redux/application/application.actions'
import { Tabs, Tab } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.secondary.light
    },
    '& .MuiTab-root.Mui-selected': {
      color: theme.palette.secondary.light,
    }
  }
}))

const TabsMenu = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const categories = useSelector(selectCategoriesById)
  const tabValue = useSelector(selectTabValue)

  const handleChange = (evt, newValue) => {
    dispatch(setTabValue(newValue))
  }

  return (
    <Tabs
      className={classes.root}
      value={tabValue}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {
        Object.keys(categories).map(item => (
          <Tab key={categories[item].id} label={categories[item].category} />
        ))
      }
    </Tabs>
  )
}

export default TabsMenu