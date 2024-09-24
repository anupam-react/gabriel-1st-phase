import React, { useState } from "react";
import "./index.scss";
import { GoogleMapPage } from "./GoogleMapPage";
import Searchbar from "./Searchbar";
import useHeatMap from "../../hooks/useHeatMap";

const HeatMaps = () => {
  const { allOutlate } = useHeatMap();

  const [showSearch, setShowSearch] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');  // Reset city when country changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const filteredOutlets = allOutlate?.filter(outlet => {
    return (
      (selectedCountry === '' || outlet?.location?.country === selectedCountry) &&
      (selectedCity === '' || outlet?.location?.city === selectedCity)
    );
  });

  const uniqueCountries = [...new Set(allOutlate?.map(outlet => outlet?.location?.country))];
  const uniqueCities = [...new Set(allOutlate?.filter(outlet => outlet.location.country === selectedCountry || selectedCountry === '')
    .map(outlet => outlet?.location?.city))];
  return (
    <div>
      <div className="flex justify-between gap-10 relative">
        <p className="text-xl font-semibold w-[150px]">Heat Maps</p>

        {/* {!showSearch ? (
          <div
            className="flex items-center px-6 bg-white w-[60vw] rounded-lg h-12 "
            onClick={() => setShowSearch(true)}
          >
            <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
            <input
              type="text"
              className="search  w-full"
              placeholder="Search Brand"
            />
          </div>
        ) : (
          <Searchbar setShowSearch={setShowSearch} />
        )} */}
      </div>
      <div className="flex justify-between items-center gap-6 my-6">
        <img src="./Ellipse 13.png" alt="" />
        <p className="font-bold text-[20px]">
          Total <span className="text-[#FD575B]">{allOutlate?.length} </span> 
          <span className="text-[#000000B2]">Outlets all over the India</span>
        </p>
        <div className="flex gap-4">
          <div className="relative">
            <select
              id="countries"
              onChange={handleCountryChange} value={selectedCountry}
              className="map-input"
              style={{ width: "240px" }}
            >
              <option value=''>SELECT COUNTRY</option>
             {uniqueCountries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
            </select>
          </div>
          <div className="relative">
            <select
              id="countries"
              onChange={handleCityChange} value={selectedCity}
              className="map-input"
              style={{ width: "240px" }}
            >
          <option value=''>SELECT REGION</option>
           {uniqueCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
            </select>
          </div>
        </div>
      </div>
      <div>
        <GoogleMapPage allOutlate={filteredOutlets}/>
      </div>
    </div>
  );
};

export default HeatMaps;
