"use client";

import React, { useState } from "react";

function usePlaces(place: string) {
    const [currentPlace, setCurrentPlace] = useState(place);
    return [currentPlace, setCurrentPlace] as const;
}

export default usePlaces;
