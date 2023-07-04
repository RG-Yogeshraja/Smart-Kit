import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const resetpassword_APIcall = createAsyncThunk('resetData/resetpassword_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.adminResetPasswordPath

    const response = await axios.post(apiURL, payload)
    console.log("reset user data", response)
    return response.data
})
//reducer
export const reset_password_slice = createSlice({
    name: 'resetData',
    initialState: {
        resetpassword: [],
        reset_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(resetpassword_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.reset_loading === 'idle') {
                state.reset_loading = 'pending'
            }
        })
        builder.addCase(resetpassword_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.reset_loading === 'pending') {
                state.resetpassword = action.payload
                state.reset_loading = 'idle'
            }
        })
        builder.addCase(resetpassword_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.reset_loading === 'pending') {
                state.reset_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default reset_password_slice.reducer
