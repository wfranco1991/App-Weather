import { useState } from "react";

const useHistoricoClima = () => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "c2b51d6c5e9cbb27fd30667c429e7721";

  const apiPronostico = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((pronostico) => {
        setError(null);
        setForecast(pronostico);
        
        console.log(pronostico);
      })
      .catch((error) => {
        setForecast(null);
        setError(error);
      });
  };

  return { forecast, error, apiPronostico };
};
export default useHistoricoClima;
