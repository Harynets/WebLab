import React from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../lib/features/tourist_place/touristPlaceSlice";

function AddPhotoButton({ index, photo }: AddPhotoButtonProps) {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => {
                dispatch(addPhoto({ index: index, photo: photo }));
            }}
        >
            Додати фото
        </button>
    );
}

export default AddPhotoButton;
