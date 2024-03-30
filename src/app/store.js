import { configureStore } from '@reduxjs/toolkit'
import todosReudcer from '../features/todos/todosSlice';
import usersReducer from '../features/users/usersSlice';

const store = configureStore({
    reducer: {
        todosState: todosReudcer,
        usersState: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store;