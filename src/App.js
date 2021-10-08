import React from 'react'
import Header from './components/header/header.component'
import GratitudeForm from './components/gratitude-form/gratitude-form.component';
import GratitudeList from './components/gratitude-list/gratitude-list.component';
import uniqid from 'uniqid'
import './App.scss';

const App = () => {
  const [formData, setFormData] = React.useState({
    person: '',
    gratitude: ''
  })
  const [gratitudeList, setGratitudeList] = React.useState(
    JSON.parse(localStorage.getItem('gratitudeList')) ||  []
  )

  React.useEffect(() => {
    localStorage.setItem('gratitudeList', JSON.stringify(gratitudeList))
  }, [gratitudeList])

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const person = evt.target.person.value
    const gratitude = evt.target.gratitude.value
    if (!person || !gratitude) return

    setGratitudeList([
      ...gratitudeList,
      { person, gratitude, id: uniqid() }
    ])

    

    setFormData({
      person: '',
      gratitude: ''
    })
  }

  return (
    <div className="gratitude-app">
      <Header />
      <main>
        <GratitudeForm 
          person={formData.person} 
          gratitude={formData.gratitude}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <GratitudeList list={gratitudeList} />
      </main>
    </div>
  );
}

export default App;
