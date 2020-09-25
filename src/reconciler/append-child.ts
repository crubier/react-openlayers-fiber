import { Reconciler, OlObject, Detach } from "./types";

import { Map, View } from "ol";
import Layer from "ol/layer/Layer";
import Control from "ol/control/Control";
import Interaction from "ol/interaction/Interaction";
import Overlay from "ol/Overlay";
import Source from "ol/source/Source";
import Geometry from "ol/geom/Geometry";

import { error001, error002 } from "../utils/errors";

// const defaultAttach = (container: OlObject, child: OlObject): Detach => {
//   const containerKind = container.constructor.name;
//   const childKind = child.constructor.name;
// };

export const appendChild = ((containerNode, childNode) => {
  console.log("containerNode");
  console.log(containerNode);
  console.log("childNode");
  console.log(childNode);
  const { olObject: container, kind: containerKind } = containerNode;
  const { olObject: child, kind: childKind, attach } = childNode;

  switch (typeof attach) {
    case "string":
      container[attach] = child;
      break;
    case "function":
      childNode.detach = attach(container, child);
      break;
    default: {
      switch (containerKind) {
        case "Map": {
          switch (childKind) {
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
              throw error002(containerKind, childKind);
          }
        }
        case "Layer": {
          switch (childKind) {
            case "Source":
              (container as Layer).setSource(child as Source);
              return (container, child) => (container as Layer).unset("source"); // Dubious at best

            default:
              throw error002(containerKind, childKind);
          }
        }
        case "Source": {
          switch (childKind) {
            case "Source":
              (container as Layer).setSource(child as Source);
              return (container, child) => (container as Layer).unset("source"); // Dubious at best

            default:
              throw error002(containerKind, childKind);
          }
        }
        default:
          throw error002(containerKind, childKind);
      }
    }

    // default:
    // throw error001;
  }
}) as Reconciler["appendChild"];
