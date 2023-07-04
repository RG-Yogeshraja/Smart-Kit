import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../hsStore/ApiConstants"

// API call
export const getsponsoredpostsettings_APICall = createAsyncThunk('sponsoredpostsettings/getsponsoredpostsettings_APICall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getsponsoredpostsettings
    const response = await axios.post(apiURL, payload)
    console.log("get sponsored post settings", response)
    return response.data
})

export const updatesponsoredpostsettings_APICall = createAsyncThunk('sponsoredpostsettings/updatesponsoredpostsettings_APICall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.updatesponsoredpostsettings
    const response = await axios.post(apiURL, payload)
    console.log("update sponsored post settings", response)
    return response.data
})


//reducer
export const admin_removecomentlist_groupsSplice = createSlice({
    name: 'sponsoredpostsettings',
    initialState: {
        getsponsoredpostdata: [],
        getsponsoredpostloading: 'idle',
        updatesponsoredpostdata: [],
        updatesponsoredpostloading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getsponsoredpostsettings_APICall.pending, (state) => {
            console.log("getting1", state.loading)
            if (state.getsponsoredpostloading === 'idle') {
                state.getsponsoredpostloading = 'pending'
            }
        })
        builder.addCase(getsponsoredpostsettings_APICall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.getsponsoredpostloading === 'pending') {
                state.getsponsoredpostdata = action.payload
                state.getsponsoredpostloading = 'idle'
            }
        })
        builder.addCase(getsponsoredpostsettings_APICall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.getsponsoredpostloading === 'pending') {
                state.getsponsoredpostloading = 'idle'
                state.error = 'Error occured'
            }
        }),
            builder.addCase(updatesponsoredpostsettings_APICall.pending, (state) => {
                console.log("getting1", state.loading)
                if (state.updatesponsoredpostloading === 'idle') {
                    state.updatesponsoredpostloading = 'pending'
                }
            })
        builder.addCase(updatesponsoredpostsettings_APICall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.updatesponsoredpostloading === 'pending') {
                state.updatesponsoredpostdata = action.payload
                state.updatesponsoredpostloading = 'idle'
            }
        })
        builder.addCase(updatesponsoredpostsettings_APICall.rejected, (state) => {
            console.log("getting3", state.loading)
            if (state.updatesponsoredpostloading === 'pending') {
                state.updatesponsoredpostloading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default admin_removecomentlist_groupsSplice.reducer
