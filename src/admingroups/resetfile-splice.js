import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const defaultimage_APICall = createAsyncThunk('defaultimageget/defaultimage_APICall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.default_image
    const response = await axios.post(apiURL, payload)
    
    console.log("reset- default event banner image", response)
    return response.data
})

//reducer
export const resetdefaultimagesplice = createSlice({
    name: 'defaultimageget',
    initialState: {
        defaultgroup: [],
        defaultgroup_loading: 'idle',
        defaulterror: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(defaultimage_APICall.pending, (state) => {
            console.log("getting1", state.defaultgroup_loading)
            if (state.defaultgroup_loading === 'idle') {
                state.defaultgroup_loading = 'pending'
            }
        })
        builder.addCase(defaultimage_APICall.fulfilled, (state, action) => {
            console.log("getting2", state.defaultgroup_loading)
            if (state.defaultgroup_loading === 'pending') {
                state.defaultgroup = action.payload
                state.defaultgroup_loading = 'idle'
            }
        })
        builder.addCase(defaultimage_APICall.rejected, (state) => {
            console.log("getting3", state.defaultgroup_loading)
            if (state.defaultgroup_loading === 'pending') {
                state.defaultgroup_loading = 'idle'
                state.defaulterror = 'Error occured'
            }
        })
        // builder.addCase(clearaddgroupLogin.pending,(state,action)=>{
        //     state.addgroup = []
        // })
    }
})
//reducer


export default resetdefaultimagesplice.reducer
