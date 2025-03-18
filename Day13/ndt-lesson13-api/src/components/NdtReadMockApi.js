import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NdtReadMockApi() {
    //khởi tạo state
    const [ndtListUser, setNdtListUser] = useState([]);
    //api
    const ndtApiOnline = "https://67d984c600348dd3e2ab72b2.mockapi.io/k23cnt2_nguyenducthanh/ndt_users"
    //Đọc dữ liệu từ api = axios
    useEffect(()=>{
        axios
            .get(ndtApiOnline)
            .then((ndt_response)=>{
                setNdtListUser(ndt_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi: ", error);
            })
    },[])

    //view data
    const ndtElementUser = ndtListUser.map((ndt_item, index) => {
        return(
            <tr>
                <td>{ndt_item.ndtId}</td>
                <td>{ndt_item.ndtFullName}</td>
                <td>{ndt_item.ndtAge}</td>
                <td>{ndt_item.ndtActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
      <h2>Danh sách</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>FullName</th>
                <th>Age</th>
                <th>Active</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                ndtElementUser
            }
        </tbody>
      </table>
    </div>
  )
}
