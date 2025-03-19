import React from 'react'
import { Link } from 'react-router-dom'

export default function NdtNavBar() {
  return (
    <div>
      <ul>
        <Link to="/">Trang chủ</Link> |
        <Link to="/list-user">Danh sách User</Link> |
        <Link to="/create-user">Thêm User</Link> 
      </ul>
    </div>
  )
}
