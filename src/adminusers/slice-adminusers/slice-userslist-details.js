import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getUsersLists_APIcall = createAsyncThunk('getUsersListsData/getUsersLists_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getUsersListsPath
    const response = await axios.post(apiURL, payload)
    console.log("get users lists", response)
    return response.data
})

//reducer
export const get_usersLists_slice = createSlice({
    name: 'getUsersListsData',
    initialState: {
        usersListsData: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersLists_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getUsersLists_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.usersListsData = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getUsersLists_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default get_usersLists_slice.reducer
