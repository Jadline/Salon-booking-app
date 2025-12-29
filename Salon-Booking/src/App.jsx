
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

import Booking from './Pages/Booking'
import Login from './Pages/Login'

import Dashboard from './Pages/Dashboard'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import AdminLayout from './Pages/AdminLayout'
import SalonBookings from './Pages/SalonBookings'
import Clients from './Pages/Clients'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
  
      <Route path='booking' element={<Booking/>}/>
      {/* <Route path='login' element={<Login/>}/> */}
     
     
      <Route path='services' element ={<Services/>}/>
      <Route path='gallery' element ={<Gallery/>}/>
      {/* <Route path='admin' element={<AdminLayout/>}>
           <Route index element={<SalonBookings />} />
           <Route path='dashboard' element={<Dashboard/>}/>
           <Route path='clients' element={<Clients/>}/>
           <Route path='salonbookings' element={<SalonBookings/>}/>
      </Route> */}
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
