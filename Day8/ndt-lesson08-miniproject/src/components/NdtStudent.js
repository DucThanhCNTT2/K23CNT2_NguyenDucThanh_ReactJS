import React, { Component } from 'react'

class NdtStudent extends Component {
    constructor(props) {
        super(props);

    }
    //Hàm xử lí chức năng xem
    ndtHandleView = (ndtStudent)=>{
        //Chuyển lên NdtStudentList
        this.props.onNdtHandleView(ndtStudent)
    }
    render() {
        //lấy đối tượng dữ liệu chuyển từ NdtStudentList
        let {renderNdtStudent, key} = this.props;
        console.log("Student:",renderNdtStudent);
        
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderNdtStudent.ndtId}</td>
                    <td>{renderNdtStudent.ndtStudentName}</td>
                    <td>{renderNdtStudent.ndtAge}</td>
                    <td>{renderNdtStudent.ndtGender}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => this.ndtHandleView(renderNdtStudent)}
                            >   
                            
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}

export default NdtStudent;