import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const RemovepostGroups_APIcall = createAsyncThunk('removepostGroupsdata/RemovepostGroups_APIcall', async (payload) => {
    //
    const apiURL = APIConstants.APIbaseURL + APIConstants.removepost

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_removepost_groupsSplice = createSlice({
    name: 'removepostGroupsdata',
    initialState: {
        removepostGroupsValue: [],
        removepostGroupsLoding: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(RemovepostGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.removepostGroupsLoding === 'idle') {
                state.removepostGroupsLoding = 'pending'
            }
        })
        builder.addCase(RemovepostGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.removepostGroupsLoding === 'pending') {
                state.removepostGroupsValue = action.payload
                state.removepostGroupsLoding = 'idle'
            }
        })
        builder.addCase(RemovepostGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.removepostGroupsLoding === 'pending') {
                state.removepostGroupsLoding = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_removepost_groupsSplice.reducer
