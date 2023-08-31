import { useState } from 'react';
import { EcomProvider } from '../Context';

import './App.scss'
import AppUI from './AppUI'

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