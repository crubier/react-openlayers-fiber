import React, { useLayoutEffect, useRef, useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Fill, RegularShape, Stroke, Style } from "ol/style";
import { useResource, useUpdate } from "../hooks";
import { Map } from "../map";

// import "../types";

require("ol/ol.css");

export default {
  title: "Components/KitchenSink",
  component: Map,
};

const bingstyles = [
  "Road",
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
    color: "red",
    width: 3,
  }),
  fill: new Fill({
    color: "rgba(0, 0, 255, 0.1)",
  }),
});

export const Primary: Story<{}> = (args) => {
  const [currentStyle, setCurrentStyle] = useState(bingstyles[0]);
  const vectorSourceRef = useResource();
  const drawRef = useUpdate((drawInteraction) => {
    // There are better ways to do this! This is just to demonstrate
    // the use of useUpdate
    if(currentStyle==bingstyles[0]){
      drawInteraction.setActive(false);
    } else {
      drawInteraction.setActive(true);
    }
  },[currentStyle]);

  return (
    <>
      <select
        value={currentStyle}
        onChange={(e) => setCurrentStyle(e.target.value)}
      >
        {bingstyles.map((style, index) => (
          <option key={index} value={style}>
            {style}
          </option>
        ))}
      </select>
      <Map style={{ width: "100%", height: "640px" }}>
        <olView center={[0, 0]} zoom={2} />
        <olControlRotate />
        <olControlFullScreen />
        <olControlScaleLine />
        <olInteractionDragRotateAndZoom />

        {bingstyles.map((style, index) => (
          <olLayerTile
            key={index}
            visible={style == currentStyle}
            preload={Infinity}
          >
            <olSourceBingMaps
              _key="Akdsy2SFch0llm3vlRegzoCtdZEmgD--98xBIXj83gtJyicWSd9vIeH1Qibj_V3U"
              imagerySet={style}
              hidpi={true}
            />
          </olLayerTile>
        ))}

        <olLayerVector>
          <olSourceVector features={[]} ref={vectorSourceRef}>
            <olFeature style={pointStyle}>
              <olGeomPoint args={[[0, 0]]} />
            </olFeature>
            <olFeature style={polygonStyle}>
              <olGeomPolygon
                args={[
                  [
                    [
                      [0, 0],
                      [1000000, 0],
                      [0, 1000000],
                      [0, 0],
                    ],
                  ],
                ]}
              />
            </olFeature>
          </olSourceVector>
        </olLayerVector>
        {vectorSourceRef.current && (
          <olInteractionDraw
            type="Polygon"
            source={vectorSourceRef.current}
            ref={drawRef}
          />
        )}
      </Map>
    </>
  );
};
