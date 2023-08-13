import React from 'react'
import './App.css'
import generatePDF from './generatePDF'

function App() {
  return (
    <div className="App">
      <h1>Baixar Currículo</h1>
      <button onClick={generatePDF}>Baixar</button>
    </div>
  )
}

export default App;
