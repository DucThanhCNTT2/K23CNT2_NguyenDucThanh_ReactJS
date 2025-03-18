//Thêm mới dữ liệu

import axios from 'axios';
import React, { useState } from 'react'

export default function NdtCreateMockApi() {
    //khởi tạo state
    const [ndtFullName, setNdtFullName] = useState('');
    const [ndtAge, setNdtAge] = useState(0);
    const [ndtActive, setNdtActive] = useState(true);

    //api post
    const ndtCreateUserApi = "https://67d984c600348dd3e2ab72b2.mockapi.io/k23cnt2_nguyenducthanh/ndt_users"

    //khi submit form
    const ndtHandleSubmit = (event) => {
        event.preventDefault();
        console.log("ndtActive: ", ndtActive);
        let ndtNewUser = {ndtFullName, ndtAge, ndtActive};
        console.log("ndtNewUser: ", ndtNewUser);
        
        //ghi dữ liệu vào api
        axios
            .post(ndtCreateUserApi, ndtNewUser)
            .then((ndt_response)=>{
                
            })
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className='row mb-1'>
                <label for="ndtFullName">Full Name</label>
                <input type='text' id='ndtFullName' name='ndtFullName' value={ndtFullName}
                onChange={(ev)=>setNdtFullName(ev.target.value)}
                />
            </div>    
            <div className='row mb-1'>
                <label for="ndtAge">Age</label>
                <input type='number' id='ndtAge' name='ndtAge' value={ndtAge}
                onChange={(ev)=>setNdtAge(ev.target.value)}
                />
            </div>    
            <div className=' mb-1'>
                <label for="ndtActive">Active</label>
                <input type='radio' id='ndtActive_hd' name='ndtActive' value={'true'} 
                onChange={(ev)=>setNdtActive(ev.target.value)}/>
                    <label for="ndtActive_hd">Hoạt động</label>
                <input type='radio' id='ndtActive_kh' name='ndtActive' value={'false'} 
                onChange={(ev)=>setNdtActive(ev.target.value)}/>
                    <label for="ndtActive_kh">Khóa</label>
            </div>    
            <button onClick={ndtHandleSubmit}>Create</button>
        </form>      
    </div>
  )
}
