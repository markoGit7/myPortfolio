import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activePage: 'Home'
};

const pagesSlice = createSlice({
    name: 'pages',

    initialState,

    reducers: {
        openHome(state) {
            state.activePage = 'Home'
        },

        openProjects(state) {
            state.activePage = 'Projects'
        },

        openSkills(state) {
            state.activePage = 'Skills'
        },

        openEducation(state) {
            state.activePage = 'Education'
        },

        openContact(state) {
            state.activePage = 'Contact'
        }
    }
});

export const {
    openHome,
    openProjects,
    openSkills,
    openEducation,
    openContact
} = pagesSlice.actions;

export default pagesSlice.reducer;