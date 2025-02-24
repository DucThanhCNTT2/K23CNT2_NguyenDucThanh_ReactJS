import React from 'react'

export default function NdtFuncCompEventProps(props) {
    //Hàm xử lí sự kiện
    const ndtHandleButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + props.ndtRenderName);
        console.log("Xin chào:" + props.ndtRenderName);
    }
    const ndtHandleButtonClick2 = (param)=>{
        //Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 Click):" + props.ndtRenderName);
        //Dữ liệu từ tham số
        console.log('====================================');
        console.log("Hi:" +param);
        console.log('====================================');
        
    }
  return (
    <div className='alert alert-info'>
      <button className='btn btn-primary mx-1' onClick={ndtHandleButtonClick1}>Button 1</button>
      <button className='btn btn-success mx-1' onClick={()=>ndtHandleButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
