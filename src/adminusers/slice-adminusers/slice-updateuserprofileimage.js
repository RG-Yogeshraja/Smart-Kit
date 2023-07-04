import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const updateUserProfileImage_APIcall = createAsyncThunk('updateUserProfileImageData/updateUserProfileImage_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.updateUserProfileImagePath
    const response = await axios.post(apiURL, payload)
    
    console.log("user profile image updated", response)
    return response.data
})

//reducer
export const updateUserProfileImage_slice = createSlice({
    name: 'updateUserProfileImageData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUserProfileImage_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(updateUserProfileImage_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                //
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(updateUserProfileImage_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default updateUserProfileImage_slice.reducer
