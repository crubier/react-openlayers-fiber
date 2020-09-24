import React from "react";
import { Viewer } from "../viewer";

require("cesium/Widgets/widgets.css");

export default {
  title: "Viewer",
  component: Viewer,
};

export const Basic = () => <Viewer />;

export const LowResolution = () => (
  <Viewer resolutionScale={0.2} args={[{ homeButton: false }]} />
);
