import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesLength } from '../../redux/gratitude/categories/category.selectors'
import {Box, Container, Typography} from '@mui/material'
import TabsMenu from '../TabsMenu/TabsMenu'
import { makeStyles } from '@mui/styles'
import { ReactComponent as Pointer } from '../../assets/arrow_11.svg' 

const boxStyles = {
  width: '100vw',
  px: '40px',   // padding left and right
  display: 'flex',
  justifyContent: 'space-between',
  border: 2,
  borderColor: 'divider'
}

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '48px',
    display: 'flex',
    justifyContent: 'space-evenly',

    '& .MuiTypography-h6': {
      display: 'inline-block',
      padding: theme.spacing(1)
    },

    '& svg': {
      transform: 'rotate(180deg) scale(1.5, 0.6)',
      display: 'inline-block',
      verticalAlign: 'middle',
      position: 'relative',
      top: '-10px',
      left: '30px',
      '& g': {
        stroke: theme.palette.primary.main,
        strokeWidth: '3'
      }
    }
  }
}))

const TabToolbar = () => {
  const classes = useStyles()
  const categoriesLength = useSelector(selectCategoriesLength)
  return (
    <Box sx={boxStyles}>
      {
        categoriesLength === 0 ? (
          <Container maxWidth='xl' className={classes.container}>
            <Typography variant="h6">You haven't added any categories yet. Click here to get started!</Typography>
            <Pointer />
          </Container>
        ) : (
          <TabsMenu />
          )
        
      }
    </Box>
  )
}

export default TabToolbar