import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Welcome() {
    const name = useContext(UserContext).name;
    return <div>Вітаю, {name}</div>;
}

export default Welcome;
