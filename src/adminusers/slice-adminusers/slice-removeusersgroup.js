import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const removeUsersGroup_APIcall = createAsyncThunk('removeUsersGroupData/removeUsersGroup_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.removeUsersGroupPath
    
    const response = await axios.post(apiURL, payload)
    //
    
    console.log("remove users group data", response)
    return response.data
})

//reducer
export const removeUsersGroup_slice = createSlice({
    name: 'removeUsersGroupData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeUsersGroup_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(removeUsersGroup_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(removeUsersGroup_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default removeUsersGroup_slice.reducer
