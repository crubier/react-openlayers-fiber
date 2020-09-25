# API

## 1. Viewer

## 2. Specific props

Every react-openlayers-fiber component accepts all the editable properties of the openlayersJs object as props.
For example, you can specify wether or not an entity should be displayed like this: `<entity show={show} />` where `show` is a boolean you provide.

In addition to this, react-openlayers-fiber has a few specific props:

| Prop          | Type                 | Description                                                                                                                                                                                                                                                                                                                                    |
| ------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| args          | `any[]`              | An array of properties to instantiate the openlayersJs object with. The array will be spread in the constructor. For example, for a Cartesian3, according to the <a href="https://openlayers.com/docs/openlayersjs-ref-doc/Cartesian3.html">doc</a>, you need to do `new openlayers.Cartesian3(x, y, z)`. So, here, we will pass the props `args={[x, y, z]}`. |
| attach        | `string or function` | description                                                                                                                                                                                                                                                                                                                                    |
| constructFrom | `string`             | Description of constructFrom                                                                                                                                                                                                                                                                                                                   |
| onUpdate      | `function`           | Description of onUpdate                                                                                                                                                                                                                                                                                                                        |
| ref           | `ref object`         | Description of ref                                                                                                                                                                                                                                                                                                                             |

## 3. Hooks
