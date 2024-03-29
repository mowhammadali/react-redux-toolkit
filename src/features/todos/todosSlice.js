import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalTodos: 0,
    todos: [],
}

const todosReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            state.todos.push(action.payload);
            state.totalTodos += 1;
        },
        createTodos: (state , action) => {
            state.todos = action.payload;
            state.totalTodos = action.payload.length;
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            state.totalTodos -= 1;
        }
    }
})

export const {addTodo , createTodos , removeTodo} = todosReducer.actions;
export default todosReducer.reducer;