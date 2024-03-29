import { configureStore } from '@reduxjs/toolkit'
import todosReudcer from '../features/todos/todosSlice';

const store = configureStore({
    reducer: {
        todosState: todosReudcer,
    },
})

export default store;