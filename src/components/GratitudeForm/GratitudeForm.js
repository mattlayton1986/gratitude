import React from 'react'
import { TextField, Button, FormLabel } from '@mui/material'
import CategoryField from '../CategoryField/CategoryField'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../redux/application/application.actions'
import { addGratitudeItem } from '../../redux/gratitude/gratitude.actions'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),

    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.secondary.main
    },

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },

    '& .MuiButtonBase-root.MuiButton-text': {
      margin: theme.spacing(2),
      padding: theme.spacing(1, 3),
    },

    '& .MuiButton-text': {
      color: theme.palette.primary.dark,
    },

    '& .MuiButton-contained': {
      backgroundColor: theme.palette.primary.main,

      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    }
  }
}))

const GratitudeForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [categoryValue, setCategoryValue] = React.useState(null)
  const [formData, setFormData] = React.useState({
    person: '',
    gratitude: '',
  })
  
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleAutocompleteChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      setCategoryValue({
        title: newValue,
      })
    } else if (newValue && newValue.inputValue) {
      setCategoryValue({
        title: newValue.inputValue
      })
    } else {
      setCategoryValue(newValue)
    }
  }

  const handleClose = () => {
    dispatch(toggleModal())
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const { person, gratitude } = formData

    // Don't submit if either form field is empty
    if (!person || !gratitude || !categoryValue) return

    dispatch(addGratitudeItem({
      person,
      gratitude,
      category: categoryValue.title
    }))

    handleClose()
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <FormLabel component="legend">What are you grateful for?</FormLabel>
      <TextField 
        id="person"
        name="person"
        label="I am grateful to"
        variant="filled"
        value={formData.person}
        onChange={handleChange}
      />

      <TextField 
        id="gratitude"
        name="gratitude"
        label="for"
        variant="filled"
        multiline
        maxRows={4}
        value={formData.gratitude}
        onChange={handleChange}
      />

      <CategoryField 
        category={categoryValue}
        handleChange={handleAutocompleteChange}
      />

      <div>
        <Button
          variant="text"
          color="primary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          disabled={!formData.person || !formData.gratitude || !categoryValue?.title}
          variant="contained"
          type="submit"
          color="primary"
        >
        Add
      </Button>
      </div>
    
    </form>
  )
}

export default GratitudeForm