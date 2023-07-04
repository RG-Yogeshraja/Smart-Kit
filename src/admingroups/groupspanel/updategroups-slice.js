import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const adminupdateGroupInfo_APIcall = createAsyncThunk('adminupdateGroupInfo/adminupdateGroupInfo_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.adminupdatesgroup
    const response = await axios.post(apiURL, payload)
    console.log("login user data", response)
    
    return response.data
})
export const clearaddgroupLogin = createAsyncThunk('adminupdateGroupInfo/clearaddgroupLogin', async () => {
    
    const data = {}
    return data
})
//reducer
export const admin_updategroup_info_slice = createSlice({
    name: 'adminupdateGroupInfo',
    initialState: {
        updategroup: [],
        updategrouploading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(adminupdateGroupInfo_APIcall.pending, (state) => {
            console.log("getting1", state.updategrouploading)
            if (state.updategrouploading === 'idle') {
                state.updategrouploading = 'pending'
            }
        })
        builder.addCase(adminupdateGroupInfo_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.updategrouploading)
            
            if (state.updategrouploading === 'pending') {
                state.updategroup = action.payload
                state.updategrouploading = 'idle'
            }
        })
        builder.addCase(adminupdateGroupInfo_APIcall.rejected, (state) => {
            console.log("getting3", state.updategrouploading)
            if (state.updategrouploading === 'pending') {
                state.updategrouploading = 'idle'
                state.error = 'Error occured'
            }
        })
        
    }
})
//reducer


export default admin_updategroup_info_slice.reducer
