import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as APIConstants from "../../../../hsStore/ApiConstants";

//action
export const getAdminProfile_APIcall = createAsyncThunk('adminProfileData/getAdminProfile_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getAdminProfilePath;
    const response = await axios.post(apiURL, payload)
    console.log("get admin profile response data", response)
    return response.data
})

//reducer
export const get_admin_slice = createSlice({
    name: 'adminProfileData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAdminProfile_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getAdminProfile_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getAdminProfile_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})

export default get_admin_slice.reducer
