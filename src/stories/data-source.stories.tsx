import React, { useEffect, useRef, useState } from "react";
import { Cartesian3, Color, GeoJsonDataSource } from "cesium";
import { Viewer } from "../viewer";

import "../types";

require("cesium/Widgets/widgets.css");

export default {
  title: "Data Source",
  component: Viewer,
};

const UsaGeojson = () => {
  const geojsonRef = useRef<GeoJsonDataSource>(null);

  useEffect(() => {
    geojsonRef.current.load(process.env.PUBLIC_URL + "./us-states.topojson");
  }, [geojsonRef.current]);

  return <geoJsonDataSource ref={geojsonRef} />;
};

export const GeoJson = () => (
  <Viewer>
    <UsaGeojson />
  </Viewer>
);

const pos2 = Cartesian3.fromDegrees(-114.0, 30.0, 300000.0);
const pos3 = Cartesian3.fromDegrees(-114.0, 20.0, 300000.0);

const dimensions = new Cartesian3(400000.0, 300000.0, 500000.0);

const greenWithOpacity = Color.GREEN.withAlpha(0.5);

const BlinkingCollection = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((current) => !current);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <customDataSource show={show} args={["Custom"]}>
      <entity args={[{}]}>
        <cartesian3
          attach="position"
          args={[-2083516.9683773473, -4679655.730028949, 4270821.855106338]}
        />
        <boxGraphics
          attach="box"
          dimensions={dimensions}
          material={Color.BLUE}
        />
      </entity>
      <entity position={pos2}>
        <boxGraphics
          attach="box"
          dimensions={dimensions}
          material={Color.RED}
        />
      </entity>
      <entity position={pos3}>
        <cylinderGraphics
          attach="cylinder"
          length={400000.0}
          topRadius={200000.0}
          bottomRadius={200000.0}
          material={greenWithOpacity}
          outline={true}
          outlineColor={Color.DARKGREEN}
        />
      </entity>
    </customDataSource>
  );
};

export const CustomDataSource = () => (
  <Viewer>
    <BlinkingCollection />
  </Viewer>
);
