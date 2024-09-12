import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>

      },
      {
        path: 'About',
        element: <About/>

      },
      {
        path: 'Product',
        element: <Product/>

      },
      {
        path: 'Contact',
        element: <Contact/>

      },
      {
        path: '*',
        element: <h1>Not fonud</h1>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} >
<App />
</RouterProvider>
)
