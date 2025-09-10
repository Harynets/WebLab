import Link from "next/link";
import React from "react";

function Header() {
    return (
        <div className="p-1 flex justify-end items-center bg-[#f8f9fa]">
            <div className="flex social-media mx-4">
                <img className="h-10 mx-1" src="/facebook.svg" alt="facebook"></img>
                <img className="h-10 mx-1" src="/instagram.svg" alt="instagram"></img>
                <img className="h-10 mx-1" src="/youtube.svg" alt="youtube"></img>
            </div>
            <Link
                className="cursor-pointer hover:bg-[#60deb4] active:scale-95 bg-[#3ed9a5] border-1 border-gray-300 rounded-md px-2 py-1.5"
                href="/Auth"
            >
                Вхід
            </Link>
            <Link
                className="cursor-pointer hover:bg-[#60deb4] active:scale-95 bg-[#3ed9a5] border-1 border-gray-300 rounded-md px-2 py-1.5 m-2"
                href="/Register"
            >
                Реєстрація
            </Link>
        </div>
    );
}

export default Header;
