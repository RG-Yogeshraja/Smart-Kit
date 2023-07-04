
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const acceptRejectMemberFromPending_APIcall = createAsyncThunk('acceptRejectMemberFromPendingData/acceptRejectMemberFromPending_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.acceptRejectMemberFromPendingPath
    const response = await axios.post(apiURL, payload)
    
    console.log("accept/reject member from event Pending data", response)
    return response.data
})

//reducer
export const acceptRejectMemberFromPending_slice = createSlice({
    name: 'acceptRejectMemberFromPendingData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(acceptRejectMemberFromPending_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(acceptRejectMemberFromPending_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(acceptRejectMemberFromPending_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default acceptRejectMemberFromPending_slice.reducer
