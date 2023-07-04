import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

//action
export const getActiveAdminAccount_APIcall = createAsyncThunk('getActiveAdminData/getActiveAdminAccount_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getActiveAdminAccountPath;
    const response = await axios.post(apiURL, payload)
    return response.data
})

//reducer
export const get_activeAdmin_slice = createSlice({
    name: 'getActiveAdminData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getActiveAdminAccount_APIcall.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getActiveAdminAccount_APIcall.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getActiveAdminAccount_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})

export default get_activeAdmin_slice.reducer
