import NdtClassComp from "./components/NdtClassComp";
import NdtFuncComp from "./components/NdtFuncComp";
import NdtJsxExpression from "./components/NdtJsxExpression";

function NdtApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Nguyễn Đức Thành</h1>

      <NdtJsxExpression />

      <hr/>
        {/*Sử dụng function components */}
        <NdtFuncComp />
      <hr/>
        {/*Sử dụng class components */}
        <NdtClassComp></NdtClassComp>
    </div>
  );
}

export default NdtApp;
