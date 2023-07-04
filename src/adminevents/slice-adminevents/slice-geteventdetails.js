import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getEventDetails_APIcall = createAsyncThunk('getEventDetailsData/getEventDetails_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getEventDetailsPath
    const response = await axios.post(apiURL, payload)
    
    console.log("get event details data", response)
    return response.data
})

export const tabSwitchingCall = createAsyncThunk('getEventDetailsData/tabSwitchingCall', async (payload) => {
    return payload
})

export const clearEventDetails = createAsyncThunk('getEventDetailsData/clearEventDetails', async () => {
    
    return {}
})


//reducer
export const getEventDetails_slice = createSlice({
    name: 'getEventDetailsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,

        tabSwitchingdata: {},
        tabSwitchingloading: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEventDetails_APIcall.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getEventDetails_APIcall.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                
                state.data = action.payload
                console.log(state.data)
                state.loading = 'idle'
            }
        })
        builder.addCase(getEventDetails_APIcall.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        }),

        builder.addCase(clearEventDetails.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'idle'
                state.data=[]
            }
        }),
     

            //tab switching reducer
            builder.addCase(tabSwitchingCall.pending, (state, action) => {
                if (state.tabSwitchingloading === 'idle') {
                    state.tabSwitchingloading = 'pending'
                }
            })
        builder.addCase(tabSwitchingCall.fulfilled, (state, action) => {
            if (state.tabSwitchingloading === 'pending') {
                state.tabSwitchingdata = action.payload
                state.tabSwitchingloading = 'idle'
            }
        })
    }
})


export default getEventDetails_slice.reducer
