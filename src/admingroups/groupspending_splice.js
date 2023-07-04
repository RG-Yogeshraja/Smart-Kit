import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const getpendingGroups_APIcall = createAsyncThunk('pendinglist_groupsdatainfo/getpendingGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getgroupspendinglist

    const response = await axios.post(apiURL, payload)
    debugger
    console.log("get pending group list data", response)
    return response.data
})
//reducer
export const admin_pendinglist_groupsSplice = createSlice({
    name: 'pendinglist_groupsdatainfo',
    initialState: {
        data: [],
        pendinglist_groupslist_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getpendingGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.pendinglist_groupslist_loading === 'idle') {
                state.pendinglist_groupslist_loading = 'pending'
            }
        })
        builder.addCase(getpendingGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.pendinglist_groupslist_loading === 'pending') {
                state.data = action.payload
                state.pendinglist_groupslist_loading = 'idle'
            }
        })
        builder.addCase(getpendingGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.pendinglist_groupslist_loading === 'pending') {
                state.pendinglist_groupslist_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_pendinglist_groupsSplice.reducer
