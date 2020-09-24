import { Reconciler } from "./types";

export const prepareUpdate = ((
  instance,
  type,
  oldProps: object,
  newProps: object,
  rootContainerInstance,
  host
) => {
  const oldKeys = Object.keys(oldProps);
  const newKeys = Object.keys(newProps);

  // keys have same length
  if (oldKeys.length !== newKeys.length) {
    return true;
  } // keys are the same
  else if (oldKeys.some((value, index) => newKeys[index] !== value)) {
    return true;
  } else {
    return oldKeys
      .filter((key) => key !== "children")
      .some((key) => oldProps[key] !== newProps[key]);
  }
}) as Reconciler["prepareUpdate"];
