import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./FilterSearch.css";
import { useHistory } from "react-router-dom";
import ByRegion from "../Region/ByRegion";
import "../index.css"
const FilterSearch = () => {
  const [countryName, setName] = useState("");
  const [countryRegion, setRegion] = useState("");
  console.log(countryName);

  const history = useHistory();
  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    history.push(`/region/${selectedRegion}`); // Use history.push to navigate
    return (
      <>
        <ByRegion region={selectedRegion}></ByRegion>
      </>
    );
  };

  return (
    <>
      <form className="search-country">
        <input
          type="search"
          id="search"
          placeholder="Search for a country..."
          value={countryName}
          onChange={(e) => setName(e.target.value)}
        />
        <Link to={`/country/${countryName}`}>
          <button className="search-btn" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>
        <select
          id="select"
          className="custom-select"
          value={countryRegion}
          onChange={handleRegionChange}
        >
          <option value="no value">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
       </select>
      </form>
    </>
  );
};

export default FilterSearch;
