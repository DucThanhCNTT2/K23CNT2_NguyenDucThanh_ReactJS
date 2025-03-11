import React from 'react'
import NdtTodoList from './components/NdtTodoList'
import NdtThemeProvider from './context/NdtThemeContext'
import NdtThemeToggle from './components/NdtThemeToggle'

export default function NdtApp() {
  return (
    <div className='container border my-3'>
      <h2 className='text-center'>MiniProject: Quản Lý Công Việc (To-Do List) với Hooks trong ReactJS</h2>
      <p className='text-center'>Dự án này giúp bạn thực hành sử dụng useState, useEffect, useReducer, useRef, và useContext để tạo một ứng dụng quản lý công việc (To-Do List) đơn giản</p>
      <hr/>
      <h3 className='text-center'>Quản Lý Công Việc</h3>
      <NdtThemeProvider>
        <NdtThemeToggle/>
      </NdtThemeProvider>
      <NdtTodoList/>  

    </div>
  )
}

