"use client";

import TouristPlaceList from "./components/TouristPlaceList";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ListContext } from "./context/ListContext";
import styled from "styled-components";
import TouristPlace from "./components/TouristPlace";
import UpdateForm from "./components/UpdateForm";

const ThemeButton = styled.button`
    cursor: pointer;
    background-color: ${(props) => (props.theme === "light" ? "#8cf392ff" : "#2E7D32")};
    border-radius: 7px;
    padding: 6px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:active {
        transform: scale(0.95);
    }
`;

export default function Home() {
    const [theme, setTheme] = useState("light");

    const listValue = [
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

    const [changeText, setChangeText] = useState(false);

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <ListContext.Provider value={listValue}>
                    <div className={`${theme === "dark" ? "bg-[#1e1e1e] text-white" : ""} flex items-center flex-col h-full`}>
                        <TouristPlaceList />
                        <div>
                            <ThemeButton theme={theme} onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}>
                                {theme}
                            </ThemeButton>
                        </div>

                        <div className="flex justify-center">
                            <TouristPlace
                                placeName={touristPlace.placeName}
                                description={touristPlace.description}
                                countryName={touristPlace.countryName}
                                changeText={changeText}
                                setChangeText={setChangeText}
                            />
                        </div>

                        <UpdateForm setTouristPlace={setTouristPlace}></UpdateForm>
                    </div>
                </ListContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}
