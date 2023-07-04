import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../../hsStore/ApiConstants"

// API call
export const updateSponsorPostControSettings_APIcall = createAsyncThunk('updateSponsorPostControlSettingsData/updateSponsorPostControSettings_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.updateSponsorPostControlSettingsPath
    const response = await axios.post(apiURL, payload)
    
    console.log("update sponsor Post control settings data", response)
    return response.data
})

//reducer
export const updateSponsorPostControlSettings_slice = createSlice({
    name: 'updateSponsorPostControlSettingsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateSponsorPostControSettings_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(updateSponsorPostControSettings_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(updateSponsorPostControSettings_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default updateSponsorPostControlSettings_slice.reducer
