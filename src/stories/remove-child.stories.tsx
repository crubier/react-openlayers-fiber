import React, { useEffect, useState } from "react";
import { Color, IonResource, Ion } from "cesium";
import { Viewer } from "../viewer";

import "../types";

require("cesium/Widgets/widgets.css");
if (typeof process.env.CESIUM_ION_ACCESS_TOKEN === "string")
  Ion.defaultAccessToken = process.env.CESIUM_ION_ACCESS_TOKEN;

export default {
  title: "Remove child",
  component: Viewer,
};

const useBlink = (duration = 1500) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((current) => !current);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return show;
};

export const Single = () => {
  const show = useBlink();
  return (
    <Viewer>
      {show && (
        <entity args={[{}]}>
          <cartesian3
            attach="position"
            args={[-2083516.9683773473, -4679655.730028949, 4270821.855106338]}
          />
          <boxGraphics attach="box" material={Color.BLUE}>
            <cartesian3
              attach="dimensions"
              args={[400000.0, 300000.0, 500000.0]}
            />
          </boxGraphics>
        </entity>
      )}
    </Viewer>
  );
};

export const Collection = () => {
  const show = useBlink();
  return (
    <Viewer>
      {show && (
        <customDataSource args={["Custom"]}>
          <entity args={[{}]}>
            <cartesian3
              attach="position"
              args={[
                -2083516.9683773473,
                -4679655.730028949,
                4270821.855106338,
              ]}
            />
            <boxGraphics attach="box" material={Color.BLUE}>
              <cartesian3
                attach="dimensions"
                args={[400000.0, 300000.0, 500000.0]}
              />
            </boxGraphics>
          </entity>
        </customDataSource>
      )}
    </Viewer>
  );
};

export const Property = () => {
  const show = useBlink();
  const show2 = useBlink(3000);
  return (
    <Viewer>
      <customDataSource args={["Custom"]}>
        <entity>
          <cartesian3
            attach="position"
            args={[-2083516.9683773473, -4679655.730028949, 4270821.855106338]}
          />
          {show && (
            <boxGraphics
              attach="box"
              material={show2 ? Color.BLUE : Color.GREEN}>
              <cartesian3
                attach="dimensions"
                args={[400000.0, 300000.0, 500000.0]}
              />
            </boxGraphics>
          )}
        </entity>
      </customDataSource>
    </Viewer>
  );
};

export const Tileset = () => {
  const show = useBlink(5000);

  return (
    <Viewer>
      {show && (
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
      )}
    </Viewer>
  );
};
