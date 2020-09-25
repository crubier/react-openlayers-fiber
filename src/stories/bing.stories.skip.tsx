import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Map } from "../map";

// import "../types";

require("ol/ol.css");

export default {
  title: "Components/Basic",
  component: Map,
};

const styles = [
  "RoadOnDemand",
  "Aerial",
  "AerialWithLabelsOnDemand",
  "CanvasDark",
  "OrdnanceSurvey",
];

const Template: Story<{}> = (args) => {
  const [currentStyle, setCurrentStyle] = useState(styles[0]);
  console.log(currentStyle);

  return (
    <>
      <select
        value={currentStyle}
        onChange={(e) => setCurrentStyle(e.target.value)}
      >
        {styles.map((style) => (
          <option value={style}>{style}</option>
        ))}
      </select>
      <Map>
        <olView
          options={{
            center: [-6655.5402445057125, 6709968.258934638],
            zoom: 13,
          }}
        ></olView>
        {styles.map((style) => (
          <layerTile
            visible={style == currentStyle}
            options={{ preload: Infinity, visible: style == currentStyle }}
          >
            <sourceBingMaps
              options={{
                key:
                  "AjsxIZS8gG8w-Gck9bKjBdP-7InQI8-UFHPUife_H0bScTfivLu9csMHNE_B0lGP",
                imagerySet: style,
              }}
            ></sourceBingMaps>
          </layerTile>
        ))}
      </Map>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
