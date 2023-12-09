import { useEffect, useState } from "react";
import useOpenWeather from "../hooks/useOpenWeather";
import { IoSearchSharp } from "react-icons/io5";
import Pronostico from "./pronostico";
import Maps from "./Maps";


const WeatherForm = () => {
  const [city, setCity] = useState("Medellin");
  const { weather, apiCity } = useOpenWeather();

/*   const ciudadVacia = ()=> {
    const cityValue = ref.current.value
    setCity("");
  } */


  const buscar = () => {
    apiCity(city);
    //apiPronostico(city);
  };

  useEffect(() => {
    apiCity(city);
  }, [city]);

  const fechaActual = new Date(/* weather?.dt*1000 */).toLocaleString();

  return (
    <>
      <header className="busqueda">
        <input
          className="inputCity"
          type="text"
          placeholder="Nombre de la Ciudad..."
          onBlur={(e) => {
            setCity(e.target.value);
          }}
        />
        <IoSearchSharp id="lupa" />
        <button className="button" onClick={buscar}></button>

        <h1 className="titulo">App del Clima</h1>
      </header>
      <h2 className="city">El clima en: {city}</h2>
      <main className="contenedor">
        <section className="tiempoActual">
          <h3 id="tAcutal">Tiempo actual</h3>
          <h5 className="fechaYa">{fechaActual}</h5>
          <img
            className="img"
            src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            alt="system icon"
          />
          {weather && (
            <div className="clima">
              <p id="temperatura">{weather.main.temp} °C</p>
              <span className="cardYa">Humedad: {weather.main.humidity}%</span>
              <span className="cardYa">
                Presión Atmosférica: {weather.main.pressure} hPa
              </span>
              <span className="cardYa">
                Sensacion Termica: {weather.main.feels_like} °C
              </span>
              <span className="cardYa">
                Velocidad del Viento: {weather.wind.speed} km/h
              </span>
            </div>
          )}
        </section>
        <Maps
          weather={weather}
          latitude={weather?.coord?.lat}
          longitude={weather?.coord?.lon}
        />
        <Pronostico city={city} weather={weather} temperature={"temperature"} />
      </main>
    </>
  );
};

export default WeatherForm;
