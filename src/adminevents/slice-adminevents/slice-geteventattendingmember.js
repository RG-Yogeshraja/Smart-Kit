import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getEventAttendingMember_APIcall = createAsyncThunk('getEventAttendingMemberData/getEventAttendingMember_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getEventAttendingMemberPath
    const response = await axios.post(apiURL, payload)
    
    console.log("get all event attending members data", response)
    return response.data
})

//reducer
export const getEventAttendingMember_slice = createSlice({
    name: 'getEventAttendingMemberData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEventAttendingMember_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getEventAttendingMember_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getEventAttendingMember_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getEventAttendingMember_slice.reducer
