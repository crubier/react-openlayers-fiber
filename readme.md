# react-openlayers-fiber

[![npm version](https://badge.fury.io/js/react-openlayers-fiber.svg)](https://badge.fury.io/js/react-openlayers-fiber)

react-openlayers-fiber is a React <a href="https://reactjs.org/docs/codebase-overview.html#renderers">renderer</a> for <a href="https://openlayers.com/openlayersjs/">Openlayers</a> on the web.

### What is it?

react-openlayers-fiber is a custom React renderer which lets you create openlayers components.

With react-openlayers-fiber, you can easily create a 2D globe of the Earth and add custom imagery or terrain providers, add 2D geometries, labels or even point-clouds.

Every feature proposed by Openlayers is available in react-openlayers-fiber.
See the details of what you can do with Openlayers on their <a href="https://openlayers.com/openlayersjs/">website</a>.

### Why do you need it?

By default, Openlayers has an imperative API. react-openlayers-fiber transforms this in a declarative API. You simply specify what you want and react-openlayers-fiber deals with the creation, updates and deletion of your components.

With `react-openlayers-fiber`, you can profit from all the features React and its ecosystem bring, such as encapsulating and reusing logic in components. Your Openlayers app now reacts easily to state changes, abstracting all the tedious work of maintaining your state and Openlayers up to-date.

## Getting started

### 1. Create your react app and add basic openlayers configuration.

Use create-react-app for example.

### 2. Add react-openlayers-fiber with your favorite provider.

```shell
npm install react-openlayers-fiber
```

or

```shell
yarn add react-openlayers-fiber
```

### 3. Add a Viewer in your app

```jsx
import React from "react";
import { Viewer } from "react-openlayers-fiber";

export const App = () => <Viewer />;
```

### 4. Add more components in your Viewer

```jsx
import React from "react";
import { Map } from "react-openlayers-fiber";

export const App = () => (
  <Map>
    <olView options={{ center: [0, 0], zoom: 2 }}></olView>
    <layerTile>
      <sourceOsm>
      </sourceOsm>
    </layerTile>
  </Map>
);
```

Note that you don't need to import `olView`, `layerTile` or `sourceOsm`. That's the magic of the react-reconciler.

## Core concepts

- 📖 You need some basic knowledge of Openlayers. react-openlayers-fiber has a few specificities, such as the `args` and `attach` props, but once you grab those basic concepts, it quickly falls back to vanilla Openlayers.
- 🧩 Every Openlayers object can be instanced as a children of the Viewer. They don't need to have a Capitalized name as react-openlayers-fiber recognize them as native components.
- 🚪 react-openlayers-fiber is built in a way that always let you fallback to vanilla Openlayers if you need. Using React `ref`, you can access the Openlayers objects and manually update them.
- 🔍 TypeScript types and props autocomplete should help you to get started.

More details about the ➡️ <a href="./API.md">API here ⬅️</a>

## A few notes

- Greatly inspired by the amazing <a href="https://github.com/react-spring/react-three-fiber">react-three-fiber</a> package and <a href="https://www.youtube.com/watch?v=CGpMlWVcHok">this mind-blowing video</a> of <a href="https://twitter.com/sophiebits">Sophie Alpert</a>.
- Based on the work of the Openlayers team and the <a href="https://openlayers.org/">Openlayers</a> library.
- react-openlayers-fiber is a very young project. If you are looking for something more production-ready, just do bare bones openlayers for now 🤷
