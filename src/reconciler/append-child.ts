import { Reconciler, OlObject, Detach } from "./types";

import { Map, View, Feature } from "ol";
import Layer from "ol/layer/Layer";
import Control from "ol/control/Control";
import Interaction from "ol/interaction/Interaction";
import Overlay from "ol/Overlay";
import Source from "ol/source/Source";
import SourceVector from "ol/source/Vector";
import Geometry from "ol/geom/Geometry";

import { error001, error002 } from "../utils/errors";

// const defaultAttach = (containerOlObject: OlObject, childOlObject: OlObject): Detach => {
//   const containerKind = containerOlObject.constructor.name;
//   const childKind = childOlObject.constructor.name;
// };

export const appendChild = ((containerNode, childNode) => {
  console.log("containerNode");
  console.log(containerNode);
  console.log("childNode");
  console.log(childNode);
  const {
    olObject: containerOlObject,
    kind: containerKind,
    type: containerType,
  } = containerNode;
  const {
    olObject: childOlObject,
    kind: childKind,
    type: childType,
    attach,
  } = childNode;

  switch (typeof attach) {
    case "string":
      containerOlObject[attach] = childOlObject;
      break;
    case "function":
      childNode.detach = attach(containerOlObject, childOlObject);
      break;
    default: {
      switch (containerKind) {
        case "Map": {
          switch (childKind) {
            case "View":
              (containerOlObject as Map).setView(childOlObject as View);
              return (containerOlObject, childOlObject) =>
                (containerOlObject as Map).unset("view"); // Dubious at best
            case "Layer":
              (containerOlObject as Map).addLayer(childOlObject as Layer);
              return (containerOlObject, childOlObject) =>
                (containerOlObject as Map).removeLayer(childOlObject as Layer);
            case "Control":
              (containerOlObject as Map).addControl(childOlObject as Control);
              return (containerOlObject, childOlObject) =>
                (containerOlObject as Map).removeControl(
                  childOlObject as Control
                );
            case "Interaction":
              (containerOlObject as Map).addInteraction(
                childOlObject as Interaction
              );
              return (containerOlObject, childOlObject) =>
                (containerOlObject as Map).removeInteraction(
                  childOlObject as Interaction
                );
            case "Overlay":
              (containerOlObject as Map).addOverlay(childOlObject as Overlay);
              return (containerOlObject, childOlObject) =>
                (containerOlObject as Map).removeOverlay(
                  childOlObject as Overlay
                );
            default:
              throw error002(containerKind, childKind);
          }
        }
        case "Layer": {
          switch (childKind) {
            case "Source":
              (containerOlObject as Layer).setSource(childOlObject as Source);
              return (containerOlObject, childOlObject) =>
                (containerOlObject as Layer).unset("source"); // Dubious at best
            default:
              throw error002(containerKind, childKind);
          }
        }
        case "Source": {
          switch (containerType) {
            case "olSourceVector":
              switch (childKind) {
                case "Feature":
                  (containerOlObject as SourceVector).addFeature(
                    childOlObject as Feature
                  );
                  return (containerOlObject, childOlObject) =>
                    (containerOlObject as SourceVector).removeFeature(
                      childOlObject
                    ); // Dubious at best
                default:
                  throw error002(containerKind, childKind);
              }
            default:
              throw error002(containerKind, childKind);
          }
        }
        case "Feature": {
          switch (childKind) {
            case "Geom":
              (containerOlObject as Feature).setGeometry(
                childOlObject as Geometry
              );
              return (containerOlObject, childOlObject) =>
                (containerOlObject as Feature).unset("geometry"); // Dubious at best
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
