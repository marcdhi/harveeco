"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";

const INDIA_TOPO_JSON = require("./topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
};

const colorScale = (value) => {
  if (value > 50) {
    return "#ff0000";
  }

  if (value > 30) {
    return "#ff9900";
  }

  return "#ffeb3b";
};

const DEFAULT_COLOR = "#EEE";

export default function Analysis() {
  const data = [
    { id: "AP", state: "Andhra Pradesh", value: 34 },
    { id: "AR", state: "Arunachal Pradesh", value: 34 },
    { id: "AS", state: "Assam", value: 34 },
    { id: "BR", state: "Bihar", value: 34 },
    { id: "CT", state: "Chhattisgarh", value: 34 },
    { id: "GA", state: "Goa", value: 21 },
    { id: "GJ", state: "Gujarat", value: 22 },
    { id: "HR", state: "Haryana", value: 34 },
    { id: "HP", state: "Himachal Pradesh", value: 24 },
    { id: "JH", state: "Jharkhand", value: 26 },
    { id: "KA", state: "Karnataka", value: 27 },
    { id: "KL", state: "Kerala", value: 34 },
    { id: "MP", state: "Madhya Pradesh", value: 34 },
    { id: "MH", state: "Maharashtra", value: 34 },
    { id: "MN", state: "Manipur", value: 34 },
    { id: "ML", state: "Meghalaya", value: 59 },
    { id: "MZ", state: "Mizoram", value: 34 },
    { id: "NL", state: "Nagaland", value: 59 },
    { id: "OR", state: "Odisha", value: 59 },
    { id: "PB", state: "Punjab", value: 34 },
    { id: "RJ", state: "Rajasthan", value: 34 },
    { id: "SK", state: "Sikkim", value: 34 },
    { id: "TN", state: "Tamil Nadu", value: 34 },
    { id: "TG", state: "Telangana", value: 34 },
    { id: "TR", state: "Tripura", value: 14 },
    { id: "UT", state: "Uttarakhand", value: 34 },
    { id: "UP", state: "Uttar Pradesh", value: 15 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: 34 },
    { id: "CH", state: "Chandigarh", value: 34 },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 19 },
    { id: "DD", state: "Daman and Diu", value: 20 },
    { id: "DL", state: "Delhi", value: 59 },
    { id: "JK", state: "Jammu and Kashmir", value: 25 },
    { id: "LA", state: "Ladakh", value: 34 },
    { id: "LD", state: "Lakshadweep", value: 34 },
    { id: "PY", state: "Puducherry", value: 34 },
  ];



  const [tooltipContent, setTooltipContent] = useState("");

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <>
      <ComposableMap
        className="bg-white"
        // data-tip=""
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const current = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  //   style={geographyStyle}
                  //   onMouseEnter={onMouseEnter(geo, current)}
                  //   onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}
