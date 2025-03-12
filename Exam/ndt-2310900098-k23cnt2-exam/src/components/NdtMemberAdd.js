import React, { useState } from 'react'

export default function NdtMemberAdd({ addndt_Member }) {

    const [ndt_id, setndt_id] = useState("");
    const [ndt_fullname, setndt_fullname] = useState("");
    const [ndt_username, setndt_username] = useState("");
    const [ndt_password, setndt_password] = useState("");

    const ndtHandleSubmit = (e) => {
        e.preventDefault();
        if (ndt_id && ndt_fullname && ndt_username && ndt_password) {
            addndt_Member({ ndt_id, ndt_fullname, ndt_username, ndt_password });
            setndt_id("");
            setndt_fullname("");
            setndt_username("");
            setndt_password("");
        }
    }

    return (
        <div>
            <h2>Thêm tài khoản mới</h2>
            <form onSubmit={ndtHandleSubmit}>
                <input type='text'
                    placeholder='ID' value={ndt_id}
                    onChange={(e) => setndt_id(e.target.value)}
                    required 
                />

                <input type='text'
                    placeholder='Họ và Tên' value={ndt_fullname} onChange={(e) =>
                    setndt_fullname(e.target.value)}
                    required
                />

                <input type='text'
                    placeholder='Username' value={ndt_username}
                    onChange={(e) => setndt_username(e.target.value)}
                    required
                />

                <input type='password'
                    placeholder='Password' value={ndt_password}
                    onChange={(e) => setndt_password(e.target.value)} 
                    required
                />

                <button type='submit'>Thêm</button>
            </form>
        </div>
    )
}
