import React, { useEffect, useState } from 'react'

export default function NdtAutoCounter() {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running){
            timer = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(timer); 
    }, [running]);

  return (
    <div className='alert alert-danger'>
        <h2>giá trị: {count}</h2>   
        <button onClick={() => setRunning(!running)}>
            {running ? "Dừng" : "Bắt đầu"}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
