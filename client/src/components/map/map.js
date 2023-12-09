"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useEffect, useState } from "react";

const INDIA_TOPO_JSON = require("./topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
};

const colorScale = (value) => {
  if (value > 100) {
    return "#ff0000";
  }
  if (value > 200) {
    return "#ff9900";
  }
  if (value > 300) {
    return "#ff9900";
  }

  if (value > 400) {
    return "#ff9900";
  }

  if (value > 400) {
    return "#ff9900";
  }

  return "#fffb3b";
};

const DEFAULT_COLOR = "#EEE";

export default function Analysis(props) {

  const jobData = props.data
  console.log(props)

  const data = [
    { id: "AP", state: "Andhra Pradesh", value: 0 },
    { id: "AR", state: "Arunachal Pradesh", value: 0 },
    { id: "AS", state: "Assam", value: 0 },
    { id: "BR", state: "Bihar", value: 0 },
    { id: "CT", state: "Chhattisgarh", value: 0 },
    { id: "GA", state: "Goa", value: 0 },
    { id: "GJ", state: "Gujarat", value: 0 },
    { id: "HR", state: "Haryana", value: 0 },
    { id: "HP", state: "Himachal Pradesh", value: 0 },
    { id: "JH", state: "Jharkhand", value: 0 },
    { id: "KA", state: "Karnataka", value: 0 },
    { id: "KL", state: "Kerala", value: 0 },
    { id: "MP", state: "Madhya Pradesh", value: 0 },
    { id: "MH", state: "Maharashtra", value: 0 },
    { id: "MN", state: "Manipur", value: 0 },
    { id: "ML", state: "Meghalaya", value: 0 },
    { id: "MZ", state: "Mizoram", value: 0 },
    { id: "NL", state: "Nagaland", value: 0 },
    { id: "OR", state: "Odisha", value: 0 },
    { id: "PB", state: "Punjab", value: 0 },
    { id: "RJ", state: "Rajasthan", value: 0 },
    { id: "SK", state: "Sikkim", value: 0 },
    { id: "TN", state: "Tamil Nadu", value: 0 },
    { id: "TG", state: "Telangana", value: 0 },
    { id: "TR", state: "Tripura", value: 0 },
    { id: "UT", state: "Uttarakhand", value: 0 },
    { id: "UP", state: "Uttar Pradesh", value: 0 },
    { id: "WB", state: "West Bengal", value: 0 },
    { id: "WB", state: "West Bengal", value: 0 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: 0 },
    { id: "CH", state: "Chandigarh", value: 0 },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 0 },
    { id: "DD", state: "Daman and Diu", value: 0 },
    { id: "DL", state: "Delhi", value: 0 },
    { id: "JK", state: "Jammu and Kashmir", value: 0 },
    { id: "LA", state: "Ladakh", value: 0 },
    { id: "LD", state: "Lakshadweep", value: 0 },
    { id: "PY", state: "Puducherry", value: 0 },
  ];

  const updatedData = data.map((item) => {
    const matchingState = jobData?.find((job) => job.state == item.state);
    return {
      ...item,
      value: matchingState ? matchingState.crop_price : 0,
    };
  });


  console.log(updatedData)

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
              const current = updatedData.find((s) => s.id === geo.id);
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
