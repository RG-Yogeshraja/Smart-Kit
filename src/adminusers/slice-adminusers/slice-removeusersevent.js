import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const removeUsersEvent_APIcall = createAsyncThunk('removeUserseventData/removeUsersEvent_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.removeUsersEventPath
    const response = await axios.post(apiURL, payload)
    
    console.log("remove users event data", response)
    return response.data
})

//reducer
export const removeUsersEvent_slice = createSlice({
    name: 'removeUserseventData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeUsersEvent_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(removeUsersEvent_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(removeUsersEvent_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default removeUsersEvent_slice.reducer
