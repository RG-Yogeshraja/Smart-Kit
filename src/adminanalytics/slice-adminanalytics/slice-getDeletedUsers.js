import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getDeletedUsersList_APIcall = createAsyncThunk('getDeletedUsersListData/getDeletedUsersList_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getDeletedUsersListPath
    const response = await axios.post(apiURL, payload)
    console.log("get Deleted users list data", response)
    return response.data
})

//reducer
export const getDeletedUsersList_slice = createSlice({
    name: 'getDeletedUsersListData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDeletedUsersList_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getDeletedUsersList_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getDeletedUsersList_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getDeletedUsersList_slice.reducer
