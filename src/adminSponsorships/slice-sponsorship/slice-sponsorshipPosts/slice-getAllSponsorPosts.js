import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../../hsStore/ApiConstants"

// API call
export const getAllSponsorPosts_APIcall = createAsyncThunk('getAllSponsorPostsData/getAllSponsorPosts_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getAllSponsorPostsPath
    const response = await axios.post(apiURL, payload)
    
    console.log("get all sponsor post data", response)
    return response.data
})

export const sponsorPostsDetailsPayload = createAsyncThunk('getAllSponsorPostsData/sponsorPostsDetailsPayload', async (payload) => {
    return payload
})

//reducer
export const getAllSponsorPosts_slice = createSlice({
    name: 'getAllSponsorPostsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,

        sponsorPostDetailsData: {},
        sponsorPostDetailsLoading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllSponsorPosts_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getAllSponsorPosts_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getAllSponsorPosts_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),

        //get sponsor Posts details 
        builder.addCase(sponsorPostsDetailsPayload.pending, (state, action) => {
            if (state.sponsorPostDetailsLoading === 'idle') {
                state.sponsorPostDetailsLoading = 'pending'
            }
        })
            builder.addCase(sponsorPostsDetailsPayload.fulfilled, (state, action) => {
                if (state.sponsorPostDetailsLoading === 'pending') {
                    state.sponsorPostDetailsData = action.payload
                    state.sponsorPostDetailsLoading = 'idle'
                }
            })
    }
})


export default getAllSponsorPosts_slice.reducer
