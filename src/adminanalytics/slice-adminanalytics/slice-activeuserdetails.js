import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getActiveUsersList_APIcall = createAsyncThunk('getActiveUsersListData/getActiveUsersList_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getActiveUsersListPath
    const response = await axios.post(apiURL, payload)
    
    console.log("get Active users list data", response)
    return response.data
})

//reducer
export const getActiveUsersList_slice = createSlice({
    name: 'getActiveUsersListData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getActiveUsersList_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getActiveUsersList_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getActiveUsersList_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getActiveUsersList_slice.reducer
