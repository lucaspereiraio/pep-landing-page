import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = "ccdd1cda33b84efab9f144647242706";
  const location = "Goiania,GO"; // Variante de localização

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=pt`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do clima:", error);
      });
  }, [apiKey, location]);

  return (
    <div className="flex items-center text-black">
      {weather ? (
        <>
          <p className="mr-2 font-medium">{weather.location.name}:</p>
          <p className="font-bold">{Math.round(weather.current.temp_c)}°C</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Weather;
