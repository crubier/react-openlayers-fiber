import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Map } from "../map";

// import "../types";

require("ol/ol.css");

export default {
  title: "Components/Zoomify",
  component: Map,
};

const Template: Story<{}> = (args) => {
  const imgWidth = 4000;
  const imgHeight = 3000;
  return (
    <Map>
      <olView options={{ center: [0, 0], zoom: 2 }}></olView>
      <layerTile>
        <sourceZoomify
          options={{
            url: "https://ol-zoomify.surge.sh/zoomify/",
            size: [imgWidth, imgHeight],
            crossOrigin: "anonymous",
            zDirection: -1,
          }}
        ></sourceZoomify>
      </layerTile>
    </Map>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
