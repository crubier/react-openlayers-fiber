import { upperFirst } from "lodash/fp";

import { kindMapping, mapping } from "../generated-mapping";

import { error004, error005 } from "../utils/errors";
import { isFunction, isNil } from "lodash/fp";

import { updateOlObject } from "../utils/update-ol-object";

import { Reconciler } from "./types";

export const createInstance = ((
  type,
  props,
  rootContainerInstance,
  getChildHostContext,
  internalInstanceHandle
) => {
  const {
    args = [],
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
    olObject = new target({ ...otherProps }, ...args);
  } else if (isFunction(target[constructFrom])) {
    olObject = target[constructFrom](...args);
  } else {
    throw error005(constructFrom, target);
  }

  updateOlObject(olObject, {}, otherProps);
  return { kind: kindMapping[type], type, olObject, attach: attach };
}) as Reconciler["createInstance"];
