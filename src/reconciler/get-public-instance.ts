import { Reconciler } from "./types";

export const getPublicInstance = ((instance) => {
  return instance.cesiumObject;
}) as Reconciler["getPublicInstance"];
