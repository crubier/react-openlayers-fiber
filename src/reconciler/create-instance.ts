import { upperFirst } from "lodash/fp";
import * as Cesium from "cesium";
import { error004, error005 } from "../utils/errors";
import { isFunction, isNil } from "lodash/fp";

import { updateCesiumObject } from "../utils/update-cesium-object";

import { Reconciler } from "./types";

export const createInstance = ((
  type,
  props,
  rootContainerInstance,
  getChildHostContext,
  internalInstanceHandle
) => {
  const { args = [], constructFrom, attach } = props;

  const name = upperFirst(type);
  const target = Cesium[name];

  let cesiumObject;

  if (isNil(target)) {
    throw error004(name);
  } else if (isNil(constructFrom)) {
    cesiumObject = new target(...args);
  } else if (isFunction(target[constructFrom])) {
    cesiumObject = target[constructFrom](...args);
  } else {
    throw error005(constructFrom, target);
  }

  updateCesiumObject(cesiumObject, {}, props);
  return { cesiumObject, attach: attach };
}) as Reconciler["createInstance"];
