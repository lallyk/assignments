import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix icon path issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const Map = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://disease.sh/v3/covid-19/countries?sort=country"
      );
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} className="map-container">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div className="popup">
              <h5>{country.country}</h5>
              <p>Active Cases: {country.active}</p>
              <p>Recovered Cases: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;