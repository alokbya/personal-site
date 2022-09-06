import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation.mjs';

const App = () => {
  return (
    <>
      
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
