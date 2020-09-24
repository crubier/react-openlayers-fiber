/**
 * Determines if an object as a setter for a given key
 *
 * @param object
 * @param key
 * @returns (boolean) `true` if the object has a setter for the given key.
 * else return `false`
 */
export const hasSetter = (key: string, object: object): boolean =>
  Object.getOwnPropertyDescriptor(object, key)?.set != null;

export const forEachSetterOf = (
  iteratee: (key: string, value: any) => void,
  referenceObject: object,
  object: object
): void => {
  Object.entries(object)
    .filter(([key]) => hasSetter(key, referenceObject))
    .forEach(([key, value]) => iteratee(key, value));
};

/**
 *
 * This code checks, for every given props,
 * if the cesium entity has a setter for the prop.
 * If it has one, it sets the value to the cesium object,
 * but it only sets it if it changed from the previous props.
 *
 * @param cesiumObject The cesium object to update
 * @param props The props potentially containing new changes
 */
export const updateCesiumObject = (
  cesiumObject: object,
  oldProps: object = {},
  props: object
): void => {
  forEachSetterOf(
    (key, value) => {
      if (oldProps[key] !== value) {
        cesiumObject[key] = value;
      }
    },
    Object.getPrototypeOf(cesiumObject),
    props
  );
};
