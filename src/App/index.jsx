import { useState } from 'react';
import { EcomProvider } from '../Context';
import AppUI from './AppUI'
import './App.scss'

function App() {

  return (
    <>
      <EcomProvider>
        <AppUI />
      </EcomProvider>
    </>
  )
}

export default App