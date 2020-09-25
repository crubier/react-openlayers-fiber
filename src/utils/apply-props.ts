import { startsWith } from "lodash/fp";
import OlObject from "ol/Object";

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

/**
 *
 * This code checks, for every given props,
 * if the ol entity has a setter for the prop.
 * If it has one, it sets the value to the ol object,
 * but it only sets it if it changed from the previous props.
 *
 * @param olObject The ol object to update
 * @param newProps The newProps potentially containing new changes
 */
export const applyProps = (
  olObject: OlObject,
  oldProps: object = {},
  newProps: object
): void => {
  const olObjectKeys = olObject.getKeys();
  Object.entries(newProps)
    // .filter(([key]) => includes(key, olObjectKeys))
    .forEach(([key, value]) => {
      if (oldProps[key] !== newProps[key]) {
        // For special cases (for example ol objects that have an option called "key"), we can add a "_" before.
        const olKey = startsWith("_", key) ? key.substring(1) : key;
        olObject.set(olKey, value);
      }
    });
};
