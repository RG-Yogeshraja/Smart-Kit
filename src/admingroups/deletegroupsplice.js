import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const deletegroups_APIcall = createAsyncThunk('deletegroupsinfo/deletegroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.deletegroups
    const response = await axios.post(apiURL, payload)
    console.log("login user data", response)
    
    return response.data
})

//reducer
export const delete_group_splice = createSlice({
    name: 'deletegroupsinfo',
    initialState: {
        deletegroups: [],
        deletegroupsloading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deletegroups_APIcall.pending, (state) => {
            console.log("getting1", state.deletegroupsloading)
            if (state.deletegroupsloading === 'idle') {
                state.deletegroupsloading = 'pending'
            }
        })
        builder.addCase(deletegroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.deletegroupsloading)
            if (state.deletegroupsloading === 'pending') {
                state.deletegroups = action.payload
                state.deletegroupsloading = 'idle'
            }
        })
        builder.addCase(deletegroups_APIcall.rejected, (state) => {
            console.log("getting3", state.deletegroupsloading)
            if (state.deletegroupsloading === 'pending') {
                state.deletegroupsloading = 'idle'
                state.error = 'Error occured'
            }
        })
        // builder.addCase(clearaddgroupLogin.pending,(state,action)=>{
        //     state.addgroup = []
        // })
    }
})
//reducer


export default delete_group_splice.reducer
