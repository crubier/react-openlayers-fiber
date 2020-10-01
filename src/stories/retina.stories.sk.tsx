import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Map } from "../map";

// import "../types";

require("ol/ol.css");

export default {
  title: "Components/Retina",
  component: Map,
};

export const Primary: Story<{}> = (args) => (
  <Map style={{ width: "100%", height: "640px" }}>
    <olView center={[0, 0]} zoom={2} />
    <olLayerTile preload={Infinity}>
      <olSourceXyz
        url="https://tile.osmand.net/hd/{z}/{x}/{y}.png"
        crossOrigin={null}
        maxZoom={19}
        tilePixelRatio={2}
      />
    </olLayerTile>
  </Map>
);
