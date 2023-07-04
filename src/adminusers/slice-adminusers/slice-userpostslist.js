import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getUsersPostsList_APIcall = createAsyncThunk('getUsersPostsData/getUsersPostsList_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getUserPostsPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("get users Posts lists", response)
    return response.data
})

//reducer
export const get_usersPostsLists_slice = createSlice({
    name: 'getUsersPostsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersPostsList_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getUsersPostsList_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getUsersPostsList_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default get_usersPostsLists_slice.reducer
