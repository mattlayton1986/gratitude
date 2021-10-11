import React from 'react'
import { useDispatch } from 'react-redux'
import { 
  ListItem, 
  ListItemText,
  Container, 
  Box, 
  Checkbox, 
  IconButton,
  useMediaQuery,
  useTheme
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
    justifyContent: 'space-evenly',
    minHeight: '80px',

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 0)
    },

    '& .text-container': {
      display: 'flex',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        '& .personText': {
          fontStyle: 'italic',
        },
      }
    },

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

const GratitudeItem = ({ item }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

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
      disableGutters={isSmall}
    >
      <Checkbox 
        disableRipple
        icon={<StarBorderRoundedIcon />}
        checkedIcon={<StarRoundedIcon />}
        checked={item.completed}
        onChange={() => handleToggleCheckbox(item.id)}
      />
      <Container className="text-container">
        <Box sx={{ width: isSmall ? '100%' : '35%'}}>
          <ListItemText className="personText" primary={item.person} />
        </Box>
        <Box sx={{ width: isSmall ? '100%' : '65%' }}>
          <ListItemText primary={item.gratitude} />
        </Box>
      </Container>
      <Box className={classes.buttonGroup}>
        <IconButton className="edit" aria-label="edit" size="medium" disabled>
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