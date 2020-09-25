import { upperFirst } from "lodash/fp";

import { kindMapping, mapping } from "../generated-mapping";

import { error004, error005 } from "../utils/errors";
import { isFunction, isNil, isArray, mapKeys, startsWith } from "lodash/fp";

import { applyProps } from "../utils/apply-props";

import { Reconciler } from "./types";

export const createInstance = ((
  type,
  props,
  rootContainerInstance,
  getChildHostContext,
  internalInstanceHandle
) => {
  const {
    args,
    constructFrom,
    attach,
    children,
    ...otherProps
  } = props;

  const target = mapping[type];

  let olObject;

  if (isNil(target)) {
    throw error004(type);
  } else if (isNil(constructFrom)) {
    if (isNil(args)) {
      olObject = new target(
        mapKeys(
          (key) => (startsWith("_", key) ? key.substring(1) : key),
          otherProps
        )
      );
    } else if (isArray(args)) {
      olObject = new target(...args);
    } else {
      new target(args);
    }
  } else if (isFunction(target[constructFrom])) {
    olObject = target[constructFrom](...args);
  } else {
    throw error005(constructFrom, target);
  }

  applyProps(olObject, {}, otherProps);
  return { kind: kindMapping[type], type, olObject, attach: attach };
}) as Reconciler["createInstance"];
