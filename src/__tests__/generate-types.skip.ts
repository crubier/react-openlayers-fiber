import {
  isFirstLetterCapitalized,
  convertMappingExported,
  convertMappingTypeOf,
  convertAllValues,
} from "../generate-types";

describe("isFirstLetterCapitalized", () => {
  test("empty", () => {
    expect(isFirstLetterCapitalized("")).toEqual(false);
    //@ts-ignore
    expect(isFirstLetterCapitalized()).toEqual(false);
    //@ts-ignore
    expect(isFirstLetterCapitalized(null)).toEqual(false);
  });

  test("simple", () => {
    expect(isFirstLetterCapitalized("a")).toEqual(false);
    expect(isFirstLetterCapitalized("A")).toEqual(true);
  });

  test("full word", () => {
    expect(isFirstLetterCapitalized("word")).toEqual(false);
    expect(isFirstLetterCapitalized("Word")).toEqual(true);
  });
});

describe("convert single lines", () => {
  test("convertMappingExported", () => {
    expect(convertMappingExported("test")).toEqual("  test: ol.test;");
  });

  test("convertMappingTypeOf", () => {
    expect(convertMappingTypeOf("test")).toEqual(
      '  test: typeof ol["test"];'
    );
  });
});

describe("convertAllValues", () => {
  test("type", () => {
    expect(typeof convertAllValues).toEqual("function");
  });

  test("simple", () => {
    expect(convertAllValues(["test"])).toEqual(`// @ts-nocheck
// Generated Code, do not edit manually
import * as ol from \"ol\";

export type MappingExported = {
  test: ol.test;
};

export type MappingTypeofExport = {
  test: typeof ol[\"test\"];
};`);
  });
});
