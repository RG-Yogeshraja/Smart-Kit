import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../../hsStore/ApiConstants"

// API call
export const getAllSponsorEvents_APIcall = createAsyncThunk('getAllSponsorEventsData/getAllSponsorEvents_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getAllSponsorEventsPath
    const response = await axios.post(apiURL, payload)
    console.log("get all sponsor event data", response)
    return response.data
})

export const sponsorEventDetailsPayload = createAsyncThunk('getAllSponsorEventsData/sponsorEventDetailsPayload', async (payload) => {
    return payload
})


//reducer
export const getAllSponsorEvents_slice = createSlice({
    name: 'getAllSponsorEventsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,

        sponsorEventDetailsData: {},
        sponsorEventDetailsLoading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllSponsorEvents_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getAllSponsorEvents_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getAllSponsorEvents_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),

        //get sponsor events details 
        builder.addCase(sponsorEventDetailsPayload.pending, (state, action) => {
            console.log("getting1", state.sponsorEventDetailsLoading)
            if (state.sponsorEventDetailsLoading === 'idle') {
                state.sponsorEventDetailsLoading = 'pending'
            }
        })
            builder.addCase(sponsorEventDetailsPayload.fulfilled, (state, action) => {
                console.log("getting2", state.sponsorEventDetailsLoading)
                if (state.sponsorEventDetailsLoading === 'pending') {
                    state.sponsorEventDetailsData = action.payload
                    state.sponsorEventDetailsLoading = 'idle'
                }
            })
    }
})


export default getAllSponsorEvents_slice.reducer
