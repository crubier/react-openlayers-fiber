import { isString } from "lodash/fp";
import { destroyObject } from "cesium";
import { error003 } from "../utils/errors";
import { isFunction } from "lodash/fp";

import { Reconciler } from "./types";

export const removeChild = ((
  { cesiumObject: container },
  { cesiumObject: child, attach, detach }
) => {
  if (isFunction(detach)) {
    detach(container, child);
  } else if (isString(attach)) {
    container[attach] = null;
  } else {
    throw error003(container.constructor.name, child.constructor.name);
  }

  destroyObject(child);
}) as Reconciler["removeChild"];
