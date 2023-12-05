import { Map, Marker } from "pigeon-maps";

const Maps = (props) => {
  const { longitude, latitude, weather } = props;

  return (
      
      
      <>
      {weather && (
      <div className="mapcontainer">
        <Map center={[latitude, longitude]} zoom={12}>
          <Marker className="marcador" width={30} anchor={[latitude, longitude]} />
        </Map>
      <p>
        Coordenadas: {latitude}, {longitude}
      </p>
      </div> 
      )}
    </>
  );
};

export default Maps;
