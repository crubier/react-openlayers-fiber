import { Reconciler } from "./types";

export const shouldSetTextContent = (() => {
  return false;
}) as Reconciler["shouldSetTextContent"];
