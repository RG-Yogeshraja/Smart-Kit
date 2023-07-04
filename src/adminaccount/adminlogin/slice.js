import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

//action
export const adminLogin_APIcall = createAsyncThunk('adminLoginData/adminLogin_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.adminLoginPath;
    const response = await axios.post(apiURL, payload)
    console.log("login user data", response)
    return response.data
})

export const clearLogin = createAsyncThunk('adminLoginData/clearLogin', async () => {
    const data = {}
    return data;
})


//reducer
export const admin_login_slice = createSlice({
    name: 'adminLoginData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminLogin_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(adminLogin_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(adminLogin_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),
        builder.addCase(clearLogin.pending,(state,action)=>{
            state.data = []
        })
    }
})

export default admin_login_slice.reducer
