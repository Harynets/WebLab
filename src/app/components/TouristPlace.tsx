import React from "react";
import { useDispatch } from "react-redux";
import { deleteByIndex } from "../lib/features/tourist_place/touristPlaceSlice";

function TouristPlace({ name, description, photo, index }: TouristPlaceProps) {
    const dispatch = useDispatch();

    return (
        <div className="border rounded-lg p-5 my-0.5 flex">
            {photo && <img className="h-25" src={photo || "#"} alt="Tourist place photo" />}
            <div className="mx-5">
                <p>Індекс: {index}</p>
                <p>Назва: {name}</p>
                <p>Опис: {description}</p>
            </div>
            <div>
                <button
                    className="cursor-pointer hover:bg-red-400 active:scale-95 bg-red-500 rounded-md p-2 shadow-sm"
                    onClick={() => {
                        dispatch(deleteByIndex(index));
                    }}
                >
                    Видалити
                </button>
            </div>
        </div>
    );
}

export default TouristPlace;
