"use client";
import React, { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TouristPlaceProps } from "../types/TouristPlaceProps";

function TouristPlace({ placeName, countryName, description }: TouristPlaceProps) {
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    function toggleDescription() {
        if (descriptionRef.current) {
            descriptionRef.current.classList.toggle("hidden");
        }
    }

    let theme = useContext(ThemeContext);

    return (
        <div className={`${theme === "light" ? "bg-cyan-400" : "bg-[#1B3B52] text-white"} p-2 rounded m-2 shadow-sm`}>
            <p className="text-lg font-semibold">{placeName}</p>
            <p>Країна: {countryName}</p>
            <button
                className={`${
                    theme === "light" ? "bg-amber-400" : "bg-[#FF7F50]"
                } cursor-pointer hover:bg-amber-300 active:scale-95 rounded-md p-2 mt-3 shadow-sm`}
                onClick={toggleDescription}
            >
                Деталі
            </button>
            <p className="hidden text-center" ref={descriptionRef}>
                {description}
            </p>
        </div>
    );
}

export default TouristPlace;
