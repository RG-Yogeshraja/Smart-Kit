import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getAllActiveEvents_APIcall = createAsyncThunk('getAllActiveEventsData/getAllActiveEvents_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getAllActiveEventsPath
    const response = await axios.post(apiURL, payload)

    console.log("get all active events data", response)
    return response.data
})

export const clearActiveEventsData = createAsyncThunk('getAllActiveEventsData/clearActiveEventsData', async () => {
    return {}
})

//reducer
export const getAllActiveEvents_slice = createSlice({
    name: 'getAllActiveEventsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllActiveEvents_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getAllActiveEvents_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getAllActiveEvents_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),
        builder.addCase(clearActiveEventsData.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'idle';
                    state.data = []
                }
            })
    }
})


export default getAllActiveEvents_slice.reducer
