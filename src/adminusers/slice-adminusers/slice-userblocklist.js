import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const GetUsersBlockList_APIcall = createAsyncThunk('getUsersBlockListData/GetUsersBlockList_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getUsersBlockListPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("get users block list data", response)
    return response.data
})

//reducer
export const getUsersBlockList_slice = createSlice({
    name: 'getUsersBlockListData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetUsersBlockList_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(GetUsersBlockList_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(GetUsersBlockList_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getUsersBlockList_slice.reducer
