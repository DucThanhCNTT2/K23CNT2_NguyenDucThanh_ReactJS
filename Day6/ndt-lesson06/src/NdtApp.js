import React, { Component } from 'react'
import NdtEventForm1 from './components/NdtEventForm1';
import NdtEventForm2 from './components/NdtEventForm2';
import NdtEventForm3 from './components/NdtEventForm3';
import NdtEventForm4 from './components/NdtEventForm4';
import NdtEventForm5 from './components/NdtEventForm5';

class NdtApp extends Component {

  ///Hàm xử lí nhận dữ liệu tù form student
  ndtHandleSubmitForm = (param)=>{
    console.log("Student:" +param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        <NdtEventForm1/>
        <NdtEventForm2/>
        <NdtEventForm3/>
        <NdtEventForm4/>
        <NdtEventForm5 onNdtHandleSubmit={this.ndtHandleSubmitForm} />
      </div>
    )
  }
}

export default NdtApp;