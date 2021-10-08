import React from 'react'
import './gratitude-form.styles.scss'

const GratitudeForm = ({ person, gratitude, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="person">I am grateful to</label>
    <input type="text" id="person" name="person" value={person} onChange={handleChange} />
    <label htmlFor="gratitude">for</label>
    <textarea id="gratitude" name="gratitude" value={gratitude} onChange={handleChange} />
    <input id="submit" type="submit" value="Add gr@titude" />
  </form>
)

export default GratitudeForm