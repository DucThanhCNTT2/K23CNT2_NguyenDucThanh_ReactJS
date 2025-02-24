import React, { Component } from 'react'
import NdtFuncCompEvent1 from './components/NdtFuncCompEvent1';
import NdtClassCompEvent from './components/NdtClassCompEvent1';
import NdtFuncCompEventProps from './components/NdtFuncCompEventProps';
import NdtClassCompEventProps from './components/NdtClassCompEventProps';
import NdtClassCompEventState from './components/NdtClassCompEventState';
import NdtClassCompEventPostDate from './components/NdtClassCompEventPostDate';

class NdtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      ndtNoiDung:"Hỏng có chi!"
    }
  }
  //Hàm xử lí sự kiện ki component con chuyển dữ liệu lên
  ndtHandleDataToApp = (content)=>{
    alert(content);
  }
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info my-2'>K23CNT2 - Nguyễn Đức Thành - Event and Form</h1>
        <hr/>
        <div>
            <h2>Function Component - Event</h2>
            <NdtFuncCompEvent1 />
        </div>
        <hr/>
        <div>
            <h2>Class Component - Event</h2>
            <NdtClassCompEvent />
        </div>
        <hr/>
        <div>
            <h2>Function Component - Event; props</h2>
            <NdtFuncCompEventProps ndtRenderName="Nguyễn Đức Thành" />
        </div>
        <hr/>
        <div>
            <h2>Class Component - Event; props</h2>
            <NdtClassCompEventProps ndtRenderTitle = "Welcome Nguyễn Đức Thành" />
        </div>
        <hr/>
        <div>
            <h2>Class Component - Event; state</h2>
            <NdtClassCompEventState />
        </div>
        <hr/>
        <div>
          <h1>{this.state.ndtNoiDung}</h1>
            <h2>Class Component - Event; Post Data to App</h2>
            <NdtClassCompEventPostDate onNdtDataToApp={this.ndtHandleDataToApp} />
        </div>
      </div>
    )
  }
}

export default NdtApp;