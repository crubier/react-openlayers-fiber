import React, { useEffect, useRef, useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Map } from "../map";
import { Catalogue } from "../catalogue";
import { View, Collection, Feature } from "ol";
import GeometryLayout from "ol/geom/GeometryLayout";
import { Fill, RegularShape, Stroke, Style } from "ol/style";

// import "../types";

require("ol/ol.css");

export default {
  title: "Examples/3-Dynamic style",
  component: Map,
};

// var stroke = new Stroke({ color: "black", width: 2 });
// var fill = new Fill({ color: "red" });

// const pointStyle = new Style({
//   image: new RegularShape({
//     fill: fill,
//     stroke: stroke,
//     points: 4,
//     radius: 10,
//     angle: Math.PI / 4,
//   }),
// });

// Jut a ueInterval hook to make stuff dynamic
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void | null>();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });
  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== "undefined") {
        savedCallback?.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const Primary: Story<{}> = (args) => {
  const [location, setLocation] = useState<[number, number]>([0, 6000000]);

  useInterval(() => {
    setLocation([100000 * Math.random(), 6000000 + 100000 * Math.random()]);
  }, 1000 / 30);

  return (
    <Map style={{ width: "100%", height: "640px" }}>
      <olView args={{ center: [0, 6000000], zoom: 6 }} />
      <olLayerTile>
        <olSourceOSM />
      </olLayerTile>
      <olLayerVector>
        <olSourceVector>
          <olFeature>
            <olStyleStyle attach="style">
              <olStyleRegularShape attach="image" points={4} radius={Math.random()*20} angle={Math.PI / 4}>
                <olStyleStroke attach="stroke" color="black" width={2} />
                <olStyleFill attach="fill" color="red" />
              </olStyleRegularShape>
            </olStyleStyle>
            <olGeomPoint coordinates={location} />
          </olFeature>
        </olSourceVector>
      </olLayerVector>
    </Map>
  );
};

// const t =()=><olControlZoom onChange_maxResolution={(e)=>{return false}} ></olControlZoom>;
