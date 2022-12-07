import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-community/async-storage'

interface UserData {
    isLoggedIn: boolean;
    id: string;
    email: string;
    accessToken: string;
    name: string;
    birth: string;
    blood_type: string;
}

const initialState: UserData = {
    isLoggedIn: false,
    email: '',
    accessToken: '',
    name: '',
    birth: '',
    blood_type: '',
    id: '',
}

const userSlice = createSlice({
    name: 'userData',
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
            AsyncStorage.setItem(
                '@DoeSangue:token',
                action.payload.accessToken
            );
        },
        setUserData: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.birth = action.payload.birth;
            state.blood_type = action.payload.blood_type;
            state.id = action.payload.id;
            state.accessToken = action.payload.accessToken;
            state.isLoggedIn = true;
        },
        setSignOut: (state) => {
            state.email = '';
            state.accessToken = '';
            state.name = '';
            state.birth = '';
            state.blood_type = '';
            state.id = '';
            state.isLoggedIn = false;
            AsyncStorage.setItem(
                '@DoeSangue:token',
                ''
            );
        },
    }
});

export const { setSignIn, setSignOut, setUserData } = userSlice.actions;

export const selectUserData = (state: any): UserData => state.userData;
export const selectIsLoggedIn = (state: any): boolean => state.userData.isLoggedIn;

export default userSlice.reducer;