import React from "react"
import css from "./Todo.module.css"
import Button from "@mui/material/Button"
import api from "../../services/config/api"
import { useDispatch } from "react-redux"
import { removeTodo } from "../../features/todos/todosSlice"

const Todo = ({ author, description, date , id }) => {
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(removeTodo(id));

        const deleteTodo = async () => {
            try {
                await api.delete(`todos/${id}`);
            }
            catch (error) {
                console.log(error);
            }
        }

        deleteTodo();
    }

    return (
        <div className={css.todoContainer}>
            <div className={css.todoHeader}>
                <h3 className={css.todoAuthor}>Author: {author}</h3>
                <h5 className={css.todoDescription}>
                    description: {description}
                </h5>
            </div>
            <div className={css.todoFooter}>
                <Button variant="outlined" color="error" onClick={deleteTodo}>
                    Remove
                </Button>
                <p className={css.todoDate}>{date}</p>
            </div>
        </div>
    )
}

export default Todo
