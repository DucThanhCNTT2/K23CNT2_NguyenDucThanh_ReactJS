import React, { useState } from 'react'
import { Form } from 'react-router-dom';

export default function NdtFormUser({ onNdtAddNew}) {

    const [id, setId] = useState('');
    const [ndtFullName, setndtFullName] = useState('');
    const [ndtUserName, setNdtUserName] = useState('');
    const [ndtPassword, setndtPassword] = useState('');

    const ndtHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id, ndtFullName, ndtUserName, ndtPassword);
        
        onNdtAddNew({id, ndtFullName, ndtUserName, ndtPassword});
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type="text" name='id' value={id} onChange={(ev)=>setId(ev.target.value)} />
            </p>
            <p>Họ và tên:
                <input type="text" name='ndtFullName' value={ndtFullName} onChange={(ev)=>setndtFullName(ev.target.value)} />
            </p>
            <p>Tài khoản:
                <input type="text" name='ndtUserName' value={ndtUserName} onChange={(ev)=>setNdtUserName(ev.target.value)} />
            </p>
            <p>Mật khẩu:
                <input type="password" name='ndtPassword' value={ndtPassword} onChange={(ev)=>setndtPassword(ev.target.value)} />
            </p>
            <p>
                <button name='ndtSave' onClick={ndtHandleSubmit}> Save </button>
            </p>
        </form>
    </div>
  )
}
