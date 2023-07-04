import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const removecommentlist_APIcall = createAsyncThunk('removecommentlistdata/removecommentlist_APIcall', async (payload) => {
    //
    const apiURL = APIConstants.APIbaseURL + APIConstants.removecomment

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_removecomentlist_groupsSplice = createSlice({
    name: 'removecommentlistdata',
    initialState: {
        removecommentvalues: [],
        removecommentloading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removecommentlist_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.removecommentloading === 'idle') {
                state.removecommentloading = 'pending'
            }
        })
        builder.addCase(removecommentlist_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.removecommentloading === 'pending') {
                state.removecommentvalues = action.payload
                state.removecommentloading = 'idle'
            }
        })
        builder.addCase(removecommentlist_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.removecommentloading === 'pending') {
                state.removecommentloading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_removecomentlist_groupsSplice.reducer
