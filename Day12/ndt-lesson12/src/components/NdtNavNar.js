import React from 'react'
import { Link } from 'react-router-dom'

export default function NdtNavNar() {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link> |
        <Link to="/about">About us</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/list-user">List Users</Link> |
        <Link to="/create-user">Create User</Link>
      </ul>
    </div>
  )
}
