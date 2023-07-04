import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getUsersGroupsList_APIcall = createAsyncThunk('getUsersGroupsData/getUsersGroupsList_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getUserGroupsPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("get users groups lists", response)
    return response.data
})

//reducer
export const get_usersGroupsLists_slice = createSlice({
    name: 'getUsersGroupsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersGroupsList_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getUsersGroupsList_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getUsersGroupsList_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default get_usersGroupsLists_slice.reducer
