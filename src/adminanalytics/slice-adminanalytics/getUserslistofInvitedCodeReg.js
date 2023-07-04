import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

//action
export const getUsersListofInvitedCodeReg_APIcall = createAsyncThunk('getUsersListofInvitedCodeRegData/getUsersListofInvitedCodeReg_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getUsersListofInvitedCodeRegPath;
    const response = await axios.post(apiURL, payload)
    
    console.log("get users list of invited code registration", response)
    return response.data
})

//reducer
export const getUsersListofInvitedCodeReg_slice = createSlice({
    name: 'getUsersListofInvitedCodeRegData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersListofInvitedCodeReg_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getUsersListofInvitedCodeReg_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getUsersListofInvitedCodeReg_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})

export default getUsersListofInvitedCodeReg_slice.reducer
