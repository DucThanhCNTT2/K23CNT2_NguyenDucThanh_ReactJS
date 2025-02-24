import React, { Component } from 'react'

class NdtClassCompEvent1 extends Component {
  //Hàm xử lí sự kiện
  ndtEventHandleClick1 = ()=>{
      alert("Button 1 - Clicked");
  }
  ndtEventHandleClick2 = (name)=>{
    alert("Button 2 - Clicked;  name=" + name);
}
  render() {  
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={this.ndtEventHandleClick1}>Button1</button>
        <button className='btn btn-success mx-1' onClick={()=>this.ndtEventHandleClick2("Nguyễn Thành")}>Button2</button>
      </div>
    );
  }
}

export default NdtClassCompEvent1;