import { upperFirst } from "lodash/fp";

import { mapping } from "../generated-mapping";

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
  const { args = [], options = {}, constructFrom, attach,...otherProps } = props;

  const name = type;
  const target = mapping[name];

  let olObject;

  if (isNil(target)) {
    throw error004(name);
  } else if (isNil(constructFrom)) {
    olObject = new target(options, ...args);
  } else if (isFunction(target[constructFrom])) {
    olObject = target[constructFrom](...args);
  } else {
    throw error005(constructFrom, target);
  }

  updateOlObject(olObject, {}, otherProps);
  return { olObject, attach: attach };
}) as Reconciler["createInstance"];
