import React, { Component } from 'react'
import NdtControl from './components/NdtControl';
import NdtStudentList from './components/NdtStudentList';
import NdtForm from './components/NdtForm';


class NdtApp extends Component {
  constructor (props){
    super(props);
    this.state = {
      NdtStudents:[
        {ndtId:"SV001",ndtStudentName:"Nguyễn Đức Thành",ndtAge:"19",ndtGender:"Nam",ndtBirthday:"03/04/2005",ndtBirthPlace:"BN",ndtAddress:"Hà Nội"}, 
        {ndtId:"SV002",ndtStudentName:"Đinh Văn Hiếu",ndtAge:"19",ndtGender:"Nam",ndtBirthday:"03/04/2005",ndtBirthPlace:"BG",ndtAddress:"Hà Nội"}, 
        {ndtId:"SV003",ndtStudentName:"Nguyễn Quốc Duy",ndtAge:"19",ndtGender:"Nam",ndtBirthday:"03/04/2005",ndtBirthPlace:"HN",ndtAddress:"Hà Nội"}, 
        {ndtId:"SV004",ndtStudentName:"Nguyễn Huy Thông",ndtAge:"19",ndtGender:"Nam",ndtBirthday:"03/04/2005",ndtBirthPlace:"QN",ndtAddress:"Hà Nội"}, 
      ],
      ndtStudent:"",
    }
  }

  //Hàm xử lí sự kiện View Student
  ndtHandleView = (ndtStudent)=>{
    this.setState({
      ndtStudent:ndtStudent,
    })
  }

  render() {
    //log
    console.log("View Student:",this.state.ndtStudent);
    
    return (
      <div>
        <h1 className='text-center'>
          Nguyễn Đức Thành - K23CNT2 - Mini Project1
        </h1>
        <section>
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                
                  {/* header */}
                <NdtControl  />
                
                {/* danh sách sinh viên */}
                <NdtStudentList renderNdtStudents={this.state.NdtStudents} onNdtHandleView={this.ndtHandleView}/>
              </div>  
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NdtForm renderNdtStudent = {this.state.ndtStudent} />
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default NdtApp;