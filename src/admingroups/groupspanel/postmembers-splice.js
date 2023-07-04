import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const postGroups_APIcall = createAsyncThunk('postGroupsdata/postGroups_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getGroupPost
    const response = await axios.post(apiURL, payload)
    console.log("forgot user data", response)
    return response.data
})

//reducer
export const admin_post_groupsSplice = createSlice({
    name: 'postGroupsdata',
    initialState: {
        postGroupsValue: [],
        postGroupsLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.postGroupsLoading === 'idle') {
                state.postGroupsLoading = 'pending'
            }
        })
        builder.addCase(postGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.postGroupsLoading === 'pending') {
                state.postGroupsValue = action.payload
                state.postGroupsLoading = 'idle'
            }
        })
        builder.addCase(postGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.postGroupsLoading === 'pending') {
                state.postGroupsLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_post_groupsSplice.reducer
