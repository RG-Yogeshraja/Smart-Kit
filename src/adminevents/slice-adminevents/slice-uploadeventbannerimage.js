import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const uploadEventBannerImage_APIcall = createAsyncThunk('uploadEventBannerImageData/uploadEventBannerImage_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.uploadEventBannerImagePath
    const response = await axios.post(apiURL, payload)
    //
    console.log("Upload event banner image data", response)
    return response.data
})

//reducer
export const uploadEventBannerImage_slice = createSlice({ 
    name: 'uploadEventBannerImageData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(uploadEventBannerImage_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(uploadEventBannerImage_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(uploadEventBannerImage_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default uploadEventBannerImage_slice.reducer
