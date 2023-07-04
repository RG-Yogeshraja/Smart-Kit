import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const reject_pendingGroups_APIcall = createAsyncThunk('rejectpendinggroupdata/reject_pendingGroups_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.rejectjoin

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const reject_pendingGroups_groupsSplice = createSlice({
    name: 'rejectpendinggroupdata',
    initialState: {
        rejectpendinggroupvalue: [],
        rejectpendinggroupLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(reject_pendingGroups_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.rejectpendinggroupLoading === 'idle') {
                state.rejectpendinggroupLoading = 'pending'
            }
        })
        builder.addCase(reject_pendingGroups_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.rejectpendinggroupLoading === 'pending') {
                state.rejectpendinggroupvalue = action.payload
                state.rejectpendinggroupLoading = 'idle'
            }
        })
        builder.addCase(reject_pendingGroups_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.rejectpendinggroupLoading === 'pending') {
                state.rejectpendinggroupLoading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default reject_pendingGroups_groupsSplice.reducer
