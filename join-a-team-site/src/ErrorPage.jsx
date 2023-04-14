import { useRouteError } from 'react-router-dom'

function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<div>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>It could be that there is no entry corresponding with these parameters</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default ErrorPage
