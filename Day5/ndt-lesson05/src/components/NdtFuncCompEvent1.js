import React from 'react'

export default function NdtFuncCompEvent1() {

    //Hàm xử lí sự kiện
    // const ndtEventButton1Click = ()=>{
    //     alert("Button1 - Clicked");
    // }
    const ndtEventButton2Click = ()=>{
        alert("Button2 - Clicked");
    }
    const ndtEventButton3Click = (name)=>{
        alert("Name:" + name)
    }
    return (
    <div className='alert alert-info'>
      {/* <button className='btn btn-primary' onClick={ndtEventButton1Click()}>
        Button 1
        </button> */}
      <button className='btn btn-success' onClick={ndtEventButton2Click}>
        Button 2
        </button>
        {/* <button className='btn btn-success' onClick={ndtEventButton3Click("Thành Nguyễn")}>
        Button 3
        </button> */}
        <button className='btn btn-success' onClick={()=>ndtEventButton3Click("Thành Nguyễn")}>
        Button 4
        </button>
    </div>
  )
}
