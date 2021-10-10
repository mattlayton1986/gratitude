import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLists } from '../../redux/gratitude/gratitude.selectors'
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
  const lists = useSelector(selectLists)
  const tabValue = useSelector(selectTabValue)

  const handleChange = (evt, newValue) => {
    dispatch(setTabValue(newValue))
  }

  console.log(tabValue)
  return (
    <Tabs
      className={classes.root}
      value={tabValue}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {
        lists.map(list => (
          <Tab key={list.id} label={list.category} />
        ))
      }
    </Tabs>
  )
}

export default TabsMenu