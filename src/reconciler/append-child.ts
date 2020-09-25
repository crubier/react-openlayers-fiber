import { Reconciler, OlObject, Detach } from "./types";

import { Map, View } from "ol";
import Layer from "ol/layer/Layer";
import Control from "ol/control/Control";
import Interaction from "ol/interaction/Interaction";
import Overlay from "ol/Overlay";
import Source from "ol/source/Source";
import Geometry from "ol/geom/Geometry";

import { error001, error002 } from "../utils/errors";

const defaultAttach = (container: OlObject, child: OlObject): Detach => {
  const containerType = container.constructor.name;
  const childType = child.constructor.name;

  switch (containerType) {
    case "Map": {
      switch (childType) {
        case "View":
          (container as Map).setView(child as View);
          return (container, child) => (container as Map).unset("view"); // Dubious at best
        case "Layer":
          (container as Map).addLayer(child as Layer);
          return (container, child) =>
            (container as Map).removeLayer(child as Layer);
        case "Control":
          (container as Map).addControl(child as Control);
          return (container, child) =>
            (container as Map).removeControl(child as Control);
        case "Interaction":
          (container as Map).addInteraction(child as Interaction);
          return (container, child) =>
            (container as Map).removeInteraction(child as Interaction);
        case "Overlay":
          (container as Map).addOverlay(child as Overlay);
          return (container, child) =>
            (container as Map).removeOverlay(child as Overlay);
        default:
          throw error002(containerType, childType);
      }
    }
    case "Layer": {
      switch (childType) {
        case "Source":
          (container as Layer).setSource(child as Source);
          return (container, child) => (container as Layer).unset("source"); // Dubious at best
        
        default:
          throw error002(containerType, childType);
      }
    }
    case "Source": {
      switch (childType) {
        case "Source":
          (container as Layer).setSource(child as Source);
          return (container, child) => (container as Layer).unset("source"); // Dubious at best
        
        default:
          throw error002(containerType, childType);
      }
    }
    // case "Viewer": {
    //   switch (childType) {
    //     case "Entity":
    //       (container as Viewer).entities.add(child as Entity);
    //       return (container, child) =>
    //         (container as Viewer).entities.remove(child as Entity);
    //     case "GeoJsonDataSource":
    //     case "CustomDataSource":
    //       (container as Viewer).dataSources.add(child as DataSource);
    //       return (container, child) =>
    //         (container as Viewer).dataSources.remove(child as DataSource, true);

    //     case "Ol3DTileset":
    //       (container as Viewer).scene.primitives.add(child as Primitive);
    //       return (container, child) =>
    //         (container as Viewer).scene.primitives.remove(child as Primitive);

    //     default:
    //       throw error002(containerType, childType);
    //   }
    // }

    default:
      throw error002(containerType, childType);
  }
};

export const appendChild = ((containerNode, childNode) => {
  const { olObject: container } = containerNode;
  const { olObject: child, attach = defaultAttach } = childNode;
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
