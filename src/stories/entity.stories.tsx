import React from "react";
import { Color } from "cesium";
import { Viewer } from "../viewer";

import "../types";

require("cesium/Widgets/widgets.css");

export default {
  title: "Entity",
  component: Viewer,
};

const greenWithOpacity = Color.GREEN.withAlpha(0.5);

export const Various = () => (
  <Viewer>
    <entity>
      <cartesian3
        attach="position"
        args={[-2083516.9683773473, -4679655.730028949, 4270821.855106338]}
      />
      <boxGraphics attach="box" material={Color.BLUE} args={[{}]}>
        <cartesian3 attach="dimensions" args={[400000.0, 300000.0, 500000.0]} />
      </boxGraphics>
    </entity>
    <entity>
      <cartesian3
        attach="position"
        constructFrom="fromDegrees"
        args={[-114.0, 30.0, 300000.0]}
      />
      <boxGraphics attach="box" material={Color.RED}>
        <cartesian3 attach="dimensions" args={[400000.0, 300000.0, 500000.0]} />
      </boxGraphics>
    </entity>
    <entity>
      <cartesian3
        attach="position"
        constructFrom="fromDegrees"
        args={[-114.0, 20.0, 300000.0]}
      />
      <cylinderGraphics
        attach="cylinder"
        length={400000.0}
        topRadius={200000.0}
        bottomRadius={200000.0}
        material={greenWithOpacity}
        outline={true}
        outlineColor={Color.DARKGREEN}></cylinderGraphics>
    </entity>
  </Viewer>
);
