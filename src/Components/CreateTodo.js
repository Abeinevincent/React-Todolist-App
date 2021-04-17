import React, { useState } from 'react'
import TodoList from './TodoList';
import swar from 'sweetalert';

function CreateTodo() {

    const [todo, setTodo] = useState({title: '', done: false});
    const [todoArr, setTodoArr] = useState([])

    let todos = localStorage.hasOwnProperty('todos') ? 
    JSON.parse(localStorage.getItem('todos')) : []

    const onChange = (event) => {
        let { value } = event.target;
        let obj = {};
        obj['title'] = value
        obj['done'] = false
        setTodo(obj)
    }

    const CreateTodo = (event) => {
        const { name } = event.target
        if (event.key === 'enter' || name === 'title'){
            if (todo.title === ''){
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodo({title: '', done: false})
            }
            else {
                swar('Oops', 'Please write todo first', 'Error');
            }
        }
    }

    const completeTodo = (i) => {
        if (todos[i]['done'] !== true){
            todos[i]['done'] = true
            localStorage.setItem('todos', JSON.stringify(todos))
            setTodoArr(todos)
            swal('Good job', 'Todo Completed', 'success');
        }
    }

    return (
        <>
        <div className="box">
            <div className="text-end">
                <h2>React Todo App</h2>
                <h4>Add a new Todo</h4>
            </div>
            <div className="text-addTodo">
                <input type="text" name="todo" onKeyPress="createTodo" placeholder="Write here..." onChange={onChange} />
                <button className="btn-addTodo" type="button" name="addTodo" onClick="createTodo">Add Todo</button>
            </div>
        </div>
        <TodoList todoArr={ todoArr } completeTodo={completeTodo={ completeTodo }} />
        </>
    )
}

export default CreateTodo;
