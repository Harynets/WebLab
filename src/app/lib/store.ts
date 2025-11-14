"use client";
import { configureStore } from "@reduxjs/toolkit";
import touristPlaceReducer from "./features/tourist_place/touristPlaceSlice";

export const store = configureStore({
    reducer: {
        touristPlace: touristPlaceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
