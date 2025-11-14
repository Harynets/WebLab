"use client";
import React, { useRef } from "react";
import { add, updateByIndex } from "../lib/features/tourist_place/touristPlaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";

function TouristPlaceForm() {
    const dispatch = useDispatch();
    const places = useSelector((state: RootState) => state.touristPlace.places);

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            className="flex flex-col items-center border border-gray-400 rounded-lg shadow-lg mt-5 p-4 xl:w-1/4 lg:w-1/3 md:w-1/2"
            ref={formRef}
        >
            <input
                className="text-lg border border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                type="text"
                name="name"
                placeholder="Назва"
            />
            <input
                className="text-lg border border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                type="text"
                name="description"
                placeholder="Опис"
            />
            <input
                className="text-lg border border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                type="text"
                name="photo"
                placeholder="Фото"
            />
            <select className="border rounded-md" defaultValue="default" name="action">
                <option value="default" disabled>
                    Оберіть дію
                </option>
                <option value="add">Додати туристичне місце</option>
                {places.map((place, index) => {
                    return (
                        <option value={index} key={index}>
                            Оновити запис з назвою "{place.name}"
                        </option>
                    );
                })}
            </select>
            <button
                className="cursor-pointer hover:bg-amber-300 active:scale-95 bg-amber-400 border border-amber-300 rounded-md p-2 mt-3 shadow-sm"
                type="button"
                onClick={() => {
                    if (formRef.current) {
                        const formData = new FormData(formRef.current);

                        const newPlace = {
                            name: formData.get("name") as string,
                            description: formData.get("description") as string,
                            photo: formData.get("photo") as string,
                        };

                        if (formData.get("action") === "add") {
                            dispatch(add(newPlace));
                        } else if (formData.get("action")) {
                            dispatch(
                                updateByIndex({
                                    index: Number(formData.get("action")),
                                    touristPlace: newPlace,
                                })
                            );
                        }
                        formRef.current.reset();
                    }
                }}
            >
                Застосувати
            </button>
        </form>
    );
}

export default TouristPlaceForm;
