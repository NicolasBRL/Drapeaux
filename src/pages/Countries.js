import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedContinent, setSelectedContinent] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="countries">
      <Filter
        setRangeValue={setRangeValue}
        rangeValue={rangeValue}
        setSelectedContinent={setSelectedContinent}
        selectedContinent={selectedContinent}
      />
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedContinent))
          .sort((a,b) => b.population - a.population)
          .slice(0, rangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
