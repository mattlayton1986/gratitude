import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListSubheader } from '@mui/material'
import GratitudeItem from '../GratitudeItem/GratitudeItem'
import { selectAllItemsAsArray } from '../../redux/gratitude/items/items.selectors'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
  list: {
    '&.MuiList-root': {
      width: '90%',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: `${theme.spacing(3)} auto`,
      padding: theme.spacing(4),
      boxShadow: theme.shadows[6],
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: `${theme.spacing(1)} auto`,
        padding: theme.spacing(1)
      },
    },

    '& .MuiListSubheader-root': {
      width: '100%',
    },
  },
}))

const GratitudeList = ({ category, children }) => {
  const classes = useStyles() 
  const itemsArray = useSelector(selectAllItemsAsArray)
  const itemsInCategory = itemsArray.filter(item => item.category === category.category).reverse()

  return (
    <List 
      id={category.id}
      className={classes.list} 
      sx={{ margin: '0 auto' }}
      subheader={
        <ListSubheader component="li" disableSticky disableGutters>
          {new Date().toLocaleDateString()}
        </ListSubheader>
      }
    >
      {
        itemsInCategory.map(item => (
          <GratitudeItem key={item.id} item={item} />
        ))
      }
    </List>
  )
}

export default GratitudeList