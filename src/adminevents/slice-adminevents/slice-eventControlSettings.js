import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call(get event explorer algorithm)
export const getEventExplorerAlgorithmData_APIcall = createAsyncThunk('eventExplorerAlgorithmData/getEventExplorerAlgorithmData_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getEventExplorerAlgorithmPath
    const response = await axios.post(apiURL, payload)
    
    console.log("get event explorer algorithm data", response)
    return response.data
})

// API call(update event explorer algorithm)
export const updateEventExplorerAlgorithmData_APIcall = createAsyncThunk('eventExplorerAlgorithmData/updateEventExplorerAlgorithmData_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.updateEventExplorerAlgorithmPath
    const response = await axios.post(apiURL, payload)
    
    console.log("update event explorer algorithm data", response)
    return response.data
})

//reducer
export const getEventExplorerAlgorithmData_slice = createSlice({
    name: 'eventExplorerAlgorithmData',
    initialState: {
        data: [],
        loading: 'idle',
        updatedata: [],
        updateloading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        //get event explorer algorithm reducer
        builder.addCase(getEventExplorerAlgorithmData_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getEventExplorerAlgorithmData_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getEventExplorerAlgorithmData_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),

        //update event explorer algorithm reducer
        builder.addCase(updateEventExplorerAlgorithmData_APIcall.pending, (state, action) => {
            if (state.updateloading === 'idle') {
                state.updateloading = 'pending'
            }
        })
        builder.addCase(updateEventExplorerAlgorithmData_APIcall.fulfilled, (state, action) => {
            if (state.updateloading === 'pending') {
                state.updatedata = action.payload
                state.updateloading = 'idle'
            }
        })
        builder.addCase(updateEventExplorerAlgorithmData_APIcall.rejected, (state, action) => {
            if (state.updateloading === 'pending') {
                state.updateloading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getEventExplorerAlgorithmData_slice.reducer
