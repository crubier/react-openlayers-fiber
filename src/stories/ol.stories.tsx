import React, { useRef } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Map } from "../map";
import { Catalogue } from "../catalogue";
import { View, Collection, Feature } from "ol";
import GeometryLayout from "ol/geom/GeometryLayout";

// import "../types";

require("ol/ol.css");

export default {
  title: "OL Examples",
  component: Map,
};

export const AccessibleMap: Story<{}> = (args) => {
  const view = useRef<View>();
  return (
    <>
      <button onClick={()=>{view.current.setZoom(view.current.getZoom() - 1)}}>Zoom out</button>
      <button onClick={()=>{view.current.setZoom(view.current.getZoom() + 1)}}>Zoom in</button>
      <Map style={{ width: "100%", height: "640px" }}>
        <olView ref={view} args={{ center: [0, 0], zoom: 2 }} />
        <olLayerTile>
          <olSourceOSM />
        </olLayerTile>
      </Map>
    </>
  );
};

// const t =()=><olControlZoom onChange_maxResolution={(e)=>{return false}} ></olControlZoom>;
