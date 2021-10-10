import React from 'react'
import Header from './components/Header/Header'
// import GratitudeList from './components/GratitudeList/GratitudeList';
import ModalDialog from './components/ModalDialog/ModalDialog';
import TabToolbar from './components/TabToolbar/TabToolbar';
import { useSelector } from 'react-redux';
import { selectModalOpen } from './redux/application/application.selectors';
import './App.scss';

const App = () => {
  const modalOpen = useSelector(selectModalOpen)

  return (
    <div className="gratitude-app">
      <Header />
      <main>
        <TabToolbar />
        {/* <GratitudeList /> */}
      </main>
      <ModalDialog 
        open={modalOpen} 
      />
    </div>
  );
}

export default App