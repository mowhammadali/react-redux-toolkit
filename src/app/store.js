import { configureStore } from '@reduxjs/toolkit'
import todosReudcer from '../features/todos/todosSlice';
import usersReducer from '../features/users/usersSlice';
import createUserReducer from '../features/createUser/createUserSlice';

const store = configureStore({
    reducer: {
        todosState: todosReudcer,
        usersState: usersReducer,
        createUserState: createUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store;