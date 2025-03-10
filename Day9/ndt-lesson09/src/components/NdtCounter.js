import React,{useReducer} from 'react'
const initialState = { conut: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { conut: state.conut + 1 };
        case 'decrement':
            return { conut: state.conut - 1 };
        case 'reset':
            return { conut: 0 };    
        default:
            throw new Error();
    }
}   

export default function NdtCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='alert alert-success'>
            <h2>Bộ đếm: {state.conut}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}
