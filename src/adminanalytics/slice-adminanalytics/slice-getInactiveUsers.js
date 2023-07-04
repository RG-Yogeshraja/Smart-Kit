import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getInactiveUsersList_APIcall = createAsyncThunk('getInactiveUsersListData/getInactiveUsersList_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getInactiveUsersListPath
    const response = await axios.post(apiURL, payload)
    
    console.log("get inactive users list data", response)
    return response.data
})

//reducer
export const getInactiveUsersList_slice = createSlice({
    name: 'getInactiveUsersListData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInactiveUsersList_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getInactiveUsersList_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getInactiveUsersList_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getInactiveUsersList_slice.reducer
