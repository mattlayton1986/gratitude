import React from 'react'
import GratitudeItem from '../gratitude-item/gratitude-item.component'
import './gratitude-list.styles.scss'

const GratitudeList = ({ list }) => {
  return (
    <ul>
      {
        list.map(item => (
          <GratitudeItem key={item.id} item={item} />
        ))
      }
    </ul>
  )
}

export default GratitudeList