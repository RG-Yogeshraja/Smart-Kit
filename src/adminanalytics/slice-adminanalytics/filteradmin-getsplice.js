import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call(parent filter)
export const admin_analytics_filter_value_APICall = createAsyncThunk('admin_analytics_filter_global/admin_analytics_filter_value_APICall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.globalfiltersval
    
    const response = await axios.post(apiURL, payload)
    
    console.log(response, "ssss")
    return response.data
})

export const admin_analytics_Childfilter_value_APICall = createAsyncThunk('admin_analytics_filter_global/admin_analytics_Childfilter_value_APICall', async (payload) => {

    console.log("payloadsss", payload)
    return payload;
})

// API call(sub filter)
export const admin_analytics_subfilter_value_APICall = createAsyncThunk('admin_analytics_filter_global/admin_analytics_subfilter_value_APICall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.globalsubfiltersval

    const response = await axios.post(apiURL, payload)
    console.log(response, "ssss")
    return response.data
})
//reducer
export const admin_analytics_filter_value = createSlice({
    name: 'admin_analytics_filter_global',
    initialState: {
        admin_analytics_filter_value: [],
        admin_analytics_filter_value_loading: 'idle',
        admin_analytics_subfilter_value: [],
        admin_analytics_subfilter_value_loading: 'idle',
        admin_analytics_childFilter_values: {},
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(admin_analytics_filter_value_APICall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.admin_analytics_filter_value_loading === 'idle') {
                state.admin_analytics_filter_value_loading = 'pending'
            }
        })
        builder.addCase(admin_analytics_filter_value_APICall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.admin_analytics_filter_value_loading === 'pending') {
                state.admin_analytics_filter_value = action.payload
                state.admin_analytics_filter_value_loading = 'idle'
            }
        })
        builder.addCase(admin_analytics_filter_value_APICall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.admin_analytics_filter_value_loading === 'pending') {
                state.admin_analytics_filter_value_loading = 'idle'
                state.error = 'Error occured'
            }
        }),
            builder.addCase(admin_analytics_Childfilter_value_APICall.pending, (state) => {
                console.log("getting1", state.loading)
                if (state.admin_analytics_filter_value_loading === 'idle') {
                    state.admin_analytics_filter_value_loading = 'pending'
                }
            })
        builder.addCase(admin_analytics_Childfilter_value_APICall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.admin_analytics_filter_value_loading === 'pending') {
                state.admin_analytics_childFilter_values = { ...state.admin_analytics_childFilter_values, ...action.payload };
                state.admin_analytics_filter_value_loading = 'idle'
            }
        }),

            //analytics sub filter(child filter)
            builder.addCase(admin_analytics_subfilter_value_APICall.pending, (state) => {
                console.log("getting1", state.loading)
                if (state.admin_analytics_subfilter_value_loading === 'idle') {
                    state.admin_analytics_subfilter_value_loading = 'pending'
                }
            })
        builder.addCase(admin_analytics_subfilter_value_APICall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.admin_analytics_subfilter_value_loading === 'pending') {
                state.admin_analytics_subfilter_value = action.payload
                state.admin_analytics_subfilter_value_loading = 'idle'
            }
        })
        builder.addCase(admin_analytics_subfilter_value_APICall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.admin_analytics_subfilter_value_loading === 'pending') {
                state.admin_analytics_subfilter_value_loading = 'idle'
                state.error = 'Error occured'
            }
        })

    }
})

export default admin_analytics_filter_value.reducer
