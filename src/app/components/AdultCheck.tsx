import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function AdultCheck() {
    const age = useContext(UserContext).age;
    return <p>Користувач {age >= 18 ? "" : "не"}повнолітній</p>;
}

export default AdultCheck;
