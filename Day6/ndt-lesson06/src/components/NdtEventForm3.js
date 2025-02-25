import React, { Component } from 'react'

class NdtEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndtGioiTinh:'Nam',
        }
    }
    //Hàm xử lí sự kiện khi Change
    ndtHandleChange=(event)=>{
        this.setState({
            ndtGioiTinh:event.target.value,
        })
    }
    //Hàm sử lí sự kiện submit form
    ndtHandleSubmit=(event)=>{
        event.preventDefault();
        alert('Giới tính của bạn là:' + this.state.ndtGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form input - radio</h2>
        <form>
            <div>
                <label htmlFor=''>Giới tính:</label>
                <input type='radio' name='ndtGioiTinh' id='ndtNam' className='mx-2' 
                value="Nam" checked={this.state.ndtGioiTinh === 'Nam'} onChange={this.ndtHandleChange} /> 
                    <label htmlFor='ndtNam'>Nam</label>
                <input type='radio' name='ndtGioiTinh' id='ndtNu' className='mx-2' 
                value="Nữ" checked={this.state.ndtGioiTinh === 'Nữ'} onChange={this.ndtHandleChange} /> 
                    <label htmlFor='ndtNu'>Nữ</label>
                <input type='radio' name='ndtGioiTinh' id='ndtKhac' className='mx-2' 
                value="Khác" checked={this.state.ndtGioiTinh === 'Khác'} onChange={this.ndtHandleChange} /> 
                    <label htmlFor='ndtKhác'>Khác</label>
            </div>
            <button className='btn btn-primary' onClick={this.ndtHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default NdtEventForm3;