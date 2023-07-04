import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

//action
export const updateAdminUser_APIcall = createAsyncThunk('updateAdminUserData/updateAdminUser_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.updateAdminUserAccountPath;
    const response = await axios.post(apiURL, payload)
    
    console.log("updated user data", response)
    return response.data
})

//reducer
export const update_adminUser_slice = createSlice({
    name: 'updateAdminUserData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateAdminUser_APIcall.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(updateAdminUser_APIcall.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(updateAdminUser_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})

export default update_adminUser_slice.reducer
