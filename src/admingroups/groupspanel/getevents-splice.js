import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call

export const eventsGroups_APIcall = createAsyncThunk('eventsGroupsdata/eventsGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getGroupEvents
    //
    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_events_groupsSplice = createSlice({
    name: 'eventsGroupsdata',
    initialState: {
        eventsGroupsValue: [],
        eventsGroups_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(eventsGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.eventsGroups_loading === 'idle') {
                state.eventsGroups_loading = 'pending'
            }
        })
        builder.addCase(eventsGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.eventsGroups_loading === 'pending') {
                state.eventsGroupsValue = action.payload
                state.eventsGroups_loading = 'idle'
            }
        })
        builder.addCase(eventsGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.eventsGroups_loading === 'pending') {
                state.eventsGroups_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_events_groupsSplice.reducer
