import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const invitememberinfo_APIcall = createAsyncThunk('invitememberinfo/invitememberinfo_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.invitemembersingroups
    const response = await axios.post(apiURL, payload)
    console.log("login user data", response)
    
    return response.data
})

//reducer
export const admin_invitememberlistsplice = createSlice({
    name: 'invitememberinfo',
    initialState: {
        invitegroup: [],
        invoteloading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(invitememberinfo_APIcall.pending, (state) => {
            console.log("getting1", state.invoteloading)
            if (state.invoteloading === 'idle') {
                state.invoteloading = 'pending'
            }
        })
        builder.addCase(invitememberinfo_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.invoteloading)
            if (state.invoteloading === 'pending') {
                state.invitegroup = action.payload
                state.invoteloading = 'idle'
            }
        })
        builder.addCase(invitememberinfo_APIcall.rejected, (state) => {
            console.log("getting3", state.invoteloading)
            if (state.invoteloading === 'pending') {
                state.invoteloading = 'idle'
                state.error = 'Error occured'
            }
        })
        // builder.addCase(clearaddgroupLogin.pending,(state,action)=>{
        //     state.addgroup = []
        // })
    }
})
//reducer


export default admin_invitememberlistsplice.reducer
