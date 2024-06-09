import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import PrivateRoute from './components/PrivateContent'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
	const router = createBrowserRouter([
		{
			path: "/", element: <Layout />,
			children: [
				// {
					// element: <PrivateRoute />,
					// children: [
						{ path: "/", element: <Home /> },
					// ]
				// },
				{ path: "/login", element: <Login /> },
			]
		}
	])

	return <RouterProvider router={router} />
}

export default App
