import { createContext } from "react";

export const ListContext = createContext([
    {
        placeName: "Колізей",
        countryName: "Італія",
        description: "Одне з 7 Нових чудес світу, античний амфітеатр, велич у “Вічному місті”.",
    },
    { placeName: "Ейфелева Вежа", countryName: "Франція", description: "Унікальна споруда, символ міста закоханих." },
]);
