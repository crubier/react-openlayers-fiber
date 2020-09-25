import { updateOlObject } from "../utils/update-ol-object";
import { Reconciler } from "./types";

export const commitUpdate = ((
  instance,
  updatePayload,
  type,
  oldProps,
  newProps: React.PropsWithChildren<{
    args?: any;
    onUpdate?: any;
    [key: string]: any;
  }>
) => {
  const { olObject } = instance;
  const { children, args, onUpdate, ...props } = newProps;

  updateOlObject(olObject, oldProps, props);

  if (typeof onUpdate === "function") {
    onUpdate(olObject);
  }
}) as Reconciler["commitUpdate"];
