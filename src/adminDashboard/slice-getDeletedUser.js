import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

//action
export const getDeletedUserAccount_APIcall = createAsyncThunk('getDeletedUserAccountData/getDeletedUserAccount_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getDeletedUserAccountPath;
    const response = await axios.post(apiURL, payload)
    console.log("get deleted user account list", response)
    return response.data
})

//reducer
export const get_deletedUserAccount_slice = createSlice({
    name: 'getDeletedUserAccountData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDeletedUserAccount_APIcall.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getDeletedUserAccount_APIcall.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getDeletedUserAccount_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})

export default get_deletedUserAccount_slice.reducer
