// /////////////////////////////////////////////////////////////////////////////
// The catalogue is the list of object from openlayers that are supported
// it is generated automatically, and is strongly typed
// /////////////////////////////////////////////////////////////////////////////

import {
  upperFirst,
  lowerFirst,
  omit,
  fromPairs,
  toPairs,
  map,
  isObject,
} from "lodash/fp";

// /////////////////////////////////////////////////////////////////////////////
// Import stuff we want to use from Openlayers

import * as olRaw from "ol";
import * as olLayerRaw from "ol/layer";
import * as olControlRaw from "ol/control";
import * as olInteractionRaw from "ol/interaction";
import * as olSourceRaw from "ol/source";
import * as olGeomRaw from "ol/geom";
import * as olStyleRaw from "ol/style";


// /////////////////////////////////////////////////////////////////////////////
// Here we define what we omit: abstract base classes, utility classes and other weird stuff

const olOmitKeys = [
  "defaults",
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
] as const;
const olLayerOmitKeys = [] as const;
const olControlOmitKeys = ["defaults"] as const;
const olInteractionOmitKeys = ["defaults"] as const;
const olSourceOmitKeys = ["Image", "Source", "Tile", "sourcesFromTileGrid"] as const;
const olGeomOmitKeys = ["Geometry", "SimpleGeometry"] as const;
const olStyleOmitKeys = ["Image", "IconImage"] as const;

// /////////////////////////////////////////////////////////////////////////////
// Here we do omit things listed above

const ol = omit(olOmitKeys, olRaw) as Omit<
  typeof olRaw,
  typeof olOmitKeys[number]
>;
const olLayer = omit(olLayerOmitKeys, olLayerRaw) as Omit<
  typeof olLayerRaw,
  typeof olLayerOmitKeys[number]
>;
const olControl = omit(olControlOmitKeys, olControlRaw) as Omit<
  typeof olControlRaw,
  typeof olControlOmitKeys[number]
>;
const olInteraction = omit(olInteractionOmitKeys, olInteractionRaw) as Omit<
  typeof olInteractionRaw,
  typeof olInteractionOmitKeys[number]
>;
const olSource = omit(olSourceOmitKeys, olSourceRaw) as Omit<
  typeof olSourceRaw,
  typeof olSourceOmitKeys[number]
>;
const olGeom = omit(olGeomOmitKeys, olGeomRaw) as Omit<
  typeof olGeomRaw,
  typeof olGeomOmitKeys[number]
>;
const olStyle = omit(olStyleOmitKeys, olStyleRaw) as Omit<
  typeof olStyleRaw,
  typeof olStyleOmitKeys[number]
>;

// /////////////////////////////////////////////////////////////////////////////

// type OlSourceRaw = typeof olSourceRaw;
// // type OlSourceRawKey = keyof OlSourceRaw;
// type OlSourceOmitKey = typeof olSourceOmitKeys[number];
// // type OlSourceKey = Exclude<OlSourceRawKey, OlSourceOmitKey>;
// // type OlSourceElement = OlSourceRaw[OlSourceKey];
// type OlSource = Omit<OlSourceRaw, OlSourceOmitKey>;

// const olSource = Object.fromEntries(
//   Object.entries(olSourceRaw).filter(
//     ([key]) => !olSourceOmitKeys.includes(key as OlSourceOmitKey)
//   ) // as [OlSourceKey, OlSourceElement]
// ) as OlSource;

// /////////////////////////////////////////////////////////////////////////////
// Now we generate the types automatically (This parts needs typescript >=4.1)

type CatalogueOl = {
  [K in keyof typeof ol as `ol${Capitalize<K>}`]: {
    kind: K;
    type: `ol${Capitalize<K>}`;
    object: typeof ol[K];
  };
};
type CatalogueOlLayer = {
  [K in keyof typeof olLayer as `olLayer${Capitalize<K>}`]: {
    kind: "Layer";
    type: `olLayer${Capitalize<K>}`;
    object: typeof olLayer[K];
  };
};
type CatalogueOlControl = {
  [K in keyof typeof olControl as `olControl${Capitalize<K>}`]: {
    kind: "Control";
    type: `olControl${Capitalize<K>}`;
    object: typeof olControl[K];
  };
};
type CatalogueOlInteraction = {
  [K in keyof typeof olInteraction as `olInteraction${Capitalize<K>}`]: {
    kind: "Interaction";
    type: `olInteraction${Capitalize<K>}`;
    object: typeof olInteraction[K];
  };
};
type CatalogueOlSource = {
  [K in keyof typeof olSource as `olSource${Capitalize<K>}`]: {
    kind: "Source";
    type: `olSource${Capitalize<K>}`;
    object: typeof olSource[K];
  };
};
type CatalogueOlGeom = {
  [K in keyof typeof olGeom as `olGeom${Capitalize<K>}`]: {
    kind: "Geom";
    type: `olGeom${Capitalize<K>}`;
    object: typeof olGeom[K];
  };
};
type CatalogueOlStyle = {
  [K in keyof typeof olStyle as `olStyle${Capitalize<K>}`]: {
    kind: "Style";
    type: `olStyle${Capitalize<K>}`;
    object: typeof olStyle[K];
  };
};

