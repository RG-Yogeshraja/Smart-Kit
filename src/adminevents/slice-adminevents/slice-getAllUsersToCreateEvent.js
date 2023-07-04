import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getAllUsersToCreateEvent_APIcall = createAsyncThunk('getAllUsersToCreateEventData/getAllUsersToCreateEvent_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getMembersToInvitePath
    const response = await axios.post(apiURL, payload)
    //
    console.log("get all users list to invite", response)
    return response.data
})

//reducer
export const getAllUsersToCreateEvent_slice = createSlice({
    name: 'getAllUsersToCreateEventData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsersToCreateEvent_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getAllUsersToCreateEvent_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getAllUsersToCreateEvent_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getAllUsersToCreateEvent_slice.reducer
