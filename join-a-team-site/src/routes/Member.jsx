import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Member() {
	const params = useParams()

	return <div>{Object.entries(params)}</div>
}

export default Member
