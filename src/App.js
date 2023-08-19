import React from 'react'
import './App.css'
import Button from '@mui/material/Button'
import generatePDF from './generatePDF'

function App() {
	return (
		<div className="App">
			<h1>Baixar Portfólio</h1>
			<Button variant="outlined" onClick={generatePDF}>
				Baixar
			</Button>
		</div>
	)
}

export default App
