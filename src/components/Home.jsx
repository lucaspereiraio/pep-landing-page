import React from "react";
import morroDoCabeludo from "../assets/morro-do-cabeludo.jpg";

function Home() {
  return (
    <div
      className="flex items-center justify-center max-w-[1240px] w-full h-screen mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${morroDoCabeludo})` }}
    >
      {/* <div className="bg-black bg-opacity-50 flex-1"></div> */}
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-white text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Bem-vindo ao Parque Estadual dos Pireneus
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Um refúgio de biodiversidade e beleza natural no coração de Goiás.
        </p>
        <ul className="mt-6 flex space-x-6 justify-center font-bold text-lg">
          <li className="hover:text-[#b3d16a] cursor-pointer transition-colors duration-200">
            Sobre
          </li>
          <li className="hover:text-[#b3d16a] cursor-pointer transition-colors duration-200">
            Esportes
          </li>
          <li className="hover:text-[#b3d16a] cursor-pointer transition-colors duration-200">
            Contato
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
