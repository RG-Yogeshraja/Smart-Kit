import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const activeGroups_APIcall = createAsyncThunk('activeGroupsdata/activeGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getActivegroups

    const response = await axios.post(apiURL, payload)
    
    console.log("get active groups data", response)
    return response.data
})
//reducer
export const admin_active_groupsSplice = createSlice({
    name: 'activeGroupsdata',
    initialState: {
        activeGroupsValue: [],
        activeGroupsLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(activeGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.activeGroupsLoading === 'idle') {
                state.activeGroupsLoading = 'pending'
            }
        })
        builder.addCase(activeGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.activeGroupsLoading === 'pending') {
                state.activeGroupsValue = action.payload
                state.activeGroupsLoading = 'idle'
            }
        })
        builder.addCase(activeGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.activeGroupsLoading === 'pending') {
                state.activeGroupsLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_active_groupsSplice.reducer
