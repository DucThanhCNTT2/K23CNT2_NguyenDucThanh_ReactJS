import React from 'react'

export default function NdtRenderList() {
    const ndtList = ["Nguyễn Thành", "ReactJS", "Fit-NTU"];

    const ndtElement = ndtList.map((item) => {
        return <li>{item}</li>
    });

  return (
    <div className='alert alert-success'>
        <h2>Danh sách</h2>
        <ul>
        {
            ndtList.map(item=>{
                return<li>{item}</li>
            })
        }
        </ul>
        <hr/>
        {ndtElement}
    </div>
  )
}
