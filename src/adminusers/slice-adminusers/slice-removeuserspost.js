import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const removeUsersPost_APIcall = createAsyncThunk('removeUsersPostData/removeUsersPost_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.removeUsersPostPath
    const response = await axios.post(apiURL, payload)
    
    console.log("remove users post data", response)
    return response.data
})

//reducer
export const removeUsersPost_slice = createSlice({
    name: 'removeUsersPostData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeUsersPost_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(removeUsersPost_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(removeUsersPost_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default removeUsersPost_slice.reducer
