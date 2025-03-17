import React from 'react'

export default function NdtListUser({renderNdtUsers}) {

    const ndtElements = renderNdtUsers.map((ndtItem, index) => {
        return(
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ndtItem.id}</td>
                    <td>{ndtItem.ndtFullName}</td>
                    <td>{ndtItem.ndtUserName}</td>
                    <td>{ndtItem.ndtPassword}</td>
                </tr>
            </>
        )
    })
  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Họ và tên</th>
                <th>Tài khoản</th>
                <th>Mật khẩu</th>
            </tr>
        </thead>
        <tbody>
            {ndtElements}
        </tbody>
      </table>
    </div>
  )
}
