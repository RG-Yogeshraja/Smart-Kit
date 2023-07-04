import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const blockMemberFromAttending_APIcall = createAsyncThunk('blockMemberFromAttendingData/blockMemberFromAttending_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.blockMemberFromAttendingPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("block member from event attending data", response)
    return response.data
})

//reducer
export const blockMemberFromAttending_slice = createSlice({
    name: 'blockMemberFromAttendingData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(blockMemberFromAttending_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(blockMemberFromAttending_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(blockMemberFromAttending_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default blockMemberFromAttending_slice.reducer
