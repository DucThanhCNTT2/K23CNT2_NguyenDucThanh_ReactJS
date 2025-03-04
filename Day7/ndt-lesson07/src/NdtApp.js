import React from 'react'
import NdtRenderListStudent from './components/NdtRenderListStudent'
import NdtLoginControl from './components/NdtLoginControl'
import NdtRenderList from './components/NdtRenderList'

export default function NdtApp() {
  return (
    <div className='container border my-3'>
        <h1 className='text-center'>K23CNT2 - Nguyễn Đức Thành - Render Condition, List Key</h1>
        <hr/>
        <NdtLoginControl/>

        <NdtRenderList/>

        <NdtRenderListStudent/>
    </div>
  )
}
