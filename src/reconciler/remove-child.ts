import { error003 } from "../utils/errors";
import { isFunction, isString } from "lodash/fp";

import { Reconciler } from "./types";

export const removeChild = ((
  { olObject: container },
  { olObject: child, attach, detach }
) => {
  if (isFunction(detach)) {
    detach(container, child);
  } else if (isString(attach)) {
    container[attach] = null;
  } else {
    throw error003(container.constructor.name, child.constructor.name);
  }
}) as Reconciler["removeChild"];
