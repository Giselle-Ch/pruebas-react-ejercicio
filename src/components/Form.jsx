import React,{useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({todo: '', cantidad: ''})
    const [todos, setTodos] = useState([])


    const handleChange = e => setTodo({ ...todo, [e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '' || todo.cantidad.trim() === ''){
            alert('el campo no puede estar vacío')
            return
        }
        
        setTodos([...todos, todo])
        console.log(todo.todo + '-' + todo.cantidad)
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" name="todo" onChange={handleChange} placeholder="Elemento"/>
            <input type="text" name="cantidad" onChange={handleChange} placeholder="Cantidad"/>
            <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value,index) => (<Todo todo={value.todo} cantidad={value.cantidad} key={index} index={index} deleteTodo={deleteTodo} />)) 
        }
        </>
    )
}

export default Form