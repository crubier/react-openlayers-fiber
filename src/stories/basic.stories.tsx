import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Map } from "../map";
import { Catalogue } from "../catalogue";
import { View, Collection, Feature } from "ol";
import GeometryLayout from "ol/geom/GeometryLayout";

// import "../types";

require("ol/ol.css");

export default {
  title: "Examples/1-Basic",
  component: Map,
};

export const Primary: Story<{}> = (args) => (
  <Map style={{ width: "100%", height: "640px" }}>
    <olView 
     args={{center:[0, 6000000], zoom:6}}
    // center={[0, 6000000]} zoom={6}
    />
    <olLayerTile>
      <olSourceOSM/>
    </olLayerTile>
  </Map>
);

// const t =()=><olControlZoom onChange_maxResolution={(e)=>{return false}} ></olControlZoom>;
