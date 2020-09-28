///////////////////////////////////////////////////////////////////////////////
// The catalogue is the list of object from openlayers that are supported
// it is generated automatically, and is strongly typed
//
import {
  pick,
  upperFirst,
  toPairs,
  fromPairs,
  map,
  lowerFirst,
  isObject,
  omit,
} from "lodash/fp";
///////////////////////////////////////////////////////////////////////////////
// Import stuff we want to use from Openlayers
// Here we omit abtsract base classes, utility classes and other weird stuff
import * as olTemp from "ol";
const ol = omit(
  [
    "AssertionError",
    "Disposable",
    "Graticule",
    "Image",
    "ImageBase",
    "ImageCanvas",
    "ImageTile",
    "Kinetic",
    "MapBrowserEvent",
    "MapBrowserEventHandler",
    "MapEvent",
    "Tile",
    "TileQueue",
    "TileRange",
    "VectorRenderTile",
    "VectorTile",
    "getUid",
    "VERSION",
  ],
  olTemp
);
//
import * as olLayerTemp from "ol/layer";
const olLayer = olLayerTemp;
//
import * as olControlTemp from "ol/control";
const olControl = omit(["defaults"], olControlTemp);
//
import * as olInteractionTemp from "ol/interaction";
const olInteraction = omit(["defaults"], olInteractionTemp);
//
import * as olSourceTemp from "ol/source";
const olSource = omit(["Image", "Source", "Tile"], olSourceTemp);
//
import * as olGeomTemp from "ol/geom";
const olGeom = omit(["Geometry", "SimpleGeometry"], olGeomTemp);
//
import * as olStyleTemp from "ol/style";
const olStyle = omit(["Image", "IconImage"], olStyleTemp);

///////////////////////////////////////////////////////////////////////////////
// Catalogue Type
export type Kind =
  // Elements of Ol that we picked manually
  | keyof typeof ol
  // Or the categories of Ol items explained in https://openlayers.org/en/latest/apidoc/
  | "Layer"
  | "Control"
  | "Interaction"
  | "Source"
  | "Geom"
  | "Style"
  | null;

export type CatalogueItem<T> = {
  kind: Kind;
  type: string;
  object: T;
};
// Now we generate the types automatically (This parts needs typescript 4.1+)
type CatalogueOl = {
  [K in keyof typeof ol as `ol${Capitalize<K>}`]: CatalogueItem<typeof ol[K]>
}
type CatalogueOlLayer = {
  [K in keyof typeof olLayer as `olLayer${Capitalize<K>}`]: CatalogueItem<typeof olLayer[K]>
}
type CatalogueOlControl = {
  [K in keyof typeof olControl as `olControl${Capitalize<K>}`]: CatalogueItem<typeof olControl[K]>
}
type CatalogueOlInteraction = {
  [K in keyof typeof olInteraction as `olInteraction${Capitalize<K>}`]: CatalogueItem<typeof olInteraction[K]>
}
type CatalogueOlSource = {
  [K in keyof typeof olSource as `olSource${Capitalize<K>}`]: CatalogueItem<typeof olSource[K]>
}
type CatalogueOlGeom = {
  [K in keyof typeof olGeom as `olGeom${Capitalize<K>}`]: CatalogueItem<typeof olGeom[K]>
}
type CatalogueOlStyle = {
  [K in keyof typeof olStyle as `olStyle${Capitalize<K>}`]: CatalogueItem<typeof olStyle[K]>
}

// Finished, now some additional stuff
export type Catalogue = CatalogueOl &
  CatalogueOlLayer &
  CatalogueOlControl &
  CatalogueOlInteraction &
  CatalogueOlSource &
  CatalogueOlGeom &
  CatalogueOlStyle;
export type CatalogueKey = keyof Catalogue;

///////////////////////////////////////////////////////////////////////////////
// Catalogue Value
const catalogueOl = fromPairs(
  map(
    <T>([key, value]: [string, T]): [string, CatalogueItem<T>] => [
      `ol${upperFirst(key)}`,
      { kind: key as Kind, type: `ol${upperFirst(key)}`, object: value },
    ],
    toPairs(ol)
  )
) as CatalogueOl;

const catalogueOlLayer = fromPairs(
  map(
    <T>([key, value]: [string, T]): [string, CatalogueItem<T>] => [
      `olLayer${upperFirst(key)}`,
      {
        kind: "Layer" as Kind,
        type: `olLayer${upperFirst(key)}`,
        object: value,
      },
    ],
    toPairs(olLayer)
  )
) as CatalogueOlLayer;

const catalogueOlControl = fromPairs(
  map(
    <T>([key, value]: [string, T]): [string, CatalogueItem<T>] => [
      `olControl${upperFirst(key)}`,
      {
        kind: "Control" as Kind,
        type: `olControl${upperFirst(key)}`,
        object: value,
      },
    ],
    toPairs(olControl)
  )
) as CatalogueOlControl;

const catalogueOlInteraction = fromPairs(
  map(
    <T>([key, value]: [string, T]): [string, CatalogueItem<T>] => [
      `olInteraction${upperFirst(key)}`,
      {
        kind: "Interaction" as Kind,
        type: `olInteraction${upperFirst(key)}`,
        object: value,
      },
    ],
    toPairs(olInteraction)
  )
) as CatalogueOlInteraction;

const catalogueOlSource = fromPairs(
  map(
    <T>([key, value]: [string, T]): [string, CatalogueItem<T>] => [
      `olSource${upperFirst(key)}`,
      {
        kind: "Source" as Kind,
        type: `olSource${upperFirst(key)}`,
        object: value,
      },
    ],
    toPairs(olSource)
  )
) as CatalogueOlSource;

const catalogueOlGeom = fromPairs(
  map(
    <T>([key, value]: [string, T]): [string, CatalogueItem<T>] => [
      `olGeom${upperFirst(key)}`,
      { kind: "Geom" as Kind, type: `olGeom${upperFirst(key)}`, object: value },
    ],
    toPairs(olGeom)
  )
) as CatalogueOlGeom;

const catalogueOlStyle = fromPairs(
  map(
    <T>([key, value]: [string, T]): [string, CatalogueItem<T>] => [
      `olStyle${upperFirst(key)}`,
      {
        kind: "Style" as Kind,
        type: `olStyle${upperFirst(key)}`,
        object: value,
      },
    ],
    toPairs(olStyle)
  )
) as CatalogueOlStyle;

export let catalogue: Catalogue = {
  ...catalogueOl,
  ...catalogueOlLayer,
  ...catalogueOlControl,
  ...catalogueOlInteraction,
  ...catalogueOlSource,
  ...catalogueOlGeom,
  ...catalogueOlStyle,
};

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// A way to extend the catalogue
export const extend = <T>(objects: { [key: string]: T }): void => {
  // Cleanup the input
  const cleanedUpObjects = fromPairs(
    map(<T>([key, value]: [string, T | CatalogueItem<T>]): [
      string,
      CatalogueItem<T>
    ] => {
      if (!isObject((value as CatalogueItem<T>).object)) {
        // If it's directly an object we put it nicely in a catalogue item
        return [
          lowerFirst(key),
          {
            type: lowerFirst(key),
            kind: null,
            object: value as T,
          },
        ];
      } else {
        // If it's already a catalogue item it's good
        return [
          lowerFirst(key),
          { type: lowerFirst(key), kind: null, ...(value as CatalogueItem<T>) },
        ];
      }
    }, toPairs(objects))
  );
  // Update the catalogue
  catalogue = { ...catalogue, ...cleanedUpObjects };
  return;
};
