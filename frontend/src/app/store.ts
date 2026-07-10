import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from '../features/display/pagesSlice';

export const store = configureStore({
    reducer: {
        pages: pagesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;