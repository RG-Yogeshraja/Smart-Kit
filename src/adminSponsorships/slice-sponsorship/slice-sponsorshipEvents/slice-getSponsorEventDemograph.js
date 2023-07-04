import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../../hsStore/ApiConstants"

// API call
export const getSponsorEventDemograph_APIcall = createAsyncThunk('getSponsoreventDemographData/getSponsorEventDemograph_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getSposnorEventDemoGraphPath
    const response = await axios.post(apiURL, payload)
    console.log("get sponsor event demograph data", response)
    return response.data
})

//reducer
export const getAllSponsorEvents_slice = createSlice({
    name: 'getSponsoreventDemographData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSponsorEventDemograph_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getSponsorEventDemograph_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getSponsorEventDemograph_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getAllSponsorEvents_slice.reducer
