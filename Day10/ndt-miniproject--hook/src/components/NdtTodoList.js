import { useEffect, useReducer } from 'react'
import NdtAddTodo from './NdtAddTodo';
import NdtTodoItem from './NdtTodoItem';
import { NdtTodoReducer } from '../reducers/NdtTodoReducer';

function NdtTodoList() {
    const [todos, dispatch] = useReducer(NdtTodoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <NdtAddTodo dispatch={dispatch} />
            <ul>
                {todos.map((todo) => (
                    <NdtTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

export default NdtTodoList;