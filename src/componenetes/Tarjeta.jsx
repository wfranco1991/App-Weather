import useOpenWeather from "../hooks/useOpenWeather";
/* import React from 'react';
import moment from 'moment'; */

const Tarjeta = (props) => {
    const { weather } = useOpenWeather();

    const { forecast } =  props;

  const Fecha = forecast?.list[0]?.dt_txt;
  const fechaFormat = new Date (Fecha).toLocaleString();

  const Fecha1 = forecast?.list[8]?.dt_txt;
  const fechaFormat1 = new Date (Fecha1).toLocaleString();

  
  const Fecha2 = forecast?.list[17]?.dt_txt;
  const fechaFormat2 = new Date (Fecha2).toLocaleString();

  
  const Fecha3 = forecast?.list[27]?.dt_txt;
  const fechaFormat3 = new Date (Fecha3).toLocaleString();

  
  const Fecha4 = forecast?.list[38]?.dt_txt;
  const fechaFormat4 = new Date (Fecha4).toLocaleString();
    /* const timestamp = 1701399245;
    const formattedDate = moment.unix(timestamp).format("HH:mm (DD/MM/YYYY)");
 */

  return (
    <>
        <h3 className="titlePronostico">Pronóstico para hoy</h3>
      {forecast && (
        <div className="tarjetas">
          <span className="card">
            <div class="align">
              <span class="red"></span>
              <span class="yellow"></span>
              <span class="green"></span>
            </div>
            Temperatura: {forecast?.list[0]?.main?.temp}°C
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[0]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
            <p>{fechaFormat}</p>
          </span>
         
          <span className="card">
            <div class="align">
                <span class="red"></span>
                <span class="yellow"></span>
                <span class="green"></span>
              </div>
            Temperatura: {forecast?.list[8]?.main?.temp}°C
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[8]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
            <p>{fechaFormat1}</p>
          </span>
          
          <span className="card">
          <div class="align">
              <span class="red"></span>
              <span class="yellow"></span>
              <span class="green"></span>
            </div>
            Temperatura: {forecast?.list[17]?.main?.temp}°C
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[17]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
             <p>{fechaFormat2}</p>
          </span>
          
          <span className="card">
          <div class="align">
              <span class="red"></span>
              <span class="yellow"></span>
              <span class="green"></span>
            </div>
            Temperatura: {forecast?.list[27]?.main?.temp}°C
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[27]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
             <p>{fechaFormat3}</p>
          </span>
          
          <span className="card">
          <div class="align">
              <span class="red"></span>
              <span class="yellow"></span>
              <span class="green"></span>
            </div>
            Temperatura: {forecast?.list[38]?.main?.temp}°C
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[38]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
             <p>{fechaFormat4}</p>
          </span>
        </div>
      )}
    </>
  )
}

export default Tarjeta