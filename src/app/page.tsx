"use client";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import TouristPlaceList from "./components/TouristPlaceList";
import TouristPlaceForm from "./components/TouristPlaceForm";
import AddPhotoButton from "./components/AddPhotoButton";

export default function Home() {
    return (
        <Provider store={store}>
            <div className="flex flex-col items-center">
                <TouristPlaceList />
                <TouristPlaceForm />
                <AddPhotoButton
                    index={0}
                    photo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Golden_Gate_Kiev_2018_G1.jpg/1280px-Golden_Gate_Kiev_2018_G1.jpg"
                />
            </div>
        </Provider>
    );
}
