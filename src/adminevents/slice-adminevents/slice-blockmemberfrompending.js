
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const blockMemberFromPending_APIcall = createAsyncThunk('blockMemberFromPendingData/blockMemberFromPending_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.blockMemberFromPendingPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("block member from event Pending data", response)
    return response.data
})

//reducer
export const blockMemberFromPending_slice = createSlice({
    name: 'blockMemberFromPendingData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(blockMemberFromPending_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(blockMemberFromPending_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(blockMemberFromPending_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default blockMemberFromPending_slice.reducer
