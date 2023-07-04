import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const removeUsersFriend_APIcall = createAsyncThunk('removeUsersFriendData/removeUsersFriend_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.removeUsersFriendPath
    const response = await axios.post(apiURL, payload)
    
    console.log("remove users friend data", response)
    return response.data
})

//reducer
export const removeUsersFriend_slice = createSlice({
    name: 'removeUsersFriendData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeUsersFriend_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(removeUsersFriend_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(removeUsersFriend_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default removeUsersFriend_slice.reducer
