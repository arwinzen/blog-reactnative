import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { 
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: initialUserState,
        registeredUsers: [],
    },
    reducers: {
        register: (state, action) => {
            state.registeredUsers = [...state.registeredUsers, action.payload]
        },
        login: (state, action) => {
            state.currentUser = action.payload 
        },
        logout: (state) => {
            state.currentUser = initialUserState
        }
    }
})

// export actions
export const { register, login, logout } = userSlice.actions;

// export const selectUser = (state) => state.currentUser;
// export const registeredUsers = (state) => state.registeredUsers;

export default userSlice.reducer;