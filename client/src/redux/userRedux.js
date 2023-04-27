import { createSlice } from "@reduxjs/toolkit";

const initState = {
    currentUser : null,
    isFetching: false,
    error: false
}

const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        loginStart: (state, action) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { loginSuccess, loginStart, loginFailure } = userSlice.actions;
export default userSlice.reducer;

