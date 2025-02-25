import React, { Component } from 'react'

class NdtEventForm2 extends Component {
    constructor (props){
        super(props);
        this.state={
            ndtCouse: 'CSS3',
        }
    }
    //Hàm xử lí sự kiện khi thay đổi khóa học
    ndtHandleChange = (event)=>{
        //Cập nhật lại state
        this.setState({
            ndtCouse:event.target.value,
        })
    }

    //Hàm xử lí sự kiện khi submit form
    ndtHandleSubmit = (event)=>{
        alert('Khóa học bạn chọn:' + this.state.ndtCouse);
        event.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form Select</h2>
        <form >
            <label htmlFor=''>
                <select name='ndtCouse' id='ndtCouse' 
                    value={this.state.ndtCouse}
                    onChange={this.ndtHandleChange}
                >
                    <option value={'HTML5'}>HTML5</option>
                    <option value={'CSS3'}>CSS3</option>
                    <option value={'JavaScript'}>JavaScript</option>
                    <option value={'Jquery'}>Jquery</option>
                    <option value={'Bootstrap'}>Bootstrap</option>
                </select>
            </label>
            <button className='btn btn-primary' onClick={this.ndtHandleSubmit}>Click here</button>
        </form>
      </div>
    )
  }
}

export default NdtEventForm2;