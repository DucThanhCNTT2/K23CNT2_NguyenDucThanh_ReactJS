import React, { Component } from 'react'

class NdtClassComp extends Component {
    constructor(props){
        super(props);
        // khởi tạo state
        this.state = {
            fullname:"Thành Nguyễn",
            age:"19",
            phone:"0367907165"
        }
    }
    //Hàm xử lí sự kiện
    changeInfo = (ev)=>{
        // Cập nhật state
        this.setState({
            fullname:"Nguyễn Đức Thânh"
        }); 
    }
  render() {
    let users = this.props.renderUsers;
    console.log('================================');
    console.log(users); 
    console.log('================================');
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ state</h2>
        <p>Info state (fullname): {this.state.fullname}</p>
        <p>Info state (age): {this.state.age}</p>
        <p>Info state (phone): {this.state.phone}</p>

        <hr/>
        <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
        <hr/>
        <h3>Lấy dữ liệu từ Props</h3>
        <p>Name: {this.props.renderName}</p>
        <p>Fullname: { users ? users.fullname : ""}</p>
        <p>Age: {users ?users.age:''}</p>
        <p>Phone: {users ?users.phone:''}</p>
      </div>
    )
  }
}

export default NdtClassComp;
