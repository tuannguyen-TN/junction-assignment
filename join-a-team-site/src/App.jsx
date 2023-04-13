import { useState, useEffect } from 'react'
import './App.css'
import Teams from './Teams'
import axios from 'axios'

function App() {
	// const [teams, setTeams] = useState([])

	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:5000/teams')
	// 		.then((res) => setTeams(res.data))
	// 		.catch((err) => console.log(err))
	// }, [])

	return (
		<div className="app">
			<div className="intro">
				<h1>JOIN A TEAM</h1>
				<p>Apply for a role that suits you the most and join a team.</p>
			</div>
			{/* <Teams team={teams[0]} />
			<Teams team={teams[1]} /> */}
			<Teams />
		</div>
	)
}

export default App
