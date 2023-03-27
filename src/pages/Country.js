import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

const Country = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/alpha/" + params.cioc)
      .then((res) => {
        setData(res.data[0]);
        console.log();
      });
  }, []);

  if (Object.keys(data).length > 0) {
    return (
      <div className="countries">
        <Navigation />
        <h2>
          {data.translations.fra.common} {data.flag}
        </h2>
        <h4>{data.capital}</h4>
        <h4>Population : {data.population}</h4>
        <h4>
          Devise : {Object.keys(data.currencies).map((key) => (<span key={key}>{data.currencies[key].name} ({data.currencies[key].symbol})</span>))}
        </h4>
        <h4>Continents : {data.continents}</h4>
      </div>
    );
  }
};

export default Country;
