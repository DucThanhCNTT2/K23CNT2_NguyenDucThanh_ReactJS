import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NdtReadApiLocal() {
    //khởi tạo state
    const [ndtListUser, setNdtListUser] = useState([]);
    //đọc dữ liệu từ api local và set cho ndtlistuser
    const apiUrl = "http://localhost:3001/users";
    //lấy danh sách từ apiUrl
    useEffect(()=>{
        axios.get(apiUrl)
        .then((ndtResponse)=>{
            setNdtListUser(ndtResponse.data);
        })
        .catch((error)=>{
            console.log("Lỗi: ", error);
            
        })
    },[])
  return (
    <div>
      <h2>Đọc dữ liệu từ API Local</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>FullName</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                ndtListUser.map((ndtItem, index) => {
                    return(
                        <tr>
                            <td>{ndtItem.fullname}</td>
                            <td>{ndtItem.age}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
