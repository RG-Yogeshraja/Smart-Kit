import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../../hsStore/ApiConstants"

// API call
export const getSponsorPostDemograph_APIcall = createAsyncThunk('getSponsorPostDemographData/getSponsorPostDemograph_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getSposnorPostDemoGraphPath
    const response = await axios.post(apiURL, payload)
    console.log("get sponsor Post demograph data", response)
    return response.data
})

//reducer
export const getAllSponsorPosts_slice = createSlice({
    name: 'getSponsorPostDemographData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSponsorPostDemograph_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getSponsorPostDemograph_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getSponsorPostDemograph_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getAllSponsorPosts_slice.reducer
