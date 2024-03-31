import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/config/api';

const initialState = {
    data: [],
    error: '',
    isPending: false
}

export const postUser = createAsyncThunk(
    'createUser/postUser',
    async (user) => {
        try {
            const response = await api.post('users' , user);
            return response;
        }
        catch (error) {
            throw error;
        }
    }
) 

const createUserReducer = createSlice({
    name: 'createUser',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(postUser.pending , (state) => {
            state.isPending = true;
            state.error = '';
        })
        .addCase(postUser.fulfilled , (state , action) => {
            state.data = action.payload.data;
            state.isPending = false;
            state.error = '';
        })
        .addCase(postUser.rejected , (state , action) => {
            state.data = [];
            state.isPending = false;
            state.error = action.error.message;
        })
    }
})

export default createUserReducer.reducer;