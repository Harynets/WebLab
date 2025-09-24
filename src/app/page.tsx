"use client";
import TouristPlace from "./components/TouristPlace";
import TouristPlaceList from "./components/TouristPlaceList";
import { useState } from "react";
import UpdateForm from "./components/UpdateForm";

export default function Home() {
    const touristPlaces = [
        {
            placeName: "Колізей",
            countryName: "Італія",
            description: "Одне з 7 Нових чудес світу, античний амфітеатр, велич у “Вічному місті”.",
        },
        { placeName: "Ейфелева Вежа", countryName: "Франція", description: "Унікальна споруда, символ міста закоханих." },
    ];

    const [touristPlace, setTouristPlace] = useState({
        placeName: "test",
        countryName: "test",
        description: "test",
    });

    return (
        <div>
            <div className="flex justify-center">
                <TouristPlaceList touristPlaces={touristPlaces} />
            </div>
            <div className="flex justify-center">
                <TouristPlace
                    placeName={touristPlace.placeName}
                    description={touristPlace.description}
                    countryName={touristPlace.countryName}
                />
            </div>
            <div className="flex justify-center">
                <UpdateForm setTouristPlace={setTouristPlace}></UpdateForm>
            </div>
        </div>
    );
}
