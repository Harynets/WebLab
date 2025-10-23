import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserInfo() {
    const user = useContext(UserContext);
    return (
        <div>
            <p>Ім'я: {user.name}</p>
            <p>Вік: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserInfo;
