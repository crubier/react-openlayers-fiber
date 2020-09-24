import * as Cesium from "cesium";
import { map, join, split, head, upperCase, camelCase } from "lodash/fp";
import { writeFileSync } from "fs";

export const isFirstLetterCapitalized = (key: string) => {
  const firstLetter = head(split("", key));
  return upperCase(firstLetter) === firstLetter;
};

export const convertMappingExported = (key1: string): string => {
  return `  ${camelCase(key1)}: Cesium.${key1};`;
};

export const convertMappingTypeOf = (key1: string): string => {
  return `  ${camelCase(key1)}: typeof Cesium["${key1}"];`;
};

export const convertAllValues = (keys: string[]) => {
  return `// @ts-nocheck
// Generated Code, do not edit manually
import * as Cesium from "cesium";

export type MappingExported = {
${join(
  "\n",
  map((key: string) => convertMappingExported(key), keys)
)}
};

export type MappingTypeofExport = {
${join(
  "\n",
  map((key: string) => convertMappingTypeOf(key), keys)
)}
};`;
};

// We don't want to test those functions
/* istanbul ignore next */
/**
 * This functions generates a file containing 2 mappings necessary in order to
 * have proper typing of react-cesium-fiber elements.
 *
 * It needs to be updated on every release of CesiumJs.
 * Maybe we should put those types in a different package in order to avoid tying
 * react-cesium-fiber releases with cesium ones.
 */
export const generateTypes = () =>
  writeFileSync(
    "./src/generated-mapping.ts",
    convertAllValues(Object.keys(Cesium).filter(isFirstLetterCapitalized))
  );

/* istanbul ignore next */
if (require.main === module) {
  generateTypes();
  console.log("mapping types generated!");
}
