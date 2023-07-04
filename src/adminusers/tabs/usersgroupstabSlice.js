import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const usersGroups_APIcall = createAsyncThunk('usersGroupsdata/usersGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getusergroupsPath

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user_group data", response)
    return response.data
})
//reducer
export const admin_user_groupsSlice = createSlice({
    name: 'usersGroupsdata',
    initialState: {
        userGroupsValue: [],
        userGroupsLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(usersGroups_APIcall.pending, (state) => {
            console.log("getting1 usergroup", state.loading)
            if (state.activeGroupsLoading === 'idle') {
                state.activeGroupsLoading = 'pending'
            }
        })
        builder.addCase(usersGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2 usergroup", state.loading)
            if (state.activeGroupsLoading === 'pending') {
                state.activeGroupsValue = action.payload
                state.activeGroupsLoading = 'idle'
            }
        })
        builder.addCase(usersGroups_APIcall.rejected, (state) => {
            console.log("getting3 usergroup", state.loading)
            if (state.activeGroupsLoading === 'pending') {
                state.activeGroupsLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_user_groupsSlice.reducer
