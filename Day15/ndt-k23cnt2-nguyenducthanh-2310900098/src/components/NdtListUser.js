import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function NdtListUser() {
    //state
    const [ndtListUser, setNdtListUser] = useState([])
    const ndtApi = "https://67e0cd5658cc6bf78522ef1d.mockapi.io/ndt-k23cnt2-nguyenducthanh-2310900098/ndt_users"
    useEffect(() => {
      axios
      .get(ndtApi) // Đổi URL API nếu cần
      .then((ndt_response) => {
        console.log(ndt_response.data)
        setNdtListUser(ndt_response.data);
      })
      .catch((error) => {
        console.error('Có xảy ra lỗi', error);
      });
    }, [])

    const ndtHandleDelete = async (ndtId) => {
      if(window.confirm('bạn có chắc chắn không?')){
        await axios.delete(ndtApi+"/"+ndtId);

        let ndtListUserDelete = ndtListUser.filter(x=>x.id !=ndtId);
        setNdtListUser(ndtListUserDelete);
      }
    }

    const navigate = useNavigate();

    const ndtHandleUpdate = (ndtId) =>{
      navigate(`/ndt-edit-user/${ndtId}`)
    }

    //hiển thị danh sách
    return (
      <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* hiển thị danh sách */}
            {
              ndtListUser.map((ndtUserItem, index)=>{
                return(
                  <tr>
                    <td>{ndtUserItem.id}</td>
                    <td>{ndtUserItem.ndt_name}</td>
                    <td>{ndtUserItem.ndt_email}</td>
                    <td>{ndtUserItem.ndt_phone}</td>
                    <td>{ndtUserItem.ndt_active?<span className='badge text-bg-success'>Hoạt động</span>:<span className='badge text-bg-danger'>Khóa</span>}</td>
                    <td>
                      <button className='btn btn-primary'
                      onClick={()=> ndtHandleUpdate(ndtUserItem.id)}
                      >Sửa</button> 
                      <button className='btn btn-success'
                      onClick={(ev)=> ndtHandleDelete(ndtUserItem.id)}
                      >Xóa</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
