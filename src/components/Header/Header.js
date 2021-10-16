import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../redux/application/application.actions'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',

    '& .MuiToolbar-root': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: theme.spacing(0, 5),
      backgroundColor: theme.palette.common.white,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 2)
      }
    },

    '& .MuiButton-root': {
      backgroundColor: theme.palette.primary.main,

      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    }
  },
  title: {
    color: theme.palette.secondary.main
  }
}))

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleButtonClick = (evt) => {
    dispatch(toggleModal())
  }

  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar disableGutters>
        <Typography variant="h6" component="h1" className={classes.title}>
          gratitude
        </Typography>
        <Button variant="contained" onClick={handleButtonClick}>
          Add gratitude
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header