import axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function NdtCreateUser() {

    let ndtuser = {
        id: '',
        ndt_name: "",
        ndt_email: "",
        ndt_phone: "",
        ndt_active: false
    }

    const [ndt_users, setNdtUser] = useState(ndtuser)
    const ndtApiUrl = "https://67d984c600348dd3e2ab72b2.mockapi.io/k23cnt2_nguyenducthanh/ndt_users"

    const navigate = useNavigate();

    const ndtHandleSubmit = (event) => {
        event.preventDefault();

        // Kiểm tra dữ liệu trước khi gửi
        console.log("Dữ liệu chuẩn bị gửi lên API:", ndt_users);

        axios
            .post(ndtApiUrl, ndt_users) // Dùng POST để tạo mới dữ liệu
            .then((response) => {
                console.log("Tạo mới thành công:", response.data);
                alert("User đã được thêm thành công!");
                navigate('/list-user'); // Chuyển hướng về danh sách sau khi thêm thành công
            })
            .catch((error) => {
                console.error("Lỗi khi thêm mới:", error);
            });
    };

    const ndtHandleBack = (event) => {
        event.preventDefault();
        navigate('/list-user')
    }

    return (
        <div>
            <h2 className="alert alert-success">Thêm mới thông tin User</h2>
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
                            value={ndt_users.ndt_name}
                            onChange={(ev) => setNdtUser({ ...ndt_users, ndt_name: ev.target.value })}
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
                            value={ndt_users.ndt_email}
                            onChange={(ev) => setNdtUser({ ...ndt_users, ndt_email: ev.target.value })}
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
                            value={ndt_users.ndt_phone}
                            onChange={(ev) => setNdtUser({ ...ndt_users, ndt_phone: ev.target.value })}
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
                            value="true"
                            checked={ndt_users.ndt_active === true}
                            onChange={() => setNdtUser({ ...ndt_users, ndt_active: true })}
                        />
                        <label htmlFor="ndt_active_true" className="mx-2 text-success">Hoạt động</label>

                        <input
                            type="radio"
                            id="ndt_active_false"
                            name="ndt_active"
                            value="false"
                            checked={ndt_users.ndt_active === false}
                            onChange={() => setNdtUser({ ...ndt_users, ndt_active: false })}
                        />
                        <label htmlFor="ndt_active_false" className="mx-2 text-danger">Khóa</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-6">
                        <button className="btn btn-primary mx-1" onClick={ndtHandleSubmit}>Create</button>
                        <button className="btn btn-success px-3" onClick={ndtHandleBack}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
