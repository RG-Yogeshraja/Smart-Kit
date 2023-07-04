import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getIndivudual_APIcall = createAsyncThunk('getIndivudualGroupdata/getIndivudual_APIcall', async (payload) => {

    const apiURL = APIConstants.APIbaseURL + APIConstants.getIndivudualGroups
    
    const response = await axios.post(apiURL, payload)

    console.log("get group details datasss", response)
    return response.data
})
//reducer
export const getIndivudual_splice = createSlice({
    name: 'getIndivudualGroupdata',
    initialState: {
        getIndivudualGroupsValue: [],
        getIndivudualGroups_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getIndivudual_APIcall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.getIndivudualGroups_loading === 'idle') {
                state.getIndivudualGroups_loading = 'pending'
            }
        })
        builder.addCase(getIndivudual_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.getIndivudualGroups_loading === 'pending') {
                state.getIndivudualGroupsValue = action.payload
                state.getIndivudualGroups_loading = 'idle'
            }
        })
        builder.addCase(getIndivudual_APIcall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.getIndivudualGroups_loading === 'pending') {
                state.getIndivudualGroups_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})
//reducer


export default getIndivudual_splice.reducer
