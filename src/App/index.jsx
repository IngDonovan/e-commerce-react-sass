import { useState } from 'react'
import { EcomProvider } from '../Context'

import './App.css'

function App() {

  return (
    <>
      <EcomProvider>
        <h1>Hola</h1>
      </EcomProvider>
    </>
  )
}

export default App