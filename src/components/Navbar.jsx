import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
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
      <ul className="flex hidden">
        <li className="p-4">Início</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Esportes</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} color="#005A50" />
      </div>
      <div className="fixed left-0 top-0 w-[60%] h-full border-r bg-[#86BF00] border-r-gray-900">
        <h1 className="w-full p-4 text-xl font-bold text-[#005A50]">
          Parque Estadual dos Pirineus - PEP
        </h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600">Início</li>
          <li className="p-4 border-b border-gray-600">Sobre</li>
          <li className="p-4 border-b border-gray-600">Esportes</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
