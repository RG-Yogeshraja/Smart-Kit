import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const admin_analytics_chart_activeusers_APIcall = createAsyncThunk('admin_analytics_chart_activeuserlist/admin_analytics_chart_activeusers_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.active_listuser_count
//
    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_analytics_chart_active_users_splice = createSlice({
    name: 'admin_analytics_chart_activeuserlist',
    initialState: {
        admin_analytics_chart_activeuser_listdata: [],
        admin_analytics_chart_activeuserlist_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(admin_analytics_chart_activeusers_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.admin_analytics_chart_activeuserlist_loading === 'idle') {
                state.admin_analytics_chart_activeuserlist_loading = 'pending'
            }
        })
        builder.addCase(admin_analytics_chart_activeusers_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.admin_analytics_chart_activeuserlist_loading === 'pending') {
                state.admin_analytics_chart_activeuser_listdata = action.payload
                state.admin_analytics_chart_activeuserlist_loading = 'idle'
            }
        })
        builder.addCase(admin_analytics_chart_activeusers_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.admin_analytics_chart_activeuserlist_loading === 'pending') {
                state.admin_analytics_chart_activeuserlist_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_analytics_chart_active_users_splice.reducer
