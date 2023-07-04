import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../../hsStore/ApiConstants"

// API call
export const updateSponsorEventControSettings_APIcall = createAsyncThunk('updateSponsorEventControlSettingsData/updateSponsorEventControSettings_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.updateSponsorEventControlSettingsPath
    const response = await axios.post(apiURL, payload)
    
    console.log("update sponsor event control settings data", response)
    return response.data
})

//reducer
export const updateSponsorEventControlSettings_slice = createSlice({
    name: 'updateSponsorEventControlSettingsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateSponsorEventControSettings_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(updateSponsorEventControSettings_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(updateSponsorEventControSettings_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default updateSponsorEventControlSettings_slice.reducer
