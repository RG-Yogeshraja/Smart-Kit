import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

//action
export const deleteUserAccount_APIcall = createAsyncThunk('deleteUserData/deleteUserAccount_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.deleteUserAccountPath;
    const response = await axios.post(apiURL, payload)
    
    console.log("delete user account data", response)
    return response.data
})

//reducer
export const delete_userAccount_slice = createSlice({
    name: 'deleteUserData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteUserAccount_APIcall.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(deleteUserAccount_APIcall.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(deleteUserAccount_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})

export default delete_userAccount_slice.reducer
