import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Member.css'

function Member() {
	const { memberName } = useParams()
	const [memberInfo, setMemberInfo] = useState({})

	useEffect(() => {
		axios
			.get(`http://localhost:5000/members/${memberName}`)
			.then((res) => setMemberInfo(res.data))
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className="info-container">
			<div className="member-title">
				<p className="member-name">{memberInfo.name}</p>
				<p className="member-role">/ {memberInfo.role}</p>
			</div>
			<p className="member-email">{memberInfo.email}</p>
			<div className="specialized-info">
				<div className="member-img"></div>
				<div className="member-skills">
					<h2>Skills</h2>
					{memberInfo.skills &&
						memberInfo.skills.map((item, index) => (
							<div className="skill-display" key={index}>
								{Array(item.proficiency).fill(<span className="validPoint"></span>)}
								{Array(5 - item.proficiency).fill(<span className="invalidPoint"></span>)}
								<span className="skill-title">{item.skill}</span>
								<br />
							</div>
						))}
				</div>
				<div className="member-about">
					<h2>About Me</h2>
					<p>{memberInfo.about}</p>
				</div>
			</div>
		</div>
	)
}

export default Member
