import React from 'react'
import { BrowserRouter as NdtRouter, Route, Routes } from 'react-router-dom'
import NdtNarBar from './components/NdtNarBar'
import NdtHome from './components/NdtHome'
import NdtListUser from './components/NdtListUser'
import NdtEditUser from './components/NdtEditUser'
import NdtCreateUser from './components/NdtCreateUser'

export default function NdtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-success text-center'>K23CNT2 - Nguyễn Đức Thành - 2310900098</h1>
      <hr/>
      <NdtRouter>
        <NdtNarBar />
        <hr />
        <Routes>
            <Route path='/' element={<NdtHome/>} />
            <Route path='/ndt-list-user' element={<NdtListUser/>} />
            <Route path='/ndt-create-user' element={<NdtCreateUser/>} />
            <Route path='/ndt-edit-user/:id' element={<NdtEditUser/>} />
        </Routes>
      </NdtRouter>
    </div>
  )
}
