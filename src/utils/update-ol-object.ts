import { includes } from "lodash/fp";
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
 * @param props The props potentially containing new changes
 */
export const updateOlObject = (
  olObject: OlObject,
  oldProps: object = {},
  props: object
): void => {
  const olObjectKeys = olObject.getKeys();
  Object.entries(props)
    .filter(([key]) => includes(key, olObjectKeys))
    .forEach(([key, value]) => {
      if (oldProps[key] !== value) {
        olObject.set(key, value);
      }
    });
};
