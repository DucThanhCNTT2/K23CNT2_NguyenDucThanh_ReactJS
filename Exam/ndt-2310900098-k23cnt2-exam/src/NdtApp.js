import React, { useState } from 'react'
import NdtMemberList from './components/NdtMemberList';
import NdtMemberAdd from './components/NdtMemberAdd';

function NdtApp() {
  const [ndt_Member, setndt_Member] = useState([
    { ndt_id: "2310900098", ndt_fullname: "Nguyễn Đức Thành", ndt_username: "dthann2005", ndt_password: "342005" },
    { ndt_id: "2310900099", ndt_fullname: "Nguyễn Huy Thông", ndt_username: "huythong", ndt_password: "123456" },
    { ndt_id: "2310900097", ndt_fullname: "Đinh Văn Hiếu", ndt_username: "vanhieu", ndt_password: "654321" },
  ]);

  const addndt_Member = (ndt_id, ndt_fullname, ndt_username, ndt_password) => {
    console.log({ ndt_id, ndt_fullname, ndt_username, ndt_password });
    
    setndt_Member([...ndt_Member, { ndt_id, ndt_fullname, ndt_username, ndt_password }]);
  }

  return (
    <div className='container-border my-3'>
      <h1 className='text-center'>Danh sách sinh viên</h1>
      <NdtMemberList ndt_Member={ndt_Member} />
      <hr />
      <NdtMemberAdd addndt_Member={addndt_Member} />
    </div>
  )
}

export default NdtApp;