import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './ErrorPage'
import Member from './routes/Member'
import Application from './routes/Application'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/team/:teamName/member/:memberName',
		element: <Member />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/team/:teamName/vacancy/:vacancyTitle',
		element: <Application />,
		errorElement: <ErrorPage />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
