import api from "../config/api"

export const fetchTodos = async () => {
    try {
        const response = await api.get("todos")
        return response
    } catch (error) {
        throw error
    }
}

export const postTodo = async (todoData) => {
    try {
        const response = await api.post("todos", todoData)
        return response
    } catch (error) {
        throw error
    }
}

export const deleteTodo = async (id) => {
    try {
        await api.delete(`todos/${id}`)
    } catch (error) {
        console.log(error)
    }
}
