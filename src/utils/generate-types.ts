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
const ol = pick(["Map", "View", "Feature", "Collection"], olTemp);
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
// overlay: Special case because there is only one type, so it does not have the same shape a others
import Overlay from "ol/Overlay";
const overlay = { Overlay };
///////////////////////////////////////////////////////////////////////////////

import { writeFileSync } from "fs";

export const isFirstLetterCapitalized = (key: string) => {
  const firstLetter = head(split("", key));
  return upperCase(firstLetter) === firstLetter;
};

const filterCapitalized = filter(isFirstLetterCapitalized);

export const convertMappingExported = (prefix: string) => (
  key: string
): string => {
  return `  ${prefix}${upperFirst(camelCase(key))}: typeof ${prefix}.${key};`;
};

export const convertMapping = (prefix: string) => (key: string): string => {
  return `  ${prefix}${upperFirst(camelCase(key))}: ${prefix}.${key},`;
};

export const convertKindMapping = (prefix: string) => (key: string): string => {
  return `  ${prefix}${upperFirst(camelCase(key))}: "${prefix==="ol"?upperFirst(key):upperFirst(prefix)}",`;
};

export const convertMappingTypeOf = (prefix: string) => (
  key: string
): string => {
  return `  ${prefix}${upperFirst(
    camelCase(key)
  )}: typeof ${prefix}["${key}"];`;
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
import Overlay from "ol/Overlay";
const overlay = {Overlay};

export type MappingExported = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertMappingExported("ol"), filterCapitalized(keys(ol))),
    ...map(convertMappingExported("layer"), filterCapitalized(keys(layer))),
    ...map(convertMappingExported("control"), filterCapitalized(keys(control))),
    ...map(
      convertMappingExported("interaction"),
      filterCapitalized(keys(interaction))
    ),
    ...map(convertMappingExported("source"), filterCapitalized(keys(source))),
    ...map(convertMappingExported("geom"), filterCapitalized(keys(geom))),
    ...map(convertMappingExported("overlay"), filterCapitalized(keys(overlay))),
  ])
)}
};

export const mapping = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertMapping("ol"), filterCapitalized(keys(ol))),
    ...map(convertMapping("layer"), filterCapitalized(keys(layer))),
    ...map(convertMapping("control"), filterCapitalized(keys(control))),
    ...map(convertMapping("interaction"), filterCapitalized(keys(interaction))),
    ...map(convertMapping("source"), filterCapitalized(keys(source))),
    ...map(convertMapping("geom"), filterCapitalized(keys(geom))),
    ...map(convertMapping("overlay"), filterCapitalized(keys(overlay))),
  ])
)}
};

export const kindMapping = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertKindMapping("ol"), filterCapitalized(keys(ol))),
    ...map(convertKindMapping("layer"), filterCapitalized(keys(layer))),
    ...map(convertKindMapping("control"), filterCapitalized(keys(control))),
    ...map(convertKindMapping("interaction"), filterCapitalized(keys(interaction))),
    ...map(convertKindMapping("source"), filterCapitalized(keys(source))),
    ...map(convertKindMapping("geom"), filterCapitalized(keys(geom))),
    ...map(convertKindMapping("overlay"), filterCapitalized(keys(overlay))),
  ])
)}
};

export type MappingTypeofExport = {
${join(
  "\n",
  sortBy(identity, [
    ...map(convertMappingTypeOf("ol"), filterCapitalized(keys(ol))),
    ...map(convertMappingTypeOf("layer"), filterCapitalized(keys(layer))),
    ...map(convertMappingTypeOf("control"), filterCapitalized(keys(control))),
    ...map(
      convertMappingTypeOf("interaction"),
      filterCapitalized(keys(interaction))
    ),
    ...map(convertMappingTypeOf("source"), filterCapitalized(keys(source))),
    ...map(convertMappingTypeOf("geom"), filterCapitalized(keys(geom))),
    ...map(convertMappingTypeOf("overlay"), filterCapitalized(keys(overlay))),
  ])
)}
};`;
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
  writeFileSync("./src/generated-mapping.ts", convertAllValues());

/* istanbul ignore next */
if (require.main === module) {
  generateTypes();
  console.log("mapping types generated!");
}
