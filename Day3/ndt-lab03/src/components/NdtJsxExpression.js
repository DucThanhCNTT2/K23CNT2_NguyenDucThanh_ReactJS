import React from 'react'

export default function NdtJsxExpression() {
    //biến
    const name="Nguyễn Đức Thành";
    //biến đối tượng
    const user={
        firstname:"Thanh",
        lastname:"Nguyen"
    }
    //hàm
    const fullname=(user)=>{
        return user.firstname + '' + user.lastname;
    }

    //element
    const element=(
        <div>
            {/*Biểu thức jsx*/}
            <h2> {fullname(user)} </h2>
            <hr/>
            <h3> Welcome to, {name}</h3>
            
        </div>
    );

    //Ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3>Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Fit-NTU - K23CNT2</h3>
        }
    }
  return (
    <div>
        <h1> NDT - JSXEXPRESSION</h1>
        {/*sử dụng biến element*/}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Nguyễn Đức Thành")}
    </div>
  )
}
