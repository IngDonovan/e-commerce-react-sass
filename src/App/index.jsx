import { useState } from 'react'
import { EcomProvider } from '../Context'

import './App.scss'

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