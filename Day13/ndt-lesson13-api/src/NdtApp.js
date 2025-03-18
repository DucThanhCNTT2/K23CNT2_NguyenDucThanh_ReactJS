import React from 'react'
import NdtReadApiLocal from './components/NdtReadApiLocal'
import NdtReadMockApi from './components/NdtReadMockApi'
import NdtCreateMockApi from './components/NdtCreateMockApi'

export default function NdtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1>ReactJS - API - Nguyễn Đức Thành - K23CNT2</h1>
      <hr/>
      <NdtReadApiLocal />
      <hr/>
      <h2>Đọc dữ liệu từ MockApi (mockapi.io)</h2>
      <NdtReadMockApi />

      <NdtCreateMockApi />
    </div>
  )
}
