import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NdtNavNar from './components/NdtNavNar'
import NdtHome from './components/NdtHome'
import NdtAbout from './components/NdtAbout'
import NdtContact from './components/NdtContact'
import NdtListUser from './components/NdtListUser'
import NdtFormUser from './components/NdtFormUser'

export default function NdtApp() {

  const listUsers = [
  {id:"SV001", ndtFullName:"Nguyễn Đức Thành", ndtUserName: "thanhduc", ndtPassword: "123456"},
  {id:"SV002", ndtFullName:"Nguyễn Đức Thanh", ndtUserName: "thanhduc", ndtPassword: "123456@"},
  {id:"SV003", ndtFullName:"Nguyễn Đức Thạnh", ndtUserName: "thanhduc", ndtPassword: "123456a"},
  ]

  const [ndtUsers, setNdtUsers] = useState(listUsers)

  //Hàm xử lý sự kiện thêm mới
  const ndtHandleAdd = (ndtParam) => {
    console.log("ndtHandleAdd:", ndtParam);

    setNdtUsers(prev => {
      return [...prev, ndtParam]
    })
    
  }
  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Nguyễn Đức Thành - K23CNT2]</h1>
      <hr />
      <Router>
        <NdtNavNar />
        <Routes>
          <Route path="/" element={<NdtHome/>}/>
          <Route path="/about" element={<NdtAbout/>}/>
          <Route path="/contact" element={<NdtContact/>}/>
          <Route path="/list-user" element={<NdtListUser renderNdtUsers={ndtUsers}/>} />
          <Route path="/create-user" element={<NdtFormUser onNdtAddNew={ndtHandleAdd}/>}/>
        </Routes>
      </Router>
    </div>
  )
}
