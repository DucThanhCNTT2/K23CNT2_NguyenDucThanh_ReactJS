import React from "react";

function NdtCompInfor({ info }) {
  return (
    <div>
      <p><strong>Họ và tên:</strong> {info.Hoten}</p>
      <p><strong>Mã sinh viên:</strong> {info.Masv}</p>
      <p><strong>Ngày sinh:</strong> {info.NgaySinh}</p>
      <p><strong>Điện thoại:</strong> {info.DienThoai}</p>
      <p><strong>Tên lớp:</strong> {info.TenLop}</p>
    </div>
  );
}

export default NdtCompInfor;