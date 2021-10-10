import React from 'react'
import { List, ListSubheader } from '@mui/material'
import GratitudeItem from '../GratitudeItem/GratitudeItem'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux';
import { selectGratitudeList } from '../../redux/gratitude/gratitude.selectors'

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
    },

    '& .MuiListSubheader-root': {
      width: '100%',
    },
  },
}))

const GratitudeList = () => {
  const classes = useStyles() 
  const gratitudeList = useSelector(selectGratitudeList)

  return (
    <List 
      className={classes.list} 
      sx={{ margin: '0 auto' }}
      subheader={
        <ListSubheader component="li" disableSticky disableGutters>
          {new Date().toLocaleDateString()}
        </ListSubheader>
      }
    >
      {
        gratitudeList.map(item => (
          <GratitudeItem key={item.id} item={item} />
        ))
      }
    </List>
  )
}

export default GratitudeList