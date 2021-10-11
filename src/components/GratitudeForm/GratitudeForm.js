import React from 'react'
import { TextField, Button, FormLabel } from '@mui/material'
import CategoryField from '../CategoryField/CategoryField'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal, setTabValue } from '../../redux/application/application.actions'
import { addGratitudeItem } from '../../redux/gratitude/items/items.actions'
import { selectAllCategories } from '../../redux/gratitude/categories/category.selectors'
import uniqid from 'uniqid'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  const categoryIds = useSelector(selectAllCategories)
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
      category: categoryValue.title,
      completed: false,
      createdAt: Date.now(),
      itemId: uniqid()
    }))

    const newItemTab = categoryIds.indexOf(categoryValue.title.toLowerCase())

    // Change active tab to the category of newly-submitted item
    if (newItemTab >= 0) {
      dispatch(setTabValue(newItemTab))
    }

    handleClose()
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <FormLabel component="legend">What are you grateful for?</FormLabel>
      <TextField 
        autoFocus
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