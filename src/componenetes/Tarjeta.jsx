import useOpenWeather from "../hooks/useOpenWeather";


const Tarjeta = (props) => {
    const { weather } = useOpenWeather();

    const { forecast } =  props;

  const Fecha = forecast?.list[0]?.dt_txt;
  const fechaFormat = new Date (Fecha).toLocaleString();

  const Fecha1 = forecast?.list[8]?.dt_txt;
  const fechaFormat1 = new Date (Fecha1).toLocaleString();

  
  const Fecha2 = forecast?.list[16]?.dt_txt;
  const fechaFormat2 = new Date (Fecha2).toLocaleString();

  
  const Fecha3 = forecast?.list[24]?.dt_txt;
  const fechaFormat3 = new Date (Fecha3).toLocaleString();

  
  const Fecha4 = forecast?.list[32]?.dt_txt;
  const fechaFormat4 = new Date (Fecha4).toLocaleString();


  return (
    <>
        <h3 className="titlePronostico">Pronóstico para los proximos 5 días</h3>
      {forecast && (
        <div className="tarjetas">
          <span className="card">
            <div className="align">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            <p className="fechaPronostico">{fechaFormat}</p>
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[0]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
            <p className="temperaturaPronostico">Temperatura: {forecast?.list[0]?.main?.temp}°C</p>
          </span>
         
          <span className="card">
            <div className="align">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
            <p className="fechaPronostico">{fechaFormat1}</p>
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[8]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
            <p className="temperaturaPronostico">Temperatura: {forecast?.list[8]?.main?.temp}°C</p>
          </span>
          
          <span className="card">
          <div className="align">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
             <p className="fechaPronostico">{fechaFormat2}</p>
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[17]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
            <p className="temperaturaPronostico">Temperatura: {forecast?.list[16]?.main?.temp}°C</p>
          </span>
          
          <span className="card">
          <div className="align">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
             <p className="fechaPronostico">{fechaFormat3}</p>
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[27]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
            <p className="temperaturaPronostico">Temperatura: {forecast?.list[24]?.main?.temp}°C</p>
          </span>
          
          <span className="card">
          <div className="align">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
             <p className="fechaPronostico">{fechaFormat4}</p>
            <img className="imgCard" src={`https://openweathermap.org/img/wn/${forecast?.list[38]?.weather[0]?.icon}@2x.png`} alt='system icon'/>
            <p className="temperaturaPronostico">Temperatura: {forecast?.list[32]?.main?.temp}°C</p>
          </span>
        </div>
      )}
    </>
  )
}

export default Tarjeta