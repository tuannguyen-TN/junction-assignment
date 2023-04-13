import { useEffect, useState } from 'react'
import './Teams.css'
import showMoreLogo from './assets/down-arrow.svg'
import showLessLogo from './assets/up-arrow.svg'
import axios from 'axios'

function Teams() {
	const [showMore, setShowMore] = useState(false)
	const [teams, setTeams] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:5000/teams')
			.then((res) => setTeams(res.data))
			.catch((err) => console.log(err))
	}, [])

	const toggleShowMore = () => {
		setShowMore(!showMore)
	}

	return (
		<div className="team-container">
			{teams.map((item, index) => (
				<div key={index} className={showMore ? 'team-item-extended' : 'team-item'}>
					<div className="team-title">
						<h1>{item.title.toUpperCase()}</h1>
						<h2 className="challenge">#{item.challenge}</h2>
					</div>
					<p>{item.idea}</p>
					{showMore ? <p>{item.description}</p> : null}
					<h2 className="section-title">WE ARE LOOKING FOR</h2>
					<div className="vacancy-container">
						{item.vacancies.map((vacancy, index) => (
							<a href="/" key={index} className="vacancy-item">
								<h2 className="vacancy">{vacancy}</h2>
							</a>
						))}
					</div>
					{showMore ? (
						<div>
							<h2 className="section-title">WHO WE ARE</h2>
							<div className="member-container">
								{item.members.map((member, index) => (
									<a href="/" key={index} className="member-item"></a>
								))}
							</div>
							<div className="member-info-container">
								{item.members.map((member, index) => (
									<div key={index} className="member-info-item">
										<p>{member.name}</p>
										<p>{member.role}</p>
									</div>
								))}
							</div>
						</div>
					) : null}
					{showMore ? (
						<button className="show-less-logos" onClick={toggleShowMore}>
							<img src={showLessLogo} className="logo" alt="Up arrow" />
						</button>
					) : (
						<button className="show-more-logos" onClick={toggleShowMore}>
							<img src={showMoreLogo} className="logo" alt="Down arrow" />
						</button>
					)}
				</div>
			))}
		</div>
	)
}

export default Teams
