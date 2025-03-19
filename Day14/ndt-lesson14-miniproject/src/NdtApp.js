import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NdtNavBar from './components/NdtNavBar'
import NdtHome from './components/NdtHome'
import NdtListUser from './components/NdtListUser'
import NdtEditUser from './components/NdtEditUser'
import NdtCreateUser from './components/NdtCreateUser'


export default function NdtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1>Nguyễn Đức Thành - Mini Project</h1>
      <hr />
      <Router>
        <NdtNavBar />
        <hr />
        <Routes>
          <Route path="/" element={<NdtHome/>}/>
          <Route path="/list-user" element={<NdtListUser/>}/>
          <Route path='/create-user' element={<NdtCreateUser />} />
          <Route path='/edit-user/:id' element={<NdtEditUser />} />
        </Routes>
      </Router>
    </div>
  )
}



