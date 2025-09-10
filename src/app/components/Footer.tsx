import React from "react";

function Footer() {
    return (
        <footer className="bg-[#f8f9fa] p-1.5">
            <div className="flex items-center justify-center">
                <div className="flex flex-col my-4 mx-6">
                    <p className="font-bold">Автор:</p>
                    <p>Гаринець Антон Анатолійович</p>
                    <p>308 група, 6 варіант</p>
                </div>
                <div className="flex flex-col my-4 mx-6">
                    <p className="font-bold">Контактна інформація:</p>
                    <p>Телефон: +380668360364</p>
                    <p>Email: super.email@gmail.com</p>
                </div>
                <div className="flex flex-col"></div>
            </div>
            <div className="flex justify-center">
                <p className="font-bold">&copy; Всі права захищені</p>
            </div>
        </footer>
    );
}

export default Footer;
