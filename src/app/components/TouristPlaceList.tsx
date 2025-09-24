import React from "react";
import TouristPlace from "./TouristPlace";

interface Props {
    touristPlaces: { placeName: string; countryName: string; description: string }[];
}

function TouristPlaceList({ touristPlaces }: Props) {
    return (
        <div className=" rounded-lg m-1 w-1/4">
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
