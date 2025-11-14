"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TouristState = {
    places: [
        {
            name: "Золоті ворота",
            description: "Золоті ворота – головні парадні ворота древнього Києва часів Ярослава Мудрого",
            photo: "",
        },
    ],
};

const touristPlaceSlice = createSlice({
    name: "touristPlace",
    initialState,
    reducers: {
        add: (state, touristPlace: PayloadAction<TouristPlace>) => {
            state.places.push(touristPlace.payload);
        },

        deleteByIndex: (state, index: PayloadAction<number>) => {
            state.places.splice(index.payload, 1);
        },
        updateByIndex: (state, action: PayloadAction<{ index: number; touristPlace: TouristPlace }>) => {
            state.places[action.payload.index] = action.payload.touristPlace;
        },
        addPhoto: (state, action: PayloadAction<{ index: number; photo: string }>) => {
            state.places[action.payload.index].photo = action.payload.photo;
        },
    },
});

export const { add, deleteByIndex, updateByIndex, addPhoto } = touristPlaceSlice.actions;
export default touristPlaceSlice.reducer;
