import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getactivemember_APIcall = createAsyncThunk('adminmemberInfo/getactivemember_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.getActivemembers
    const response = await axios.post(apiURL, payload)
    console.log("login user data", response)
    
    return response.data
})

export const admin_members_info_slice = createSlice({
    name: 'adminmemberInfo',
    initialState: {
        addmembers: [],
        addmembersLoading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getactivemember_APIcall.pending, (state) => {
            console.log("getting1", state.addmembersLoading)
            if (state.addmembersLoading === 'idle') {
                state.addmembersLoading = 'pending'
            }
        })
        builder.addCase(getactivemember_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.addmembersLoading)
            if (state.addmembersLoading === 'pending') {
                state.addmembers = action.payload
                state.addmembersLoading = 'idle'
            }
        })
        builder.addCase(getactivemember_APIcall.rejected, (state) => {
            
            console.log("getting3", state.error)
            if (state.addmembersLoading === 'pending') {
                state.addmembersLoading = 'idle'
                state.error = 'Error occured'
            }
        })
        // builder.addCase(clearaddgroupLogin.pending,(state,action)=>{
        //     state.addmembers = []
        // })
    }
})
//reducer


export default admin_members_info_slice.reducer
