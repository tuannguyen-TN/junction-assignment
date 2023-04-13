import { useState } from 'react'
import './Teams.css'

function Teams() {
	const [showMore, setShowMore] = useState(true)
	const randomArr = [
		{
			title: 'Pink Unicorn',
			challenge: 'Fazer',
			description:
				'We are a team of three friends studying at Aalto University. We have several ideas for the upcoming project but we are sure that we would like to approach the topic from a user centered point of view. We aim to develop a feasible and useful idea that is based on empathy and understanding of human psychology.',
			idea: 'Our idea is to design a digital solution for mobile phones, which would focus on helping teenagers access free therapy sessions.',
			vacancies: ['Designer', 'Engineer 1', 'Engineer 2'],
			members: [
				{
					name: 'A',
					role: 'Z',
				},
				{
					name: 'B',
					role: 'Z',
				},
				{
					name: 'C',
					role: 'Z',
				},
			],
		},
		{
			title: 'Discoverers',
			challenge: 'Fazer',
			description:
				'We are a team of three friends studying at Aalto University. We have several ideas for the upcoming project but we are sure that we would like to approach the topic from a user centered point of view. We aim to develop a feasible and useful idea that is based on empathy and understanding of human psychology.',
			idea: 'Our idea is to design a digital solution for mobile phones, which would focus on helping teenagers access free therapy sessions.',
			vacancies: ['UX Designer', 'UI Designer', 'Engineer 2'],
			members: [
				{
					name: 'A',
					role: 'Z',
				},
				{
					name: 'B',
					role: 'Z',
				},
				{
					name: 'C',
					role: 'Z',
				},
			],
		},
	]

	return (
		<div className="team-container">
			{randomArr.map((item, index) => (
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
						</div>
					) : null}
				</div>
			))}
		</div>
	)
}

export default Teams
