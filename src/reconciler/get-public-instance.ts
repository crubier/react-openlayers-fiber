import { Reconciler } from "./types";

export const getPublicInstance = ((instance) => {
  return instance.olObject;
}) as Reconciler["getPublicInstance"];
