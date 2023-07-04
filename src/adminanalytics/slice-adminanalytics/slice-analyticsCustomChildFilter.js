import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getCustomChildFilter_APIcall = createAsyncThunk('getCustomChildFilterData/getCustomChildFilter_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.globalsubfiltersval
    const response = await axios.post(apiURL, payload)
    debugger
    console.log("get analytics custom child filtered list data", response)
    return response.data
})

//reducer
export const getCustomChildFilter_slice = createSlice({
    name: 'getCustomChildFilterData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCustomChildFilter_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getCustomChildFilter_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getCustomChildFilter_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getCustomChildFilter_slice.reducer
