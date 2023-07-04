import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const reportsGroups_APIcall = createAsyncThunk('reportsGroupsdata/reportsGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getReportEvent

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_ReportsSplice = createSlice({
    name: 'reportsGroupsdata',
    initialState: {
        ReportsGroupsValue: [],
        ReportGroups_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(reportsGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.ReportGroups_loading === 'idle') {
                state.ReportGroups_loading = 'pending'
            }
        })
        builder.addCase(reportsGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.ReportGroups_loading === 'pending') {
                state.ReportsGroupsValue = action.payload
                state.ReportGroups_loading = 'idle'
            }
        })
        builder.addCase(reportsGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.ReportGroups_loading === 'pending') {
                state.ReportGroups_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_ReportsSplice.reducer
