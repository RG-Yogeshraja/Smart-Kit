import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const approvependinggroups_APIcall = createAsyncThunk('rejectpendingGroupsdata/approvependinggroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.rejectpendinggroups

    const response = await axios.post(apiURL, payload)
    
    console.log("approve pending group data", response)
    return response.data
})
//reducer
export const admin_rejectpendinggroupsSplice = createSlice({
    name: 'rejectpendingGroupsdata',
    initialState: {
        data: [],
        rejectpendingGroupsLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(approvependinggroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.rejectpendingGroupsLoading === 'idle') {
                state.rejectpendingGroupsLoading = 'pending'
            }
        })
        builder.addCase(approvependinggroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.rejectpendingGroupsLoading === 'pending') {
                state.data = action.payload
                state.rejectpendingGroupsLoading = 'idle'
            }
        })
        builder.addCase(approvependinggroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.rejectpendingGroupsLoading === 'pending') {
                state.rejectpendingGroupsLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_rejectpendinggroupsSplice.reducer
