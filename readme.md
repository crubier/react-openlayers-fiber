# React OpenLayers Fiber

`@react-ol/fiber` is a react renderer for OpenLayers https://openlayers.org/ .

It is based on the same concept as what `@react-three/fiber` does for Three.js.

Visit https://react-openlayers-fiber.vercel.app

## What does it look like?

```tsx
import React from "react";
import "ol/ol.css";
import { Map } from "@react-ol/fiber";

export const Example = () => (
  <Map>
    <olView initialCenter={[0, 0]} initialZoom={2} />
    <olLayerTile preload={Infinity}>
      <olSourceOSM />
    </olLayerTile>
  </Map>
);
```

## Why?

Build your maps declaratively with re-usable, self-contained components that react to state, are readily interactive and can tap into React's ecosystem.

### Does it have limitations?

None. Everything that works in OpenLayers will work here without exception.

### Can it keep up with frequent updates to OpenLayers?

Yes. There is no hard dependency on a particular OpenLayers version, it does not wrap or duplicate a single OpenLayers class. It merely expresses OpenLayers in JSX: `<olView />` becomes `new ol.View()`, and that happens dynamically.

### Is it slower than plain OpenLayers?

No. There is no additional overhead. Components participate in a unified renderloop outside of React. It outperforms OpenLayers at scale due to React's scheduling abilities.

## Fundamentals

You need to be versed in both React and OpenLayers before rushing into this. If you are unsure about React consult the official React docs, especially the section about hooks. As for OpenLayers, make sure you at least glance over the following links:

- Make sure you have a [basic grasp of OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html). Keep that site open.
- When you know what a `map` is, a `view`, `layer`, `source`, `geometry`, fork the [demo](/#what-does-it-look-like) above.
- [Look up](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html) the JSX elements that you see (`layer`, `source`, etc), all OpenLayers exports are native to `@react-ol/fiber`.
- Try changing some values, scroll through our API to see what the various settings and hooks do.

## Ecosystem

- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) – a similar library, targeting Three.js
- [`zustand`](https://github.com/pmndrs/zustand) – state management
- [`react-spring`](https://github.com/pmndrs/react-spring) – a spring-physics-based animation library
