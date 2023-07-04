import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const adminforgot_APIcall = createAsyncThunk('adminForgotData/adminforgot_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.adminForgoPasswordPath

    const response = await axios.post(apiURL, payload)
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_forgot_slice = createSlice({
    name: 'adminForgotData',
    initialState: {
        forgotvalue: [],
        forgot_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminforgot_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.forgot_loading === 'idle') {
                state.forgot_loading = 'pending'
            }
        })
        builder.addCase(adminforgot_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.forgot_loading === 'pending') {
                state.forgotvalue = action.payload
                state.forgot_loading = 'idle'
            }
        })
        builder.addCase(adminforgot_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.forgot_loading === 'pending') {
                state.forgot_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_forgot_slice.reducer
