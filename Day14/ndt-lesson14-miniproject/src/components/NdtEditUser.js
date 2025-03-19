import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function NdtEditUser() {

    //api
    const ndtApiUrl = "https://67d984c600348dd3e2ab72b2.mockapi.io/k23cnt2_nguyenducthanh/ndt_users"
    //lấy biến id trên url
    const { id } = useParams(); // <Route path='/edit-user/:id' element={<NdtEditUser />} />; navigate(`/edit-user/${ndtId}`);
    //Khởi tạo state cho component
    const [ndt_editUser, setNdtEditUser] = useState({
        ndt_name: '', ndt_email: '', ndt_phone: '', ndt_active: false
    })
    //đọc dữ liệu từ api và set cho state: ndt_editUser
    useEffect(() => {
        console.log("Fetching data from API:", `${ndtApiUrl}/${id}`);
        axios
            .get(`${ndtApiUrl}/${id}`)
            .then((ndt_response) => {
                console.log("Data received:", ndt_response.data);
                setNdtEditUser(ndt_response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi đọc dữ liệu từ API:", error);
            });
    }, [id]);

    //Hàm xử lí khi người dùng thay đổi trạng thái Active
    const ndtHandleRadioChange = (ev) => {
        setNdtEditUser({
            ...ndt_editUser,
            ndt_active: ev.target.value === "true", // Chuyển "true" thành true (boolean)
        });
    };
    //tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
    const navigate = useNavigate();

    //Khi người dùng nhấn nút submit => lấy dữ liệu từ form post vào api
    //Hàm cập nhật những thay đổi trên form vào api
    const ndtHandleSubmit = (event) => {
        event.preventDefault();
        console.log("Data to update:", ndt_editUser);
    
        axios
            .put(`${ndtApiUrl}/${id}`, ndt_editUser)
            .then((ndt_response) => {
                console.log("Update Success:", ndt_response.data);
                alert('Successed!');
                navigate('/list-user');
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu:", error);
            });
    };
    // khi click vào nút back
    const ndtHandleBack = (event) => {
        event.preventDefault();
        navigate('/list-user')
    };

    return (
        <div>
            <h2 className="alert alert-success">Sửa thông tin User</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="ndt_name" className="col-sm-2 col-form-label">
                        Full Name
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="ndt_name"
                            name="ndt_name"
                            value={ndt_editUser.ndt_name}
                            onChange={(ev) => setNdtEditUser({ ...ndt_editUser, ndt_name: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="ndt_email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="email"
                            className="form-control"
                            id="ndt_email"
                            name="ndt_email"
                            value={ndt_editUser.ndt_email}
                            onChange={(ev) => setNdtEditUser({ ...ndt_editUser, ndt_email: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="ndt_phone" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="tel"
                            className="form-control"
                            id="ndt_phone"
                            name="ndt_phone"
                            value={ndt_editUser.ndt_phone}
                            onChange={(ev) => setNdtEditUser({ ...ndt_editUser, ndt_phone: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="ndt_active" className="col-sm-2 col-form-label">
                        Active
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="radio"
                            id="ndt_active_true"
                            name="ndt_active"
                            value={'true'}
                            checked={ndt_editUser.ndt_active === 'true' || ndt_editUser.ndt_active === true} // Kiểm tra nếu giá trị là "true"
                            onChange={ndtHandleRadioChange}
                        /> <label htmlFor="ndt_active_true" className="mx-2 text-success">Hoạt động</label>
                        <input
                            type="radio"
                            id="ndt_active_false"
                            name="ndt_active"
                            value={'false'}
                            checked={ndt_editUser.ndt_active === 'false' || ndt_editUser.ndt_active === false} // Kiểm tra nếu giá trị là "false"
                            onChange={ndtHandleRadioChange}
                        /> <label htmlFor="ndt_active_false" className="mx-2 text-danger">Đang khóa</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-6">
                        <button className="btn btn-primary mx-1" onClick={(e)=>ndtHandleSubmit(e)}>Update</button>
                        <button className='btn btn-success px-3' onClick={ndtHandleBack}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
