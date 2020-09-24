import { Reconciler, CesiumObject, Detach } from "./types";
import { Entity, DataSource, Viewer, Primitive } from "cesium";

import { error001, error002 } from "../utils/errors";

const defaultAttach = (
  container: CesiumObject,
  child: CesiumObject
): Detach => {
  const containerType = container.constructor.name;
  const childType = child.constructor.name;

  switch (containerType) {
    case "CustomDataSource":
    case "GeoJsonDataSource": {
      switch (childType) {
        case "Entity":
          (container as DataSource).entities.add(child as Entity);
          return (container, child) =>
            (container as DataSource).entities.remove(child as Entity);
        default:
          throw error002;
      }
    }
    case "Viewer": {
      switch (childType) {
        case "Entity":
          (container as Viewer).entities.add(child as Entity);
          return (container, child) =>
            (container as Viewer).entities.remove(child as Entity);
        case "GeoJsonDataSource":
        case "CustomDataSource":
          (container as Viewer).dataSources.add(child as DataSource);
          return (container, child) =>
            (container as Viewer).dataSources.remove(child as DataSource, true);

        case "Cesium3DTileset":
          (container as Viewer).scene.primitives.add(child as Primitive);
          return (container, child) =>
            (container as Viewer).scene.primitives.remove(child as Primitive);

        default:
          throw error002(containerType, childType);
      }
    }

    default:
      throw error002(containerType, childType);
  }
};

export const appendChild = ((containerNode, childNode) => {
  const { cesiumObject: container } = containerNode;
  const { cesiumObject: child, attach = defaultAttach } = childNode;
  switch (typeof attach) {
    case "string":
      container[attach] = child;
      break;

    case "function":
      childNode.detach = attach(container, child);
      break;
    default:
      throw error001;
  }
}) as Reconciler["appendChild"];
