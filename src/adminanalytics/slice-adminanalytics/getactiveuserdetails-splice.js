import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const admin_analytics_getactiveuser_APIcall = createAsyncThunk('admin_analytics_activeusers_data/admin_analytics_getactiveuser_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.get_user_list_events_list

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_analyticsgetuserlists = createSlice({
    name: 'admin_analytics_activeusers_data',
    initialState: {
        admin_analytics_userlisting: [],
        admin_analytics_userlisting_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(admin_analytics_getactiveuser_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.admin_analytics_userlisting_loading === 'idle') {
                state.admin_analytics_userlisting_loading = 'pending'
            }
        })
        builder.addCase(admin_analytics_getactiveuser_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.admin_analytics_userlisting_loading === 'pending') {
                state.admin_analytics_userlisting = action.payload
                state.admin_analytics_userlisting_loading = 'idle'
            }
        })
        builder.addCase(admin_analytics_getactiveuser_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.admin_analytics_userlisting_loading === 'pending') {
                state.admin_analytics_userlisting_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_analyticsgetuserlists.reducer
