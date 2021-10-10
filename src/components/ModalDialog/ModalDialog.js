import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '@mui/material/Dialog'
import GratitudeForm from '../GratitudeForm/GratitudeForm'
import { selectModalOpen } from '../../redux/application/application.selectors'
import { toggleModal } from '../../redux/application/application.actions'

const ModalDialog = () => {
  const modalOpen = useSelector(selectModalOpen)
  const dispatch = useDispatch()

  const handleModalClose = (evt) => {
    dispatch(toggleModal())
  }
  
  return (
    <Dialog 
      open={modalOpen} 
      onClose={handleModalClose}
    >
      <GratitudeForm />
    </Dialog>
  )
}

export default ModalDialog