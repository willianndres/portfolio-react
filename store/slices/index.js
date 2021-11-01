import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: false,
    lang: false
};

export const indexSlice = createSlice({
    name: 'initial',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload;
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
        }
    },
});

export const {
    changeLang,
    changeTheme
} = indexSlice.actions;

export const theme = (state) => state.theme;
export const lang = (state) => state.lang;

export default indexSlice.reducer;
