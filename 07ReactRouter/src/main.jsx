import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter , Route} from 'react-router-dom'
import Root from './root'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { createRoutesFromElements } from 'react-router-dom'
import User from './components/User/User'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/>,
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
