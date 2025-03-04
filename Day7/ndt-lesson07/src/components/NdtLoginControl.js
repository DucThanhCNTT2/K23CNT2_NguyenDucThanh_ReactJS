import React, { Component } from 'react'
import NdtLoginComp from './NdtLoginComp';
import NdtLogoutComp from './NdtLogoutComp';

 class NdtLoginControl extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoggedIn:false,
    }
}
// Hàm xử lý sự kiện login
ndtHandleLogin = (event)=>{
    event.preventDefault();
    this.setState({
        isLoggedIn:true,
    })
}
  render() {
    let {isLoggedIn} = this.state
    let ndtElement = isLoggedIn?<NdtLoginComp/> : <NdtLogoutComp/>
    return (
      <div className='alert alert-danger'>
        {ndtElement}
        {
          isLoggedIn?
          <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
          : <button onClick={this.ndtHandleLogin}>Login</button>
        }
      </div>
    )
  }
}


export default NdtLoginControl;