import { useState } from "react";

const useOpenWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);


  /* const apiKey = "c2b51d6c5e9cbb27fd30667c429e7721"; */
  const apiKey = import.meta.env.VITE_API_KEY

  const apiCity = (city) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then(response => response.json())
      .then(datos => {
        if (datos.cod === '404') {
          setError(datos.message)
          console.log(error)
          return false
        }
        setError(null);
        setWeather(datos);

        console.log(datos);
      })
      .catch((error) => {
        /* setWeather(null); */
        setError(error);
      });
  };



  return { weather, error, apiCity };
};
export default useOpenWeather;
