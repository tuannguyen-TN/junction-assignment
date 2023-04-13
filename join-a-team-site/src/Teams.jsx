import { useState } from 'react'
import './Teams.css'

function Teams() {
	const randomArr = [
		{
			title: 'Pink Unicorn',
			challenge: 'Fazer',
			description:
				'We are a team of three friends studying at Aalto University. We have several ideas for the upcoming project but we are sure that we would like to approach the topic from a user centered point of view.',
			idea: 'We aim to develop a feasible and useful idea that is based on empathy and understanding of human psychology.',
			vacancies: ['Designer', 'Engineer 1', 'Engineer 2'],
		},
		{
			title: 'Discoverers',
			challenge: 'Fazer',
			description:
				'We are a team of three friends studying at Aalto University. We have several ideas for the upcoming project but we are sure that we would like to approach the topic from a user centered point of view.',
			idea: 'We aim to develop a feasible and useful idea that is based on empathy and understanding of human psychology.',
			vacancies: ['UX Designer', 'UI Designer', 'Engineer 2'],
		},
	]

	return (
		<div className="team-container">
			{randomArr.map((item, index) => (
				<div key={index} className="team-item">
					<h1>{item.title}</h1>
					<h2 className="challenge">#{item.challenge}</h2>
					<p>{item.description + item.idea}</p>
					<h2 className="hiring-title">WE ARE LOOKING FOR</h2>
					<div className="vacancy-container">
						{item.vacancies.map((vacancy, index) => (
							<a href="/" key={index} className="vacancy-item">
								<h2 className="vacancy">{vacancy}</h2>
							</a>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Teams
