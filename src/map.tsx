import React, { useRef, useLayoutEffect, useState } from "react";
import { Map as OlMap } from "ol";
import { render } from "./renderer";

import { MapProvider } from "./context";

import { ReactOlFiber } from "./types";

const defaultArgs = [{}] as [ConstructorParameters<typeof OlMap>[0]];
const defaultStyle = { width: 630, height: 480 };

// forward ref ?
export const Map = ({
  children,
  args = defaultArgs,
  style = defaultStyle,
  ...mapProps
}: ReactOlFiber.IntrinsicElements["olMap"] & {
  style?: React.CSSProperties;
}): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const wrapped = (
        <olMap {...mapProps} target={containerRef.current}>
          <MapProvider value={map}>{children}</MapProvider>
        </olMap>
      );
      const returned = render(wrapped, containerRef.current);

      if (map == null && returned != null) {
        setMap(returned);
      }
    }
  }, [children, containerRef.current, map]);

  return <div style={style} ref={containerRef}></div>;
};
