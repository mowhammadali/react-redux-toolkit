import React, { useEffect, useState } from "react"
import css from "./Todos.module.css"
import Todo from "../../components/todo/Todo";
import { useSelector, useDispatch } from "react-redux"
import { TextField, Button } from "@mui/material"
import { addTodo, createTodos } from "./todosSlice"
import { fetchTodos, postTodo } from "../../services/apis/todosApi"

const Todos = () => {
    const dispatch = useDispatch();
    const todosState = useSelector(state => state.todosState);
    const [author , setAuthor] = useState('');
    const [description , setDescription] = useState('');
    
    const createTodo = () => {
        if (author && description) {
            const todoData = {
                author,
                description,
                date: new Date().toLocaleString(),
                id: String(+(todosState.todos?.at(-1)?.id) + 1)
            }
            setAuthor('');
            setDescription('');

            dispatch(addTodo(todoData));

            postTodo(todoData)
                .catch(error => console.log(error));

        }
    }

    const keyDownHandler = event => {
        if (event.key === 'Enter') createTodo();
    }
  
    useEffect(() => {
        const callApi = () => {
            fetchTodos()
                .then(res => {
                    dispatch(createTodos(res.data))
                })
                .catch(err => console.log(err))
        }

        callApi();
    } , [])
 
    return (
        <div className={css.todosContainer}>
            <div className={css.todosActions}>
                <TextField label="Author" variant="outlined" size="small" 
                    value={author} onChange={e => setAuthor(e.target.value)}/>
                <TextField fullWidth label="Your todo..." size="small" 
                    value={description} onChange={e => setDescription(e.target.value)} 
                    onKeyDown={keyDownHandler}/>
                <Button variant="contained" color="success" sx={{ width: "160px" }}
                    onClick={createTodo}>
                    Success
                </Button>
            </div>
            <div className={css.todosWrapper}>
                {todosState.todos?.map((todo) => <Todo key={todo.id} {...todo}/>)}
            </div>
        </div>
    )
}

export default Todos