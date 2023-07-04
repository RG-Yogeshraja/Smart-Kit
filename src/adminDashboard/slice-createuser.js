import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

//action
export const createAdminUser_APIcall = createAsyncThunk('createAdminUserData/createAdminUser_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.createAdminUserAccountPath;
    const response = await axios.post(apiURL, payload)
    
    return response.data
})

export const clearRegisterData = createAsyncThunk('user_register_store/clearRegisterData', async (payload) => {
    return {};
  })

//reducer
export const create_adminUser_slice = createSlice({
    name: 'createAdminUserData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAdminUser_APIcall.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(createAdminUser_APIcall.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(createAdminUser_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })

        builder.addCase(clearRegisterData.pending, (state, action) => {
            if (state.loading === 'idle') { 
              state.loading = 'idle';
              state.data = []
            }
          })
    }
})

export default create_adminUser_slice.reducer
