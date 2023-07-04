import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const approvependinggroups_APIcall = createAsyncThunk('approvependingGroupsdata/approvependinggroups_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.approvependinggroups
    const response = await axios.post(apiURL, payload)
    console.log("approve pending groups data", response)
    return response.data
})

//reducer
export const admin_approvependinggroupsSplice = createSlice({
    name: 'approvependingGroupsdata',
    initialState: {
        data: [],
        approvependingGroupsLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(approvependinggroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.approvependingGroupsLoading === 'idle') {
                state.approvependingGroupsLoading = 'pending'
            }
        })
        builder.addCase(approvependinggroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.approvependingGroupsLoading === 'pending') {
                state.data = action.payload
                state.approvependingGroupsLoading = 'idle'
            }
        })
        builder.addCase(approvependinggroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.approvependingGroupsLoading === 'pending') {
                state.approvependingGroupsLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_approvependinggroupsSplice.reducer
