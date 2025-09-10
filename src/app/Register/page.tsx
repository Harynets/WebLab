import React from "react";

function Register() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <form className="flex flex-col items-center border-1 border-gray-400 rounded-lg shadow-lg p-4 xl:w-1/5 lg:w-1/3 md:w-2/5">
                <p className="text-3xl font-medium mb-2">Реєстрація</p>
                <input
                    className="text-lg border-1 border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                    placeholder="Ім'я:"
                    type="text"
                ></input>
                <input
                    className="text-lg border-1 border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                    placeholder="Прізвище:"
                    type="text"
                ></input>
                <input
                    className="text-lg border-1 border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                    placeholder="Email:"
                    type="email"
                ></input>
                <input
                    className="text-lg border-1 border-gray-400 rounded-md p-2 m-2 shadow-sm w-full"
                    placeholder="Пароль:"
                    type="password"
                ></input>
                <input
                    className="cursor-pointer hover:bg-[#60deb4] active:scale-95 bg-[#3ed9a5] border-1 border-gray-300 rounded-md p-2 mt-3 shadow-sm"
                    type="submit"
                    value={"Зареєструватися"}
                ></input>
            </form>
        </div>
    );
}

export default Register;
