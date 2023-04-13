import { useState } from 'react'
import './App.css'
import Teams from './Teams'

function App() {
	return (
		<div className="app">
			<div className="intro">
				<h1>JOIN A TEAM</h1>
				<p>Apply for a role that suits you the most and join a team.</p>
			</div>
			<Teams />
		</div>
	)
}

export default App
