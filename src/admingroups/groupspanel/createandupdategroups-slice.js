import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const adminGroupInfo_APIcall = createAsyncThunk('adminGroupInfo/adminGroupInfo_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.adminaddgroup
    const response = await axios.post(apiURL, payload)
    
    console.log("login user data", response)
    return response.data
})

export const clearaddgroupLogin = createAsyncThunk('adminGroupInfo/clearaddgroupLogin', async () => {
    const data = {}
    return data
})
//reducer
export const admin_group_info_slice = createSlice({
    name: 'adminGroupInfo',
    initialState: {
        addgroup: [],
        addgrouploading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminGroupInfo_APIcall.pending, (state) => {
            console.log("getting1", state.addgrouploading)
            if (state.addgrouploading === 'idle') {
                state.addgrouploading = 'pending'
            }
        })
        builder.addCase(adminGroupInfo_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.addgrouploading)
            if (state.addgrouploading === 'pending') {
                state.addgroup = action.payload
                state.addgrouploading = 'idle'
            }
        })
        builder.addCase(adminGroupInfo_APIcall.rejected, (state) => {
            console.log("getting3", state.addgrouploading)
            if (state.addgrouploading === 'pending') {
                state.addgrouploading = 'idle'
                state.error = 'Error occured'
            }
        })
        builder.addCase(clearaddgroupLogin.pending, (state, action) => {
            state.addgroup = []
        })
    }
})


export default admin_group_info_slice.reducer
