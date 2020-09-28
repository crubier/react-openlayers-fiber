///////////////////////////////////////////////////////////////////////////////
// To run this you need to comment
//
// in "ol/layer.js":
// export { default as Heatmap } from './layer/Heatmap.js';
// export { default as WebGLPoints } from './layer/WebGLPoints.js';
//
// in "ol/source.js":
// export { default as Raster } from './source/Raster.js';

import {
  map,
  join,
  split,
  head,
  upperCase,
  camelCase,
  filter,
  keys,
  sortBy,
  identity,
  upperFirst,
  pick,
} from "lodash/fp";

///////////////////////////////////////////////////////////////////////////////
// Imports of elements
///////////////////////////////////////////////////////////////////////////////
// ol: Special case because we don't want all ol stuff
import * as olTemp from "ol";
const ol = pick(["Map", "View", "Feature", "Collection","Overlay"], olTemp);
// layer: Special case because some layer types cause problems during code generation...
import * as layerTemp from "ol/layer";
const layer = { ...layerTemp, WebGLPoints: {}, Heatmap: {} };
// control: all good
import * as control from "ol/control";
// interaction: all good
import * as interaction from "ol/interaction";
// source: Special case because some source types cause problems during code generation...
import * as sourceTemp from "ol/source";
const source = { ...sourceTemp, Raster: {} };
// geom: all good
import * as geom from "ol/geom";
// style: all good
import * as style from "ol/style";
///////////////////////////////////////////////////////////////////////////////

import { writeFileSync } from "fs";

export const isFirstLetterCapitalized = (key: string) => {
  const firstLetter = head(split("", key));
  return upperCase(firstLetter) === firstLetter;
};

const filterCapitalized = filter(isFirstLetterCapitalized);

export const convertTypeMapping = (prefix: string,object: string) => (
  key: string
): string => {
  return `  ${prefix}${upperFirst(camelCase(key))}: ${object}.${key};`;
};

export const convertTypeofMapping = (prefix: string,object: string) => (key: string): string => {
  return `  ${prefix}${upperFirst(camelCase(key))}: typeof ${object}["${key}"];`;
};


export const convertMapping = (prefix: string,object: string) => (key: string): string => {
  return `  ${prefix}${upperFirst(camelCase(key))}: ${object}.${key},`;
};

export const convertKindMapping = (prefix: string,object: string) => (key: string): string => {
  return `  ${prefix}${upperFirst(camelCase(key))}: "${prefix==="ol"?upperFirst(key):upperFirst(object)}",`;
};

export const convertAllValues = () => {
  return `// @ts-nocheck
// Generated Code, do not edit manually
import * as ol from "ol";
import * as layer from "ol/layer";
import * as control from "ol/control";
import * as interaction from "ol/interaction";
import * as source from "ol/source";
import * as geom from "ol/geom";
import * as style from "ol/style";

export type Mapping = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertTypeMapping("ol","ol"), filterCapitalized(keys(ol))),
    ...map(convertTypeMapping("olLayer","layer"), filterCapitalized(keys(layer))),
    ...map(convertTypeMapping("olControl","control"), filterCapitalized(keys(control))),
    ...map(
      convertTypeMapping("olInteraction","interaction"),
      filterCapitalized(keys(interaction))
    ),
    ...map(convertTypeMapping("olSource","source"), filterCapitalized(keys(source))),
    ...map(convertTypeMapping("olGeom","geom"), filterCapitalized(keys(geom))),
    ...map(convertTypeMapping("olStyle","style"), filterCapitalized(keys(style)))
  ])
)}
};

export type MappingType = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertTypeofMapping("ol","ol"), filterCapitalized(keys(ol))),
    ...map(convertTypeofMapping("olLayer","layer"), filterCapitalized(keys(layer))),
    ...map(convertTypeofMapping("olControl","control"), filterCapitalized(keys(control))),
    ...map(convertTypeofMapping("olInteraction","interaction"), filterCapitalized(keys(interaction))),
    ...map(convertTypeofMapping("olSource","source"), filterCapitalized(keys(source))),
    ...map(convertTypeofMapping("olGeom","geom"), filterCapitalized(keys(geom))),
    ...map(convertTypeofMapping("olStyle","style"), filterCapitalized(keys(style)))
  ])
)}
};

export const mapping:Mapping = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertMapping("ol","ol"), filterCapitalized(keys(ol))),
    ...map(convertMapping("olLayer","layer"), filterCapitalized(keys(layer))),
    ...map(convertMapping("olControl","control"), filterCapitalized(keys(control))),
    ...map(convertMapping("olInteraction","interaction"), filterCapitalized(keys(interaction))),
    ...map(convertMapping("olSource","source"), filterCapitalized(keys(source))),
    ...map(convertMapping("olGeom","geom"), filterCapitalized(keys(geom))),
    ...map(convertMapping("olStyle","style"), filterCapitalized(keys(style)))
  ])
)}
};

export const kindMapping = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertKindMapping("ol","ol"), filterCapitalized(keys(ol))),
    ...map(convertKindMapping("olLayer","layer"), filterCapitalized(keys(layer))),
    ...map(convertKindMapping("olControl","control"), filterCapitalized(keys(control))),
    ...map(convertKindMapping("olInteraction","interaction"), filterCapitalized(keys(interaction))),
    ...map(convertKindMapping("olSource","source"), filterCapitalized(keys(source))),
    ...map(convertKindMapping("olGeom","geom"), filterCapitalized(keys(geom))),
    ...map(convertKindMapping("olStyle","style"), filterCapitalized(keys(style)))
  ])
)}
};


`;
};

// We don't want to test those functions
/* istanbul ignore next */
/**
 * This functions generates a file containing 2 mappings necessary in order to
 * have proper typing of react-openlayers-fiber elements.
 *
 * It needs to be updated on every release of ol.
 * Maybe we should put those types in a different package in order to avoid tying
 * react-openlayers-fiber releases with ol ones.
 */
export const generateTypes = () =>
  writeFileSync("./src/generated.ts", convertAllValues());

/* istanbul ignore next */
if (require.main === module) {
  generateTypes();
  console.log("types generated!");
}
