import React from 'react'
import './gratitude-item.styles.scss'

const GratitudeItem = ({ item }) => {
  return (
    <li>
      <div className="person">{item.person}</div>
      <div className="gratitude">{item.gratitude}</div>
    </li>
  )
}

export default GratitudeItem