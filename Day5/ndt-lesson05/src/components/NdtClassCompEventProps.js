import React, { Component } from 'react'

class NdtClassCompEventProps extends Component {

    //Hàm xử lí sự kiện
    ndtEventHandleClick1 = ()=>{
        alert("Heloo....." + this.props.ndtRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ndtEventHandleClick1}>Button 1</button>
      </div>
    )
  }
}

export default NdtClassCompEventProps;
