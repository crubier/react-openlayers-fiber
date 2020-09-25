import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Map } from "../map";

// import "../types";

require("ol/ol.css");

export default {
  title: "Components/Basic",
  component: Map,
};

const Template: Story<{}> = (args) => (
  <Map>
    <olView options={{ center: [0, 0], zoom: 2 }}></olView>
    <layerTile>
      <sourceOsm>
      </sourceOsm>
    </layerTile>
  </Map>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
