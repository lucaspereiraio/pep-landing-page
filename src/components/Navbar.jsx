import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/pep-oficial-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-12 max-w-[1240px] mx-auto px-4 py-2 text-black">
      <img
        className="size-10 mr-4"
        src={logo}
        alt="Logo do Parque Estadual dos Pireneus"
      />
      <h1 className="w-full text-xl font-bold text-[#025949]">
        Parque Estadual dos Pireneus - PEP
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Início</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Esportes</li>
        <li className="p-4">Contato</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color="#025949" />
        ) : (
          <AiOutlineMenu size={20} color="#025949" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r bg-[#b3d16a] border-r-gray-900 ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center py-1 px-4">
          <img
            className="size-10 mr-4"
            src={logo}
            alt="Logo do Parque Estadual dos Pireneus"
          />
          <h1 className="w-full text-xl font-bold text-[#025949]">
            Parque Estadual dos Pireneus - PEP
          </h1>
        </div>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600">Início</li>
          <li className="p-4 border-b border-gray-600">Sobre</li>
          <li className="p-4 border-b border-gray-600">Esportes</li>
          <li className="p-4 border-b border-gray-600">Contato</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
