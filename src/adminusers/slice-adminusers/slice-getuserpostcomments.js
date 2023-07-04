import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getUserPostComments_APIcall = createAsyncThunk('getUsersPostCommentsData/getUserPostComments_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getUsersPostCommentsPath
    const response = await axios.post(apiURL, payload)
    console.log("get users post comments data", response)
    return response.data
})

//reducer
export const getUsersPostComments_slice = createSlice({
    name: 'getUsersPostCommentsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserPostComments_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getUserPostComments_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getUserPostComments_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getUsersPostComments_slice.reducer
