import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const groupupload_APIcall = createAsyncThunk('groupuploaddetails/groupupload_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.groupimageupload

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const groupsuploadsplice = createSlice({
    name: 'groupuploaddetails',
    initialState: {
        uploadimage: [],
        group_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(groupupload_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.group_loading === 'idle') {
                state.group_loading = 'pending'
            }
        })
        builder.addCase(groupupload_APIcall.fulfilled, (state, action) => {
            
            console.log("getting2", state.loading)
            if (state.group_loading === 'pending') {
                state.uploadimage = action.payload
                state.group_loading = 'idle'
            }
        })
        builder.addCase(groupupload_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.group_loading === 'pending') {
                state.group_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default groupsuploadsplice.reducer
