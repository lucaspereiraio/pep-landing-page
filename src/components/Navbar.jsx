import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/pep-oficial-logo.png";
import Weather from "./Weather";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 py-2 text-black">
      <div className="flex items-center">
        <img
          className="h-10 mr-4"
          src={logo}
          alt="Logo do Parque Estadual dos Pireneus"
        />
        <h1 className="text-xl font-bold text-[#025949]">
          Parque Estadual dos Pireneus - PEP
        </h1>
      </div>
      <ul className="hidden md:flex items-center space-x-4">
        <li className="p-4 cursor-pointer hover:text-[#b3d16a] transition-colors duration-200">
          Início
        </li>
        <li className="p-4 cursor-pointer hover:text-[#b3d16a] transition-colors duration-200">
          Sobre
        </li>
        <li className="p-4 cursor-pointer hover:text-[#b3d16a] transition-colors duration-200">
          Esportes
        </li>
        <li className="p-4 cursor-pointer hover:text-[#b3d16a] transition-colors duration-200">
          Contato
        </li>
        <li className="flex px-4 items-center bg-black bg-opacity-10 rounded-sm">
          <Weather />
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
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
        <div className="flex items-center pt-3 pb-1 px-4">
          <img
            className="h-10 mr-4"
            src={logo}
            alt="Logo do Parque Estadual dos Pireneus"
          />
          <h1 className="text-xl font-bold text-[#025949]">
            Parque Estadual dos Pireneus - PEP
          </h1>
        </div>
        <ul className="uppercase space-y-4 px-4 py-2">
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#025949] transition-colors duration-200">
            Início
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#025949] transition-colors duration-200">
            Sobre
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#025949] transition-colors duration-200">
            Esportes
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#025949] transition-colors duration-200">
            Contato
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
