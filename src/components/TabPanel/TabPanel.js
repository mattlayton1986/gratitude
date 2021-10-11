import React from 'react'
import { Container } from '@mui/material'

const TabPanel = ({ children, value, index, ...otherProps }) => {

  return (
    <Container 
      role="tabpanel"
      hidden={value !== index}
      maxWidth="xl"
      {...otherProps}
    >
    {
      value === index && children
    }
    </Container>
  )
}

export default TabPanel