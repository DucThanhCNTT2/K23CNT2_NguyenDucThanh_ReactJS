import React, { Component } from 'react'

class NdtClassCompEventPostDate extends Component {
    constructor(props){
        super(props); 
    }

    //Hàm xử lí sự kiện
    ndtEventHandleClick = ()=>{
        //Chuyển dữ liệu trên App thông qua props
        this.props.onNdtDataToApp("Dữ liệu từ component con - NdtClassCompEventPostData");
    }
  render() {
    return (
      <div className='alert alert-success'>
        <button className='btn btn-primary' 
        onClick={this.ndtEventHandleClick}>
            Button 1 - Chuyển dữ liệu trên App
        </button>
      </div>
    )
  }
}

export default NdtClassCompEventPostDate;