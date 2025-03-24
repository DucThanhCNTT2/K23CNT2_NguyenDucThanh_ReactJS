import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NdtCreateUser() {

  const ndtUser = {
    id:0,
    'ndt_name':'',
    'ndt_email':'',
    'ndt_phone':'',
    'ndt_active':true
  }

  const [ndt_user, setNdt_User] = useState(ndtUser);
  const ndtApi = "https://67e0cd5658cc6bf78522ef1d.mockapi.io/ndt-k23cnt2-nguyenducthanh-2310900098/ndt_users"
  const navigate = useNavigate();

  const ndtHandleSubmit = (ev) =>{
    ev.preventDefault();
    console.log(ndt_user);
    axios
    .post(ndtApi, ndt_user)
    .then(()=>{
      navigate('/ndt-list-user')
    })
    .catch((error) => console.log('Lỗi khi thêm mới.', error));
  }

  return (
    <div>
      <h2>Thêm mới tài khoản</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="ndt_name" className="col-sm-2 col-form-label">
            FullName
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="ndt_name" 
            name="ndt_name"
            value={ndt_user.ndt_name}
            onChange={(ev)=>setNdt_User({...ndt_user,ndt_name:ev.target.value})}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="ndt_email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="ndt_email" 
            name="ndt_email"
            value={ndt_user.ndt_email}
            onChange={(ev)=>setNdt_User({...ndt_user,ndt_email:ev.target.value})}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="ndt_phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="ndt_phone" 
            name="ndt_phone"
            value={ndt_user.ndt_phone }
            onChange={(ev)=>setNdt_User({...ndt_user,ndt_phone:ev.target.value})}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="ndt_active" className="col-sm-2 col-form-label">
            Active
          </label>
          <div className="col-sm-10">
            <input type="radio" id="ndt_active_true" className='mx-3' checked
            onChange={(ev)=>setNdt_User({...ndt_user,ndt_active:ev.target.value})}
            value={true}  
            name="ndt_active"
            /> 
            <label htmlFor='ndt_active_true'>Hoạt động</label>
            <input type="radio" id="ndt_active_false" className='mx-3'
            onChange={(ev)=>setNdt_User({...ndt_user,ndt_active:ev.target.value})}
            value={false}  
            name="ndt_active"   
            /> 
            <label htmlFor='ndt_active_false'>Khóa</label>
          </div>
          <div className="mb-3 row">
            <label htmlFor="" className='col-sm-2 col-form-label'></label>
            <div className="col-sm-10">
              <button className='btn btn-primary mx-2 px-2'
              onClick={ndtHandleSubmit}>Tạo mới</button>
              <button className='btn btn-success mx-2'>Trở lại</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
