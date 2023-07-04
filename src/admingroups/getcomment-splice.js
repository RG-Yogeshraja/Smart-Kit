import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const getcommentlist_APIcall = createAsyncThunk('getcommentlistdata/getcommentlist_APIcall', async (payload) => {
    //
    const apiURL = APIConstants.APIbaseURL + APIConstants.getcomments

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const admin_getcomentlist_groupsSplice = createSlice({
    name: 'getcommentlistdata',
    initialState: {
        getcommentlistvalues: [],
        getcommentgrouploading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getcommentlist_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.getcommentgrouploading === 'idle') {
                state.getcommentgrouploading = 'pending'
            }
        })
        builder.addCase(getcommentlist_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.getcommentgrouploading === 'pending') {
                state.getcommentlistvalues = action.payload
                state.getcommentgrouploading = 'idle'
            }
        })
        builder.addCase(getcommentlist_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.getcommentgrouploading === 'pending') {
                state.getcommentgrouploading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default admin_getcomentlist_groupsSplice.reducer
