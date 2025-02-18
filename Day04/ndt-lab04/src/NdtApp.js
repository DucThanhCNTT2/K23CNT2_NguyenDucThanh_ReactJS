import NdtClassComp from "./Components/NdtClassComp";
import NdtFuncComp from "./Components/NdtFuncComp";
import NdtFuncComp1 from "./Components/NdtFuncComp1";

function NdtApp() {
  // object
  const users={
    fullname:"Nguyễn Đức Thành",
    age:"19",
    phone:"0679071653"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Component - Props - State</h1>
      <hr/>
      <div class='alert alert-danger'>
          <NdtFuncComp name="Thành Nguyễn" address="Mậu Lương Kiến Hưng" company="Nguyễn Trãi University"/>
          <hr/>
          <NdtFuncComp name="Đinh Hiếu" address="Mậu Lương Kiến Hưng" company="Fit-NTU" />
      </div>
      <div class="alert alert-info">
          <NdtFuncComp1 renderInfo={users}/>
      </div>
      <NdtClassComp/>
      {/*Chuyển dữ liệu từ NdtApp -> xuống NdtClassComp */}
      <NdtClassComp renderName="K23CNT2" renderUsers={users}/>
    </div>
  );
}

export default NdtApp;
