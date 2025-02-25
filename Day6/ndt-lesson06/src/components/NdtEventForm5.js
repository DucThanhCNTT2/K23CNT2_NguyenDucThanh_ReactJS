import React, { Component } from 'react'

class NdtEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state={
            ndtName:'Thành',
            ndtAge:'19',
            ndtGender:'Male',
            ndtCourse:'CSS3'
        }
    }
    //Hàm xử lí sự kiện change
    ndtHandleChange = (event)=>{
        //lấy tên diều khiển    
        let name = event.target.name;
        //lấy giá trị trên diều khiển đang thao tác
        let value = event.target.value;

        //Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    //Hàm xử lí sự kiện submit form
    ndtHandleSubmit=(event)=>{
        event.preventDefault();
        alert(this.state.ndtName + "\n" + this.state.ndtAge + "\n" + this.state.ndtGender + "\n" + this.state.ndtCourse);

        //Chuyển dữ liệu trên form lên app component (NdtApp);
        this.props.onNdtHandleSubmit(this.state);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form Student Info</h2>
        <form>
            <div>
                <label htmlFor='ndtName'>Student Name:</label>
                <input type='text' name='ndtName' id='ndtName' 
                    value={this.state.ndtName} 
                    onChange={this.ndtHandleChange}
                />
            </div>
            <div>
                <label htmlFor='ndtAge'>Student Age:</label>
                <input type='text' name='ndtAge' id='ndtAge' 
                    value={this.state.ndtAge} 
                    onChange={this.ndtHandleChange}
                />
            </div>
            <div>
                <label htmlFor='ndtGender'>Student Gender:</label>
                <div>
                    <input type='radio' name='ndtGender' id='ndtMale' className='mx-2' 
                        value={'Male'} 
                        checked={this.state.ndtGender === 'Male'}
                        onChange={this.ndtHandleChange}
                    />
                    <label htmlFor='ndtMale'>Male</label>
                </div>
                <div>
                    <input type='radio' name='ndtGender' id='ndtFemale' className='mx-2' 
                        value={'Female'} 
                        checked={this.state.ndtGender === 'Female'}
                        onChange={this.ndtHandleChange}
                    />
                    <label htmlFor='ndtFemale'>Female</label>
                </div>
                <div>
                    <input type='radio' name='ndtGender' id='ndtNone' className='mx-2' 
                        value={'None'} 
                        checked={this.state.ndtGender === 'None'}
                        onChange={this.ndtHandleChange}
                    />
                    <label htmlFor='ndtNone'>None</label>
                </div>
            </div>
            <div>
                <label htmlFor='ndtCourse'>
                    <select name='ndtCourse' id='ndtCourse' 
                        value={this.state.ndtCourse}
                        onChange={this.ndtHandleChange}
                    >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'JavaScript'}>JavaScript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                    </select>
                </label>
            </div>
            <button className='btn btn-primary' onClick={this.ndtHandleSubmit}>Subimt</button>
        </form>
      </div>
    )
  }
}

export default NdtEventForm5;