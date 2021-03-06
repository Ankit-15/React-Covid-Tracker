import React from "react";
import numeral from "numeral";
import { Circle } from "react-leaflet";
import { PopUp } from "./Popup";
const casesTypeColors = {
  cases: {
    hex: "#6a040f",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#fb8b24",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#ff0a54",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country, ind) => (
    <Circle
      key={ind}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.cbrt(10 * country[casesType]) *
        casesTypeColors[casesType].multiplier
      }
    >
      <PopUp
        url={country.countryInfo.flag}
        country={country.country}
        cases={country.cases}
        recovered={country.recovered}
        deaths={country.deaths}
      />
    </Circle>
  ));
