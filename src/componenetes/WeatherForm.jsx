import { useEffect, useState } from "react";
import useOpenWeather from "../hooks/useOpenWeather";
import { IoSearchSharp } from "react-icons/io5";
import Pronostico from "./pronostico";
import Maps from "./Maps";
import swal from "sweetalert";


const WeatherForm = () => {
  const [city, setCity] = useState("Medellin");
  const { weather, apiCity, error } = useOpenWeather();
  const fechaActual = new Date(/* weather?.dt*1000 */).toLocaleString();


  const buscar = () => {

    if (city === "") {
      swal({
        title: "Campo vacio",
        text: "Ingresa una Ciudad en la barra de busqueda",
        icon: "warning"
      });
      return false
    }
    apiCity(city)
  }
  useEffect(() => {
    apiCity(city);
  }, []);



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
        <img src="/src/IMG/calido.png" alt="icono clima" className="icono" />
      </header>
      {
        error
          ?
          
          <p className="ciudadMala" ><img src="/src/IMG/error.png" alt="error ciudad" className="errorCity"/>
           Ciudad no encontrada: {city}<p className="ciudadMala2">
            Ingrese una Ciudad valida en la barra de busqueda...
           </p></p>
          :
          <div>
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
                  <section className="clima">
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
                  </section>
                )}
              </section>
              <Maps
                weather={weather}
                latitude={weather?.coord?.lat}
                longitude={weather?.coord?.lon}
              />
              <Pronostico city={city} weather={weather} temperature={"temperature"} />
            </main>
          </div>
      }
    </>
  );
};

export default WeatherForm;
