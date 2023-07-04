import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getUsersFriendsLists_APIcall = createAsyncThunk('getUsersFriendsListsData/getUsersFriendsLists_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getuserfriendsPath
    const response = await axios.post(apiURL, payload)
    
    console.log("get users friends lists", response)
    return response.data
})

//reducer
export const get_usersFriendsLists_slice = createSlice({
    name: 'getUsersFriendsListsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersFriendsLists_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getUsersFriendsLists_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getUsersFriendsLists_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default get_usersFriendsLists_slice.reducer
