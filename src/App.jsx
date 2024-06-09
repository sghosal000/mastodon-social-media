import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Login from './pages/Login'


function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        // { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
