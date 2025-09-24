import React, { useRef } from "react";

interface Props {
    setTouristPlace: React.Dispatch<
        React.SetStateAction<{
            placeName: string;
            countryName: string;
            description: string;
        }>
    >;
}

function UpdateForm({ setTouristPlace }: Props) {
    const placeNameRef = useRef<HTMLInputElement>(null);
    const countryNameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    return (
        <form className="flex flex-col items-center border-1 border-gray-400 rounded-lg shadow-lg p-4 xl:w-1/5 lg:w-1/3 md:w-2/5">
            <input
                className="text-lg border-1 border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                ref={placeNameRef}
                placeholder="Назва туристичного місця"
            ></input>
            <input
                className="text-lg border-1 border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                ref={countryNameRef}
                placeholder="Назва країни"
            ></input>
            <input
                className="text-lg border-1 border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                ref={descriptionRef}
                placeholder="Опис"
            ></input>
            <button
                className="cursor-pointer hover:bg-amber-300 active:scale-95 bg-amber-400 border-1 border-amber-300 rounded-md p-2 mt-3 shadow-sm"
                type="button"
                onClick={() => {
                    setTouristPlace({
                        placeName: placeNameRef.current?.value || "",
                        countryName: countryNameRef.current?.value || "",
                        description: descriptionRef.current?.value || "",
                    });
                }}
            >
                Змінити
            </button>
        </form>
    );
}

export default UpdateForm;
