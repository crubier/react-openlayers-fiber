# react-cesium-fiber

[![npm version](https://badge.fury.io/js/react-cesium-fiber.svg)](https://badge.fury.io/js/react-cesium-fiber)

react-cesium-fiber is a React <a href="https://reactjs.org/docs/codebase-overview.html#renderers">renderer</a> for <a href="https://cesium.com/cesiumjs/">CesiumJs</a> on the web.

### What is it?

react-cesium-fiber is a custom React renderer which lets you create cesium components.

With react-cesium-fiber, you can easily create a 3D globe of the Earth and add custom imagery or terrain providers, add 3D geometries, labels or even point-clouds.

Every feature proposed by CesiumJs is available in react-cesium-fiber.
See the details of what you can do with CesiumJs on their <a href="https://cesium.com/cesiumjs/">website</a>.

### Why do you need it?

By default, CesiumJs has an imperative API. react-cesium-fiber transforms this in a declarative API. You simply specify what you want and react-cesium-fiber deals with the creation, updates and deletion of your components.

With `react-cesium-fiber`, you can profit from all the features React and its ecosystem bring, such as encapsulating and reusing logic in components. Your CesiumJs app now reacts easily to state changes, abstracting all the tedious work of maintaining your state and CesiumJs up to-date.

## Getting started

### 1. Create your react app and add basic cesium configuration.

You can follow <a href="https://github.com/darwin-education/craco-cesium">craco-cesium</a> really nice tutorial. But note that you don't need to add `resium`.

### 2. Add react-cesium-fiber with your favorite provider.

```shell
npm install react-cesium-fiber
```

or

```shell
yarn add react-cesium-fiber
```

### 3. Add a Viewer in your app

```jsx
import React from "react";
import { Viewer } from "react-cesium-fiber";

export const App = () => <Viewer />;
```

### 4. Add more components in your Viewer

```jsx
import React from "react";
import { Color } from "cesium";
import { Viewer } from "react-cesium-fiber";

export const App = () => (
  <Viewer>
    <entity>
      <cartesian3
        attach="position"
        constructFrom="fromDegrees"
        args={[-114.0, 30.0, 300000.0]}
      />
      <boxGraphics attach="box" material={Color.RED}>
        <cartesian3 attach="dimensions" args={[400000.0, 300000.0, 500000.0]} />
      </boxGraphics>
    </entity>
  </Viewer>
);
```

Note that you don't need to import `entity`, `cartesian3` or `boxGraphics`. That's the magic of the react-reconciler.

## Core concepts

- 📖 You need some basic knowledge of CesiumJs. react-cesium-fiber has a few specificities, such as the `args` and `attach` props, but once you grab those basic concepts, it quickly falls back to vanilla CesiumJs.
- 🧩 Every CesiumJs object can be instanced as a children of the Viewer. They don't need to have a Capitalized name as react-cesium-fiber recognize them as native components.
- 🚪 react-cesium-fiber is built in a way that always let you fallback to vanilla CesiumJs if you need. Using React `ref`, you can access the CesiumJs objects and manually update them.
- 🔍 TypeScript types and props autocomplete should help you to get started.

More details about the ➡️ <a href="./API.md">API here ⬅️</a>

## A few notes

- Greatly inspired by the amazing <a href="https://github.com/react-spring/react-three-fiber">react-three-fiber</a> package and <a href="https://www.youtube.com/watch?v=CGpMlWVcHok">this mind-blowing video</a> of <a href="https://twitter.com/sophiebits">Sophie Alpert</a>.
- Based on the work of the Cesium team and the <a href="https://cesium.com/cesiumjs/">CesiumJS</a> library.
- react-cesium-fiber is a very young project. If you are looking for something more production-ready, you can have a look at <a href="https://github.com/darwin-education/resium">resium</a> (even if I think that react-cesium-fiber conception is way easier to maintain.)
