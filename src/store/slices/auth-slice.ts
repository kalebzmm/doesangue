import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    email: null,
    accessToken: null,
    name: null,
    birth: null,
    blood_type: null,
    id: null,
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
            state.name = action.payload.name;
            state.birth = action.payload.birth;
            state.blood_type = action.payload.blood_type;
            state.id = action.payload.id;
            state.isLoggedIn = true;
        },
        setSignOut: (state) => {
            state.email = null;
            state.accessToken = null;
            state.name = null;
            state.birth = null;
            state.blood_type = null;
            state.id = null;
            state.isLoggedIn = false;
        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.userAuth.isLoggedIn;

// export const selectUserData = () => authSlice.userAuth;

export default authSlice.reducer;