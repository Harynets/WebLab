import React, { useContext } from "react";
import TouristPlace from "./TouristPlace";
import { ListContext } from "../context/ListContext";

function TouristPlaceList() {
    const touristPlaces = useContext(ListContext);
    return (
        <div className="rounded-lg m-1 w-1/4">
            {touristPlaces.map((elem, index) => {
                return (
                    <TouristPlace
                        placeName={elem.placeName}
                        description={elem.description}
                        countryName={elem.countryName}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default TouristPlaceList;
