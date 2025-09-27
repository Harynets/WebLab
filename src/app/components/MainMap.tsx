"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
    map: React.ReactNode;
    setMap: Dispatch<SetStateAction<React.ReactNode>>;
}

export default function MainMap({ map, setMap }: Props) {
    useEffect(() => {
        setMap(
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d64902331.80820586!2d52.252064440770546!3d36.20640259676354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1758911265115!5m2!1suk!2sua"
                width="800"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        );
    }, []);

    return <div>{map}</div>;
}
