"use client";

import { useState } from "react";

export default function useMap(initialElement: React.ReactNode) {
    const [map, setMap] = useState<React.ReactNode>(initialElement);
    return [map, setMap] as const;
}