// /////////////////////////////////////////////////////////////////////////////
// Finished, now some additional stuff

export type Catalogue = CatalogueOl &
  CatalogueOlLayer &
  CatalogueOlControl &
  CatalogueOlInteraction &
  CatalogueOlSource &
  CatalogueOlGeom &
  CatalogueOlStyle;


export type CatalogueKey = keyof Catalogue;
export type CatalogueItem = Catalogue[CatalogueKey];
export type Kind = CatalogueItem["kind"];
export type ExtendedCatalogueItem<T> = {
  object: T;
  kind: Kind | null;
  type: string;
};

// /////////////////////////////////////////////////////////////////////////////
// Catalogue Values

const catalogueOl = Object.fromEntries(
  Object.entries(ol).map(([key, value]) => [
    `ol${upperFirst(key)}`,
    {
      kind: key,
      type: `ol${upperFirst(key)}`,
      object: value,
    },
  ])
) as CatalogueOl;

const catalogueOlLayer = Object.fromEntries(
  Object.entries(olLayer).map(([key, value]) => [
    `olLayer${upperFirst(key)}`,
    {
      kind: "Layer",
      type: `olLayer${upperFirst(key)}`,
      object: value,
    },
  ])
) as CatalogueOlLayer;

const catalogueOlControl = Object.fromEntries(
  Object.entries(olControl).map(([key, value]) => [
    `olControl${upperFirst(key)}`,
    {
      kind: "Control",
      type: `olControl${upperFirst(key)}`,
      object: value,
    },
  ])
) as CatalogueOlControl;

const catalogueOlInteraction = Object.fromEntries(
  Object.entries(olInteraction).map(([key, value]) => [
    `olInteraction${upperFirst(key)}`,
    {
      kind: "Interaction",
      type: `olInteraction${upperFirst(key)}`,
      object: value,
    },
  ])
) as CatalogueOlInteraction;

const catalogueOlSource = Object.fromEntries(
  Object.entries(olSource).map(([key, value]) => [
    `olSource${upperFirst(key)}`,
    {
      kind: "Source",
      type: `olSource${upperFirst(key)}`,
      object: value,
    },
  ])
) as CatalogueOlSource;

const catalogueOlGeom = Object.fromEntries(
  Object.entries(olGeom).map(([key, value]) => [
    `olGeom${upperFirst(key)}`,
    {
      kind: "Geom",
      type: `olGeom${upperFirst(key)}`,
      object: value,
    },
  ])
) as CatalogueOlGeom;

const catalogueOlStyle = Object.fromEntries(
  Object.entries(olStyle).map(([key, value]) => [
    `olStyle${upperFirst(key)}`,
    {
      kind: "Style",
      type: `olStyle${upperFirst(key)}`,
      object: value,
    },
  ])
) as CatalogueOlStyle;

// eslint-disable-next-line import/no-mutable-exports
export let catalogue: Catalogue = {
  ...catalogueOl,
  ...catalogueOlLayer,
  ...catalogueOlControl,
  ...catalogueOlInteraction,
  ...catalogueOlSource,
  ...catalogueOlGeom,
  ...catalogueOlStyle,
};

/// ////////////////////////////////////////////////////////////////////////

/// ////////////////////////////////////////////////////////////////////////////
// A way to extend the catalogue
export const extend = <T>(objects: { [key: string]: T }): void => {
  // Cleanup the input
  const cleanedUpObjects = fromPairs(
    map(<U>([key, value]: [string, U | ExtendedCatalogueItem<U>]): [
      string,
      ExtendedCatalogueItem<U>
    ] => {
      if (!isObject((value as ExtendedCatalogueItem<U>).object)) {
        // If it's directly an object we put it nicely in a catalogue item
        return [
          lowerFirst(key),
          {
            type: lowerFirst(key),
            kind: null,
            object: value as U,
          },
        ];
      }
      // If it's already a catalogue item it's good
      return [
        lowerFirst(key),
        {
          ...(value as ExtendedCatalogueItem<U>),
          type: lowerFirst(key),
        },
      ];
    }, toPairs(objects))
  );
  // Update the catalogue
  catalogue = { ...catalogue, ...cleanedUpObjects };
};
