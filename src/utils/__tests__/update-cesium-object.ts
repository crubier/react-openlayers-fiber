import {
  hasSetter,
  forEachSetterOf,
  updateCesiumObject,
} from "../update-cesium-object";

describe("hasSetter", () => {
  test("type", () => {
    expect(typeof hasSetter).toEqual("function");
  });

  test("simple object", () => {
    expect(hasSetter("setter", {})).toEqual(false);
    expect(hasSetter("setter", { setter: 1 })).toEqual(false);
  });

  test("with setter", () => {
    const obj = {
      set setter(value) {},
    };

    expect(hasSetter("setter", obj)).toEqual(true);
    expect(hasSetter("notASetter", obj)).toEqual(false);
  });
});
describe("forEachSetterOf", () => {
  test("type", () => {
    expect(typeof forEachSetterOf).toEqual("function");
  });

  test("simple example", () => {
    const referenceObject = {
      set setter(value) {},
    };

    const mutableArray = [];
    forEachSetterOf((key) => mutableArray.push(key), referenceObject, {
      setter: "a",
    });

    expect(mutableArray).toEqual(["setter"]);
  });

  test("empty object", () => {
    const referenceObject = {
      set setter(value) {},
    };

    const mutableArray = [];
    forEachSetterOf((key) => mutableArray.push(key), referenceObject, {});

    expect(mutableArray).toEqual([]);
  });

  test("use value", () => {
    const referenceObject = {
      set setter(value) {},
    };

    let mutableObject = {};
    forEachSetterOf(
      (key, value) => (mutableObject[key] = value),
      referenceObject,
      {
        setter: "a",
        setter2: "b",
      }
    );

    expect(mutableObject).toEqual({ setter: "a" });
  });

  test("with multiple setters value", () => {
    const referenceObject = {
      set setter1(value) {
        this.setters.push(value);
      },
      set setter2(value) {
        this.setters.push(value);
      },
      setters: [],
    };

    let mutableObject = {};
    forEachSetterOf(
      (key, value) => (referenceObject[key] = value),
      referenceObject,
      {
        setter1: "a",
        setter2: "b",
        setter3: "c",
      }
    );

    expect(referenceObject).toEqual({
      setter1: undefined,
      setter2: undefined,
      setters: ["a", "b"],
    });
  });
});

describe("updateCesiumObject", () => {
  test("type", () => {
    expect(typeof updateCesiumObject).toEqual("function");
  });

  test("simple object", () => {
    class CesiumObject {
      set setter1(value) {
        this.setters.push(value);
      }
      set setter2(value) {
        this.setters.push(value);
      }

      setters = [];
    }
    const cesiumObject = new CesiumObject();
    updateCesiumObject(
      cesiumObject,
      {
        setter1: "d",
        setter2: "e",
        setter3: "f",
      },
      {
        setter1: "a",
        setter2: "b",
        setter3: "c",
      }
    );

    expect(cesiumObject).toEqual({
      setter1: undefined,
      setter2: undefined,
      setters: ["a", "b"],
    });
  });

  test("Don't update same props", () => {
    class CesiumObject {
      set setter1(value) {
        this.setters.push(value);
      }
      set setter2(value) {
        this.setters.push(value);
      }

      setters = [];
    }
    const cesiumObject = new CesiumObject();
    updateCesiumObject(
      cesiumObject,
      {
        setter1: "a",
        setter2: "e",
        setter3: "f",
      },
      {
        setter1: "a",
        setter2: "b",
        setter3: "c",
      }
    );

    expect(cesiumObject).toEqual({
      setter1: undefined,
      setter2: undefined,
      setters: ["b"],
    });
  });
});
