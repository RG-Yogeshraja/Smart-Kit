import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const invitememberbyadmin_APIcall = createAsyncThunk('invite_Groupmemberbyadmin/invitememberbyadmin_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.invite_memberbyadmingroup

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const invite_memberbyadminsplice = createSlice({
    name: 'invite_Groupmemberbyadmin',
    initialState: {
        invite_Groupmemberdetails: [],
        invite_Groupmemberdetails_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(invitememberbyadmin_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.invite_Groupmemberdetails_loading === 'idle') {
                state.invite_Groupmemberdetails_loading = 'pending'
            }
        })
        builder.addCase(invitememberbyadmin_APIcall.fulfilled, (state, action) => {
            
            console.log("getting2", state.loading)
            if (state.invite_Groupmemberdetails_loading === 'pending') {
                state.invite_Groupmemberdetails = action.payload
                state.invite_Groupmemberdetails_loading = 'idle'
            }
        })
        builder.addCase(invitememberbyadmin_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.invite_Groupmemberdetails_loading === 'pending') {
                state.invite_Groupmemberdetails_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default invite_memberbyadminsplice.reducer
