import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Services from './pages/services.jsx'
import About from './pages/about.jsx'
import SinglePage from './pages/SinglePage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "services",
        element: <Services/>
      },
      {
        path: "singlePage/:id",
        element: <SinglePage/>
      },
      {
        path: "*",
        element: <h1>Not Found!</h1>
      },
    ]

}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
        <App />
  </RouterProvider>
)
 