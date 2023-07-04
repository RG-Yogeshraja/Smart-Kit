import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const reset_Mobile_APICall = createAsyncThunk('resetDataforMobile/reset_Mobile_APICall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.usersResetPasswordPath

    const response = await axios.post(apiURL, payload)
    console.log("reset user data", response)
    return response.data
})
//reducer
export const reset_password_sliceMobile = createSlice({
    name: 'resetDataforMobile',
    initialState: {
        resetpassword_mobile: [],
        reset_loading_mobile: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(reset_Mobile_APICall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.reset_loading_mobile === 'idle') {
                state.reset_loading_mobile = 'pending'
            }
        })
        builder.addCase(reset_Mobile_APICall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.reset_loading_mobile === 'pending') {
                state.resetpassword_mobile = action.payload
                state.reset_loading_mobile = 'idle'
            }
        })
        builder.addCase(reset_Mobile_APICall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.reset_loading_mobile === 'pending') {
                state.reset_loading_mobile = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default reset_password_sliceMobile.reducer
