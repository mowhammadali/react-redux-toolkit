import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/config/api';

const initialState = {
    data: [],
    error: '',
    isPending: false,
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const response = await api.get('users');
            return response;
        }
        catch (error) {
            throw error;
        }
    }
)

const usersReducer = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchUsers.pending , (state) => {
            state.error = '';
            state.isPending = true;
        })
        .addCase(fetchUsers.fulfilled , (state , action) => {
            state.data = action.payload.data;
            state.error = '';
            state.isPending = false;
        })
        .addCase(fetchUsers.rejected , (state , action) => {
            state.data = [];
            state.error = action.error.message;
            state.isPending = false;
        })
    }
})

export default usersReducer.reducer;