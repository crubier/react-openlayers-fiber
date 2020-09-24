import React, { useEffect } from "react";
import {
  Cartesian3,
  createWorldTerrain,
  HeadingPitchRoll,
  Ion,
  IonResource,
} from "cesium";
import { Viewer, useViewer } from "../viewer";

import "../types";

require("cesium/Widgets/widgets.css");
if (typeof process.env.CESIUM_ION_ACCESS_TOKEN === "string")
  Ion.defaultAccessToken = process.env.CESIUM_ION_ACCESS_TOKEN;

export default {
  title: "3D Tiles",
  component: Viewer,
};

const ZoomTo = () => {
  const viewer = useViewer();

  useEffect(() => {
    viewer &&
      viewer.scene.camera.setView({
        destination: new Cartesian3(
          4401744.644145314,
          225051.41078911052,
          4595420.374784433
        ),
        orientation: new HeadingPitchRoll(
          5.646733805039757,
          -0.276607153839886,
          6.281110875400085
        ),
      });
  }, [viewer]);
  return null;
};

export const Tileset = () => (
  <Viewer
    args={[{ shouldAnimate: true, terrainProvider: createWorldTerrain() }]}>
    <ZoomTo />
    <cesium3DTileset
      args={[
        {
          url: IonResource.fromAssetId(96188),
        },
      ]}>
      <cesium3DTileStyle
        attach={"style"}
        args={[
          {
            pointSize: "3",
          },
        ]}
      />
    </cesium3DTileset>
  </Viewer>
);
