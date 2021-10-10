import React from 'react'
import { ListItem, ListItemText, Box, Checkbox } from '@mui/material'
import { 
  StarRounded as StarRoundedIcon, 
  StarBorderRounded as StarBorderRoundedIcon 
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
}))

const personBoxStyles = {
  width: '35%', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
}

const GratitudeItem = ({ item }) => {
  const classes = useStyles()

  return (
    <ListItem 
      className={classes.listItem}
      divider
    >
      <Box sx={personBoxStyles}>
        <Checkbox 
          icon={<StarBorderRoundedIcon />}
          checkedIcon={<StarRoundedIcon />}
        />
        <ListItemText primary={item.person} />
      </Box>
      <Box sx={{ width: '65%' }}>
        <ListItemText primary={item.gratitude} />
      </Box>
    </ListItem>
  )
}

export default GratitudeItem