import React, {useState} from 'react'

export default function NdtUseState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Bộ đếm: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
