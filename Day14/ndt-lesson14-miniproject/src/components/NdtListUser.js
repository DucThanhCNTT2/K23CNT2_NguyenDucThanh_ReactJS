import React, { useEffect, useState } from 'react'
import ndtAxiosUsers from '../api/NdtApi'
import { useNavigate } from 'react-router-dom'

export default function NdtListUser() {

    const navigate = useNavigate();
    const [ndtListUser, setNdtListUser] = useState([]);
    const ndtGetAllUser = async () => {
        //Gọi Api lấy dữ liệu
        const ndt_resp = await ndtAxiosUsers.get("/ndt_users");
        setNdtListUser(ndt_resp.data)
    }

    //Gọi Api và lấy dữ liệu cho biến state (ndtListUser)
    useEffect(() => {
        ndtGetAllUser()
    }, [])

    //hàm xử lí khi sửa
    const ndtHandleUpdate = (id)=>{
        navigate(`/edit-user/${id}`);
    }

    //hàm xử lí khi xóa
    const ndtHandleDelete = async (id)=>{
        if(window.confirm('Bạn có muốn xóa không??')){
            await ndtAxiosUsers.delete("/ndt_users/"+id);

            let ndtListUserDelete = ndtListUser.filter(x=>x.id !==id);
            setNdtListUser(ndtListUserDelete);

        }
    }

    // tạo hiển thị active
    const ndtActiveElement = (flag) => {
        if (flag === true || flag === "true")
            return <span class='badge text-bg-success'>Hoạt động </span>
        else
            return <span class='badge text-bg-danger'>Khóa </span>
    }

    //duyệt dữ liệu từ state và hiển thị
    const ndtElementUser = ndtListUser.map((ndt_users) => {
        return (
            <tr key={ndt_users.id}>
                <td>{ndt_users.id}</td>
                <td>{ndt_users.ndt_name}</td>
                <td>{ndt_users.ndt_email}</td>
                <td>{ndt_users.ndt_phone}</td>
                <td>
                    {
                        ndtActiveElement(ndt_users.ndt_active)
                    }
                </td>
                <td>
                    <button onClick={() => ndtHandleUpdate(ndt_users.id)} className='btn btn-primary mx-1 px-3'>Sửa</button>
                    <button onClick={() => ndtHandleDelete(ndt_users.id)} className='btn btn-success mx-1 px-3'>Xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div className='container mt-4'>
            <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
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
