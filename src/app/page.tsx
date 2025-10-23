"use client";

import TouristPlaceList from "./components/TouristPlaceList";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Welcome from "./components/Welcome";
import UserInfo from "./components/UserInfo";
import AdultCheck from "./components/AdultCheck";
import { UserContext } from "./context/UserContext";
import { ListContext } from "./context/ListContext";

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

    const userValue = { name: "Пес Патрон", age: 6, email: "pesPatron@gmail.com" };

    return (
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={userValue}>
                <ListContext.Provider value={listValue}>
                    <div>
                        <div className="flex items-center flex-col">
                            <TouristPlaceList />
                            <div>
                                <button
                                    className="cursor-pointer hover:bg-green-300 active:scale-95 rounded-md p-2 mt-3 shadow-sm bg-green-400"
                                    onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
                                >
                                    {theme}
                                </button>
                                <Welcome />
                                <UserInfo />
                                <AdultCheck />
                            </div>
                        </div>
                    </div>
                </ListContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}
