import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const analyticsParentFilter_APIcall = createAsyncThunk('analyticsParentFilterData/analyticsParentFilter_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.globalfiltersval
    const response = await axios.post(apiURL, payload)
    console.log("analytics parent filter response data", response)
    return response.data
})

export const analyticsParentFilter_payloadDataPass = createAsyncThunk('analyticsParentFilterData/analyticsParentFilter_payloadDataPass', async (payload) => {
    return payload
})

//reducer
export const analyticsParentFilter_slice = createSlice({
    name: 'analyticsParentFilterData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,

        parentFilterPayload: {},
        payloadLoading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(analyticsParentFilter_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(analyticsParentFilter_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                console.log(state.data)
                state.loading = 'idle'
            }
        })
        builder.addCase(analyticsParentFilter_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),
        
            builder.addCase(analyticsParentFilter_payloadDataPass.pending, (state) => {
                if (state.payloadLoading === 'idle') {
                    state.payloadLoading = 'pending'
                }
            })
        builder.addCase(analyticsParentFilter_payloadDataPass.fulfilled, (state, action) => {
            if (state.payloadLoading === 'pending') {
                state.parentFilterPayload = action.payload ;
                state.payloadLoading = 'idle'
            }
        })
    }
})


export default analyticsParentFilter_slice.reducer
