import React from 'react'
import { useDispatch } from 'react-redux'
import { 
  ListItem, 
  ListItemText, 
  Box, 
  Checkbox, 
  IconButton 
} from '@mui/material'
import { 
  toggleItemComplete, 
  deleteGratitudeItem 
} from '../../redux/gratitude/items/items.actions';
import { 
  StarRounded as StarRoundedIcon, 
  StarBorderRounded as StarBorderRoundedIcon,
  EditRounded as EditRoundedIcon,
  DeleteRounded as DeleteRoundedIcon
} from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  listItem: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '80px',

    '& .MuiCheckbox-root': {
      color: theme.palette.grey[400],
      '&.Mui-checked': {
        color: yellow[700],
      },
    },
    '& .MuiListItemText-root': {
      padding: theme.spacing(0, 2)
    },
  },
  buttonGroup: {
    display: 'flex',

    '& .delete': {
      color: theme.palette.error.light
    }
  }
}))

const personBoxStyles = {
  width: '35%', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
}

const GratitudeItem = ({ item }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleToggleCheckbox = (itemId) => {
    dispatch(toggleItemComplete(itemId))
  }

  const handleDeleteItem = (itemId) => {
    dispatch(deleteGratitudeItem(itemId))
  }

  return (
    <ListItem 
      className={classes.listItem}
      divider
    >
      <Box sx={personBoxStyles}>
        <Checkbox 
          disableRipple
          icon={<StarBorderRoundedIcon />}
          checkedIcon={<StarRoundedIcon />}
          checked={item.completed}
          onChange={() => handleToggleCheckbox(item.id)}
        />
        <ListItemText primary={item.person} />
      </Box>
      <Box sx={{ width: '65%' }}>
        <ListItemText primary={item.gratitude} />
      </Box>
      <Box className={classes.buttonGroup}>
        <IconButton className="edit" aria-label="edit" size="medium">
          <EditRoundedIcon fontSize="inherit" />
        </IconButton>
        <IconButton 
          className="delete" 
          aria-label="delete" 
          size="medium"
          onClick={() => handleDeleteItem(item.id)}
        >
          <DeleteRoundedIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </ListItem>
  )
}

export default GratitudeItem