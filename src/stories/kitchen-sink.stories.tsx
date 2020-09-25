import React, { useLayoutEffect, useRef, useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Fill, RegularShape, Stroke, Style } from "ol/style";

import { Map } from "../map";

// import "../types";

require("ol/ol.css");

export default {
  title: "Components/KitchenSink",
  component: Map,
};

const bingstyles = [
  "RoadOnDemand",
  "Aerial",
  "AerialWithLabelsOnDemand",
  "CanvasDark",
  "OrdnanceSurvey",
];

var stroke = new Stroke({ color: "black", width: 2 });
var fill = new Fill({ color: "red" });

const pointStyle = new Style({
  image: new RegularShape({
    fill: fill,
    stroke: stroke,
    points: 4,
    radius: 10,
    angle: Math.PI / 4,
  }),
});

const polygonStyle = new Style({
  stroke: new Stroke({
    color: "blue",
    width: 3,
  }),
  fill: new Fill({
    color: "rgba(0, 0, 255, 0.1)",
  }),
});

export const Primary: Story<{}> = (args) => {
  const [currentStyle, setCurrentStyle] = useState(bingstyles[0]);
  const toto = useRef();
  useLayoutEffect(() => {
    console.log(toto);
  }, []);
  console.log("toto.current");
  console.log(toto.current);
  return (
    <>
      <select
        value={currentStyle}
        onChange={(e) => setCurrentStyle(e.target.value)}
      >
        {bingstyles.map((style) => (
          <option value={style}>{style}</option>
        ))}
      </select>
      <Map style={{ width: "100%", height: "640px" }}>
        <olView center={[0, 0]} zoom={2} />
        <olControlRotate />
        <olControlFullScreen />
        <olControlScaleLine />
        <olInteractionDragRotateAndZoom />

        {/* <olLayerTile>
          <olSourceOsm />
        </olLayerTile> */}

        {bingstyles.map((style) => (
          <olLayerTile visible={style == currentStyle} preload={Infinity}>
            <olSourceBingMaps
              key="AjsxIZS8gG8w-Gck9bKjBdP-7InQI8-UFHPUife_H0bScTfivLu9csMHNE_B0lGP"
              imagerySet={style}
            />
          </olLayerTile>
        ))}

        <olLayerVector>
          <olSourceVector features={[]} ref={toto}>
            <olFeature style={pointStyle}>
              <olGeomPoint args={[[0, 0]]} />
            </olFeature>
            <olFeature style={polygonStyle}>
              <olGeomPolygon
                args={[
                  [
                    [0, 0],
                    [1, 0],
                    [0, 1],
                    [0, 0],
                  ],
                ]}
              />
            </olFeature>
          </olSourceVector>
        </olLayerVector>

        <olInteractionDraw type="Polygon" source={toto.current} />
      </Map>
    </>
  );
};
