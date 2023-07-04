import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const removeUsersPostComments_APIcall = createAsyncThunk('removeUserspostCommentsData/removeUsersPostComments_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.removeUsersPostCommentsPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("remove users post comments data", response)
    return response.data
})

//reducer
export const removeUsersPostComments_slice = createSlice({
    name: 'removeUserspostCommentsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeUsersPostComments_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(removeUsersPostComments_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(removeUsersPostComments_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default removeUsersPostComments_slice.reducer
