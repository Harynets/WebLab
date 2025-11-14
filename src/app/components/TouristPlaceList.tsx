import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import TouristPlace from "./TouristPlace";

function TouristPlaceList() {
    const places = useSelector((state: RootState) => state.touristPlace.places);
    return (
        <>
            {places.map((place, index) => {
                return (
                    <TouristPlace
                        key={index}
                        name={place.name}
                        description={place.description}
                        photo={place.photo}
                        index={index}
                    />
                );
            })}
        </>
    );
}

export default TouristPlaceList;
