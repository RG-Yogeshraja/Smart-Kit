import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../../hsStore/ApiConstants"

// API call
export const searchGroupInterestforEvent_APIcall = createAsyncThunk('searchGroupNameInterestData/searchGroupInterest_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.searchGroupnameInterestPath
    const response = await axios.post(apiURL, payload)
    // console.log("search group or interest list", response)
    return response.data
})

export const searchGroupInterestforPost_APIcall = createAsyncThunk('searchGroupNameInterestData/searchGroupInterestforPost_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.searchGroupnameInterestPath
    const response = await axios.post(apiURL, payload)
    // console.log("search group or interest list", response)
    return response.data
})

//reducer
export const searchGroupnameInterest_slice = createSlice({
    name: 'searchGroupNameInterestData',
    initialState: {
        searchGroup_interestnameData_forEvent:[],
        eventLoading: 'idle',
        searchGroup_interestnameData_forPost:[],
        postLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchGroupInterestforEvent_APIcall.pending, (state, action) => {
            if (state.eventLoading === 'idle') {
                state.eventLoading = 'pending'
            }
        })
        builder.addCase(searchGroupInterestforEvent_APIcall.fulfilled, (state, action) => {
            if (state.eventLoading === 'pending') {
                state.searchGroup_interestnameData_forEvent = action.payload
                state.eventLoading = 'idle'
            }
        })
        builder.addCase(searchGroupInterestforEvent_APIcall.rejected, (state, action) => {
            if (state.eventLoading === 'pending') {
                state.eventLoading = 'idle'
                state.error = 'Error occured'
            }
        }),

        builder.addCase(searchGroupInterestforPost_APIcall.pending, (state, action) => {
            if (state.postLoading === 'idle') {
                state.postLoading = 'pending'
            }
        })
        builder.addCase(searchGroupInterestforPost_APIcall.fulfilled, (state, action) => {
            if (state.postLoading === 'pending') {
                state.searchGroup_interestnameData_forPost = action.payload
                state.postLoading = 'idle'
            }
        })
        builder.addCase(searchGroupInterestforPost_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }) 
    }
})


export default searchGroupnameInterest_slice.reducer
