import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call

export const deleteeventsGroups_APIcall = createAsyncThunk('deleteeventsGroupsdata/deleteeventsGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.deleteevents
    //
    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_deleteevents_groupsSplice = createSlice({
    name: 'deleteeventsGroupsdata',
    initialState: {
        deleteeventsGroupsValue: [],
        deleteeventsGroups_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteeventsGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.deleteeventsGroups_loading === 'idle') {
                state.deleteeventsGroups_loading = 'pending'
            }
        })
        builder.addCase(deleteeventsGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.deleteeventsGroups_loading === 'pending') {
                state.deleteeventsGroupsValue = action.payload
                state.deleteeventsGroups_loading = 'idle'
            }
        })
        builder.addCase(deleteeventsGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.deleteeventsGroups_loading === 'pending') {
                state.deleteeventsGroups_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_deleteevents_groupsSplice.reducer
