import React from "react";
import numeral from "numeral";

import { Popup } from "react-leaflet";
export const PopUp = ({ url, country, cases, recovered, deaths }) => {
  return (
    <Popup>
      <div className="info-container">
        <div
          className="info-flag"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div className="info-name">{country}</div>
        <div className="info-confirmed">
          Cases: {numeral(cases).format("0,0")}
        </div>
        <div className="info-recovered">
          Recovered: {numeral(recovered).format("0,0")}
        </div>
        <div className="info-deaths">
          Deaths: {numeral(deaths).format("0,0")}
        </div>
      </div>
    </Popup>
  );
};
