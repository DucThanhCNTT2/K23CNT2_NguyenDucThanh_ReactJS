import React, { Component } from 'react'

class NdtEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
          ndtStudentName:'Đức Thành',
        }
      }
    //Hàm xử lí sự kiện khi sự kiện trên textbox (ndtStudentName) thay đổi
    ndtHandleChange = (event)=>{
        //Cập nhật lại state
        this.setState({
            ndtStudentName:event.target.value,
        })
    }
    //Khi submit form, lấy dữ liệu và hiển thị
    ndtHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.ndtStudentName);
        ev.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form onSubmit={this.ndtHandleSubmit}>
            <label htmlFor='ndtStudentName'>
                <input type='text' name='ndtStudentName' id='ndtStudentName'
                    value={this.state.ndtStudentName} 
                    onChange={this.ndtHandleChange}
                />
            </label>
            <button className='btn btn-primary'>Click here</button>
        </form>
      </div>
    )
  }
}

export default NdtEventForm1;