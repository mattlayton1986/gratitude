import React from 'react'
import Header from './components/Header/Header'
import ListsContainer from './components/ListsContainer/ListsContainer'
import ModalDialog from './components/ModalDialog/ModalDialog';
import { useSelector } from 'react-redux';
import { selectModalOpen } from './redux/application/application.selectors';
import './App.scss';

const App = () => {
  const modalOpen = useSelector(selectModalOpen)

  return (
    <div className="gratitude-app">
      <Header />
      <main>
        <ListsContainer />
      </main>
      <ModalDialog 
        open={modalOpen} 
      />
    </div>
  );
}

export default App