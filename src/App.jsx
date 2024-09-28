import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import AppLayout from './components/layout/AppLayout'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/layout/CountryDetails'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<AppLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/country' element={<Country />} />
        <Route path='/country/:id' element={<CountryDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      </>
    )
  )
  
  return (
     <RouterProvider router={router}/>
  )
}

export default App
