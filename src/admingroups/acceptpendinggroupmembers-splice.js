import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const accept_pendingGroups_APIcall = createAsyncThunk('acceptpendinggroupdata/accept_pendingGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.acceptjoin

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const accept_pendingGroups_groupsSplice = createSlice({
    name: 'acceptpendinggroupdata',
    initialState: {
        acceptpendinggroupvalue: [],
        acceptpendinggroupLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(accept_pendingGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.acceptpendinggroupLoading === 'idle') {
                state.acceptpendinggroupLoading = 'pending'
            }
        })
        builder.addCase(accept_pendingGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.acceptpendinggroupLoading === 'pending') {
                state.acceptpendinggroupvalue = action.payload
                state.acceptpendinggroupLoading = 'idle'
            }
        })
        builder.addCase(accept_pendingGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.acceptpendinggroupLoading === 'pending') {
                state.acceptpendinggroupLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default accept_pendingGroups_groupsSplice.reducer
