import React from 'react'
import { Link, Outlet } from 'react-router-dom';
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
