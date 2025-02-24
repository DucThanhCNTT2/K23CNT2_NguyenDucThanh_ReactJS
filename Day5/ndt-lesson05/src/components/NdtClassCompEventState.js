import React, { Component } from 'react'

class NdtClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndtFullName:"Nguyễn Đức Thành",
            ndtAge:19,
        }
    }

    //Hmaf xử lì sự kiện
    ndtEventHandleClick1 =()=>{
        //Lấy sữ liệu bên trong state
        alert("FullName: "+ this.state.ndtFullName + "\n Age:" + this.state.ndtAge);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <button className='btn btn-primary' onClick={this.ndtEventHandleClick1}>
            Button 1 - Dữ liệu trong state
        </button>
      </div>
    )
  }
}

export default NdtClassCompEventState;