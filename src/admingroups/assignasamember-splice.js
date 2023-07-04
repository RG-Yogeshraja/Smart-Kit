import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const assignasaadmins_APIcall = createAsyncThunk('assignasaadmingroupsdata/assignasaadmins_APIcall', async (payload) => {
    
    const apiURL = APIConstants.APIbaseURL + APIConstants.assignasamember

    const response = await axios.post(apiURL, payload)
    
    console.log("forgot user data", response)
    return response.data
})
//reducer
export const adminasamember_groupSplice = createSlice({
    name: 'assignasaadmingroupsdata',
    initialState: {
        assigngroupmembervalue: [],
        assigngrouploading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(assignasaadmins_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.assigngrouploading === 'idle') {
                state.assigngrouploading = 'pending'
            }
        })
        builder.addCase(assignasaadmins_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.assigngrouploading === 'pending') {
                state.assigngroupmembervalue = action.payload
                state.assigngrouploading = 'idle'
            }
        })
        builder.addCase(assignasaadmins_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.assigngrouploading === 'pending') {
                state.assigngrouploading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default adminasamember_groupSplice.reducer
