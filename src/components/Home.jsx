import React from "react";
import morroDoCabeludo from "../assets/morro-do-cabeludo.jpg";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${morroDoCabeludo})` }}
    >
      {/* <div className="bg-black bg-opacity-50 flex-1"></div> */}
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white">
        <h1 className="text-4xl font-bold">
          Bem-vindo ao Parque Estadual dos Pireneus
        </h1>
        <p className="mt-4 text-lg">
          Um refúgio de biodiversidade e beleza natural no coração de Goiás.
        </p>
        <ul className="mt-6 flex justify-between">
          <li>Sobre</li>
          <li>Esportes</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
