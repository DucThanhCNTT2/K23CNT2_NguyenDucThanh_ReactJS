import React, { Component } from 'react'

class NdtRenderListStudent extends Component {
    constructor(props) {    
        super(props);
        this.state = {
           ndtStudents: [
                { ndtId:"NTU001",ndtName:"Nguyễn Đức Thành", ndtAge:"19", ndtClass:"K23CNT2" },
                { ndtId:"NTU002",ndtName:"Đinh Văn Hiếu", ndtAge:"19", ndtClass:"K23CNT2" },
                { ndtId:"NTU003",ndtName:"Nguyễn Quốc Duy", ndtAge:"19", ndtClass:"K23CNT2" }
            ]
        };
        };
  render() {
    let ndtElement = this.state.ndtStudents.map((ndtItem, index) => {
      return(
        <tr>
          <td>{index +1}</td>
          <td>{ndtItem.ndtId}</td>
          <td>{ndtItem.ndtName}</td>  
          <td>{ndtItem.ndtAge}</td>
          <td>{ndtItem.ndtClass}</td>
          <td>
            <button>Sửa</button>
            <button>Xóa</button>
          </td>  
        </tr>
      )
    });
    return (
      <div>
        <h2>Danh sách sinh viên</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
                <th>STT</th>
                <th>ndtId</th>
                <th>ndtName</th>
                <th>ndtAge</th>
                <th>ndtClass</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ndtElement}
          </tbody>
        </table>
      </div>
    )
  }
}

export default NdtRenderListStudent;