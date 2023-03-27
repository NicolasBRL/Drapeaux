import React from "react";

const Filter = ({
  setRangeValue,
  rangeValue,
  setSelectedContinent,
  selectedContinent,
}) => {
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <ul className="radio-container">
      <input
        type="range"
        min="1"
        max="250"
        defaultValue={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />

      {radios.map((continent) => (
        <li key={continent}>
          <input
            type="radio"
            id={continent}
            name="continentRadio"
            onChange={(e) => setSelectedContinent(e.target.id)}
          />
          <label htmlFor={continent}>{continent}</label>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
