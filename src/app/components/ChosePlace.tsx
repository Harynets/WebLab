import React, { Dispatch, SetStateAction } from "react";

interface Props {
    places: string[];
    setPlace: Dispatch<SetStateAction<string>>;
    currentPlace: string;
}

function ChosePlace({ places, setPlace, currentPlace }: Props) {
    return (
        <>
            <p>Оберіть місто:</p>
            {places.map((place) => (
                <div key={place}>
                    <input
                        type="radio"
                        id={place}
                        name="city"
                        checked={currentPlace === place}
                        onChange={() => setPlace(place)}
                    />
                    <label htmlFor={place}>{place}</label>
                </div>
            ))}
        </>
    );
}

export default ChosePlace;
