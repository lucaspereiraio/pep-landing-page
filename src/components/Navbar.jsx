import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      {/* <img
        className="w-1"
        src="././assets/pep-logo.jpeg"
        alt="Logo do Parque Estadual dos Pireneus"
      /> */}
      <h1 className="w-full text-xl font-bold text-[#005A50]">
        Parque Estadual dos Pireneus - PEP
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Início</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Esportes</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose size={20} color="#005A50" />
        ) : (
          <AiOutlineMenu size={20} color="#005A50" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r bg-[#86BF00] border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full p-4 text-xl font-bold text-[#005A50]">
          Parque Estadual dos Pirineus - PEP
        </h1>
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
