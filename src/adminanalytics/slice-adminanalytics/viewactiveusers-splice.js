import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const admin_analytics_viewactiveuser_APIcall = createAsyncThunk('admin_analytics_viewactiveusers_data/admin_analytics_viewactiveuser_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getactiveuser_analytics 

    const response = await axios.post(apiURL, payload)
    
    console.log("get active users list", response)
    return response.data
})
//reducer
export const admin_analytics_viewactivelist_splice = createSlice({
    name: 'admin_analytics_viewactiveusers_data',
    initialState: {
        admin_analytics_view_userslisting: [],
        admin_analytics_viewactivelist_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(admin_analytics_viewactiveuser_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.admin_analytics_viewactivelist_loading === 'idle') {
                state.admin_analytics_viewactivelist_loading = 'pending'
            }
        })
        builder.addCase(admin_analytics_viewactiveuser_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.admin_analytics_viewactivelist_loading === 'pending') {
                state.admin_analytics_view_userslisting = action.payload
                state.admin_analytics_viewactivelist_loading = 'idle'
            }
        })
        builder.addCase(admin_analytics_viewactiveuser_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.admin_analytics_viewactivelist_loading === 'pending') {
                state.admin_analytics_viewactivelist_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_analytics_viewactivelist_splice.reducer
