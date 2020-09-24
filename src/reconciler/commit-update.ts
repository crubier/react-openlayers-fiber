import { updateCesiumObject } from "../utils/update-cesium-object";
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
  const { cesiumObject } = instance;
  const { children, args, onUpdate, ...props } = newProps;

  updateCesiumObject(cesiumObject, oldProps, props);

  if (typeof onUpdate === "function") {
    onUpdate(cesiumObject);
  }
}) as Reconciler["commitUpdate"];
