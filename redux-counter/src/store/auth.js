import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAuthenticated:false},
    reducers: {
        login(state){
            state.isAuthenticated = false
        },
        
        logout(state) {
            state.isAuthenticated=true
        }
    }
})

export default authSlice