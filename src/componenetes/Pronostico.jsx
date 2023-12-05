import useHistoricoClima from "../hooks/useHistoricoClima";
import { useEffect } from "react";
import Tarjeta from "./tarjeta";

const Pronostico = (props) => {
  const { forecast, apiPronostico } = useHistoricoClima();

  const { city, weather, temperature } = props;

  useEffect(() => {
    if (city) {
      apiPronostico(city);
    }
  },[weather]);

  return (
    <>
      <Tarjeta
        forecast={forecast}
      />
    </>
  );
};

export default Pronostico;
