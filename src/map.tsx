import React, { useRef, useLayoutEffect, useState } from "react";
import { Map as OlMap } from "ol";
import { render } from "./reconciler";

import { MapProvider, useMap } from "./context";

import { ReactOlFiber } from "./types";

const defaultArgs = [{}] as [ConstructorParameters<typeof OlMap>[0]];
const defaultStyle = {};
const defaultOptions = {};

// forward ref ?
export const Map = ({
  children,
  args = defaultArgs,
  style = defaultStyle,
  options = defaultOptions,
  ...mapProps
}: ReactOlFiber.Component<OlMap, [ConstructorParameters<typeof OlMap>[1]]> & {
  style?: React.CSSProperties;
}): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const wrapped = (
        <map
          options={{ ...options, target: containerRef.current }}
          {...mapProps}
        >
          <MapProvider value={map}>{children}</MapProvider>
        </map>
      );
      const returned = render(wrapped, containerRef.current);

      if (map == null && returned != null) {
        setMap(returned);
      }
    }
  }, [children, containerRef.current, map]);

  return <div style={style} ref={containerRef}></div>;
};

export { useMap };
