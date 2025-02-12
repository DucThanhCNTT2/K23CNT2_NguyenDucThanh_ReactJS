import React from "react";
import NdtCompInfor from "./NdtCompInfor";

function App() {
  const personalInfo = {
    Hoten: "Nguyễn Đức Thành",
    Masv: "2310900098",
    NgaySinh: "03/04/2005",
    DienThoai: "0123-456-789",
    TenLop: "K23CNT2"
  };

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <NdtCompInfor info={personalInfo} />
    </div>
  );
}

export default App;