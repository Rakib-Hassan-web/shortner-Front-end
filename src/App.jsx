import React from 'react'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Login from './Pages/Login'
import Registration from './Pages/Registration'

import Home from './Components/Home'
import LayoutOne from './Layout/LayoutOne'

const App = () => {

  const routee =createBrowserRouter(createRoutesFromElements(

  <Route>
  <Route index element={<Home/>}/>
  <Route path='/' element={<LayoutOne/>}>
  
  


  <Route path='/Login' element={<Login/>}/>
  <Route path='/Registration' element={<Registration/>}/>

  </Route>






</Route>
  ))
  return (
    <>


 {/* <BrowserRouter>
 
  <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Registration/>}/>
    
   <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
   </Route>






  </Routes>
 

 </BrowserRouter> */}



<RouterProvider router={routee}/>


    </>
  )
}

export default App