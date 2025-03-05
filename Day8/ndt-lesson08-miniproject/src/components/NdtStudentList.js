import React, { Component } from 'react'
import NdtStudent from './NdtStudent';

class NdtStudentList extends Component {
    constructor(props){
        super(props);

    }

    //Hàm xử lí sự kiện xem
    ndtHandleView = (ndtStudent)=>{
        //Chuyển dữ liệu lên NdtApp
        this.props.onNdtHandleView(ndtStudent);
        }


  render() {
    //lấy dữ liệu trong props từ NdtApp chuyển xuống
    let {renderNdtStudents}=this.props;
    console.log("List:",renderNdtStudents);
    
    //chuyển dữ liệu vào NdtStudent
    let ndtElementStudent = renderNdtStudents.map((ndtItem,index)=>{
        return <NdtStudent key={index} renderNdtStudent={ndtItem} onNdtHandleView={this.ndtHandleView} />
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

              {ndtElementStudent}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default NdtStudentList;