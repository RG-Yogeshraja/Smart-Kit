import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getUsersEventsList_APIcall = createAsyncThunk('getUsersEventsData/getUsersEventsList_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getUserEventsPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("get users events lists", response)
    return response.data
})

//reducer
export const get_usersEventsLists_slice = createSlice({
    name: 'getUsersEventsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersEventsList_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getUsersEventsList_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getUsersEventsList_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default get_usersEventsLists_slice.reducer
