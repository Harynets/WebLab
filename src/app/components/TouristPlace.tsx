"use client";
import React, { useRef } from "react";

interface Props {
    placeName: string;
    countryName: string;
    description: string;
}

function TouristPlace({ placeName, countryName, description }: Props) {
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    function toggleDescription() {
        if (descriptionRef.current) {
            descriptionRef.current.classList.toggle("hidden");
        }
    }

    return (
        <div className="bg-cyan-400 p-2 rounded m-2 shadow-sm">
            <p className="text-lg font-semibold">{placeName}</p>
            <p>Країна: {countryName}</p>
            <button
                className="cursor-pointer hover:bg-amber-300 active:scale-95 border-1 border-amber-300 rounded-md p-2 mt-3 shadow-sm bg-amber-400"
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
