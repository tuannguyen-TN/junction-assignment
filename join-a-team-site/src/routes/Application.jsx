import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Application() {
	const params = useParams()

	return <div>{Object.entries(params)}</div>
}

export default Application
