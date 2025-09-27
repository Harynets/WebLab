"use client";
import React, { useState, useEffect } from "react";
import ChosePlace from "./components/ChosePlace";
import usePlaces from "./hooks/usePlaces";
import useMap from "./hooks/useMap";
import MainMap from "./components/MainMap";

export default function Home() {
    const [map, setMap] = useMap(<div>Карта завантажується...</div>);

    const [places, setPlaces] = useState<string[]>([]);
    const [currentPlace, setCurrentPlace] = usePlaces("");

    useEffect(() => {
        setPlaces(["Київ", "Миколаїв", "Львів"]);
    }, []);

    useEffect(() => {
        if (currentPlace) {
            if (currentPlace === "Миколаїв") {
                setMap(
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53608.19604780603!2d32.02783002635671!3d46.96255471039648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1758913156144!5m2!1suk!2sua"
                        width="800"
                        height="600"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                );
            }
            if (currentPlace === "Київ") {
                setMap(
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d122438.29025109713!2d30.52741074286496!3d50.4529094600173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1758913206964!5m2!1suk!2sua"
                        width="800"
                        height="600"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                );
            }
            if (currentPlace === "Львів") {
                setMap(
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45133.84847280888!2d24.032788230576767!3d49.83759149694948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1758913236124!5m2!1suk!2sua"
                        width="800"
                        height="600"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                );
            }
        }
    }, [currentPlace]);

    return (
        <>
            <ChosePlace places={places} setPlace={setCurrentPlace} currentPlace={currentPlace} />
            <MainMap map={map} setMap={setMap} />
        </>
    );
}
