import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const deletedGroups_APIcall = createAsyncThunk('deletedgroupsdata/deletedGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getdeletedgroups

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_deleted_groupsSplice = createSlice({
    name: 'deletedgroupsdata',
    initialState: {
        deletedgroupvalue: [],
        deletedGroupsLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deletedGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.deletedGroupsLoading === 'idle') {
                state.deletedGroupsLoading = 'pending'
            }
        })
        builder.addCase(deletedGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.deletedGroupsLoading === 'pending') {
                state.deletedgroupvalue = action.payload
                state.deletedGroupsLoading = 'idle'
            }
        })
        builder.addCase(deletedGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.deletedGroupsLoading === 'pending') {
                state.deletedGroupsLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_deleted_groupsSplice.reducer
