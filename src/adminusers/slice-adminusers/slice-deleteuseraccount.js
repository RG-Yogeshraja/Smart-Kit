import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const deleteUserAccount_APIcall = createAsyncThunk('deleteUserAccountData/deleteUserAccount_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.deleteUserPath
    const response = await axios.post(apiURL, payload)
    
    console.log("delete user account", response)
    return response.data
})

//reducer
export const deleteUserAccount_slice = createSlice({
    name: 'deleteUserAccountData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteUserAccount_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(deleteUserAccount_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(deleteUserAccount_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default deleteUserAccount_slice.reducer
