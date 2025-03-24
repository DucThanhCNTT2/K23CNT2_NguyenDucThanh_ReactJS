import React from 'react'
import NdtHome from './NdtHome'
import {Link} from 'react-router-dom'

export default function NdtNarBar() {
  return (
    <nav>
        <Link to='/' element={<NdtHome/>}>Home</Link> |
        <Link to='/ndt-list-user' element={''}>Danh sách</Link> |
        <Link to='/ndt-create-user' element={''}>Thêm mới</Link>
    </nav>
  )
}
