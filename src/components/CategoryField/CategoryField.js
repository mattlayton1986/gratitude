import React from 'react'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectCategoryNames } from '../../redux/gratitude/categories/category.selectors'
import capitalize from 'lodash.capitalize'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',

    '& .MuiFormControl-root.MuiTextField-root': {
      margin: theme.spacing(2, 0)
    }
  }
}))

const filter = createFilterOptions()

const CategoryField = ({ categoryValue, handleChange }) => {
  const classes = useStyles()
  const categories = useSelector(selectCategoryNames)

  // Options needs to be an object with property 'title
  const categoryOptions = categories.map(category => ({title: capitalize(category)})) 


  const filterCategories = (options, params) => {
    const filtered = filter(options, params)
  
    const { inputValue } = params
    const isExisting = options.some((option) => inputValue === option.title)
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        title: `Add "${inputValue}"`,
      })
    }
    return filtered
  }

  const getOptionLabel = (option) => {
    if (typeof option === 'string') {
      return option
    }
    if (option.inputValue) {
      return option.inputValue
    }
    return option.title
  }

  return (
    <Autocomplete 
      className={classes.root}
      id="category"
      name="category"
      label="Category"
      value={categoryValue}
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={categoryOptions}
      onChange={handleChange}
      filterOptions={filterCategories}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      renderInput={(params) => (
        <TextField {...params} variant="filled" label="Select a category..." />
      )}
    />
  )
}

export default CategoryField