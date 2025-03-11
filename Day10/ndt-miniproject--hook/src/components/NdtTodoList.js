import { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/NdtTodoReducer';
import NdtAddTodo from './NdtAddTodo';
import NdtTodoItem from './NdtTodoItem';

function NdtTodoList() {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh Sách Công Việc</h2>
            <NdtAddTodo dispatch={dispatch} />
            <ul>
                {todos.map(todo => (
                    <NdtTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

export default NdtTodoList;