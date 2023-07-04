import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

//action
export const restoreDeletedUserAccount_APIcall = createAsyncThunk('restoreUserAccountData/restoreDeletedUserAccount_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.restoreDeletedUserAccountPath;
    const response = await axios.post(apiURL, payload)
    console.log("restore deleted user accoun", response)
    return response.data
})

//reducer
export const restore_deletedUserAccount_slice = createSlice({
    name: 'restoreUserAccountData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(restoreDeletedUserAccount_APIcall.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(restoreDeletedUserAccount_APIcall.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(restoreDeletedUserAccount_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})

export default restore_deletedUserAccount_slice.reducer
