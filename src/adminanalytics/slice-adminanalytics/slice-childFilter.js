import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const analyticsChildFilter_APIcall = createAsyncThunk('analyticsChildFilterData/analyticsChildFilter_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.globalsubfiltersval
    const response = await axios.post(apiURL, payload)
    debugger
    console.log("analytics child filter response data", response)
    return response.data
})

export const analyticsChildFilter_payloadDataPass = createAsyncThunk('analyticsChildFilterData/analyticsChildFilter_payloadDataPass', async (payload) => {
    return payload
})

export const clearChildFilterData = createAsyncThunk('analyticsChildFilterData/clearChildFilterData', async () => {
    return {}
})


//reducer
export const analyticsChildFilter_slice = createSlice({
    name: 'analyticsChildFilterData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,

        childFilterPayload: {},
        payloadLoading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(analyticsChildFilter_APIcall.pending, (state, action) => {
            debugger
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(analyticsChildFilter_APIcall.fulfilled, (state, action) => {
            debugger
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(analyticsChildFilter_APIcall.rejected, (state, action) => {
            debugger
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),
            builder.addCase(clearChildFilterData.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'idle';
                    state.data = []
                }
            }),
            //child filter payload data
            builder.addCase(analyticsChildFilter_payloadDataPass.pending, (state) => {
                if (state.payloadLoading === 'idle') {
                    state.payloadLoading = 'pending'
                }
            })
        builder.addCase(analyticsChildFilter_payloadDataPass.fulfilled, (state, action) => {
            if (state.payloadLoading === 'pending') {
                state.childFilterPayload = action.payload;
                state.payloadLoading = 'idle'
            }
        })
    }
})


export default analyticsChildFilter_slice.reducer
