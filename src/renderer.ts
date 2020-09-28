import React, { PropsWithChildren } from "react";
import ReactReconciler, { Fiber, HostConfig } from "react-reconciler";
import {
  unstable_now as now,
  unstable_IdlePriority as idlePriority,
  unstable_runWithPriority as run,
} from "scheduler";

import {  catalogue, CatalogueKey } from "./catalogue";

import {
  isFunction,
  isNil,
  isString,
  isArray,
  mapKeys,
  startsWith,
  upperFirst,
} from "lodash/fp";

// Imports from the imperative lib

import {
  Map as OlMap,
  Object as OlObject,
  View as OlView,
  Feature as OlFeature,
} from "ol";
import Layer from "ol/layer/Layer";
import Control from "ol/control/Control";
import Interaction from "ol/interaction/Interaction";
import Overlay from "ol/Overlay";
import Source from "ol/source/Source";
import SourceVector from "ol/source/Vector";
import SourceCluster from "ol/source/Cluster";
import Geometry from "ol/geom/Geometry";



export interface ObjectHash {
  [name: string]: OlObject
}

export type Detach = (container: OlObject, child: OlObject) => void;
export type Attach =
  | string
  | ((
      container: OlObject,
      child: OlObject,
      parentInstance: Instance,
      childInstance: Instance,
    ) => Detach);

export type Type = string;

export type Props = PropsWithChildren<{
  args?: any[];
  options?: { [key: string]: any };
  attach?: Attach;
  onUpdate?: any;
  constructFrom: string;
  [key: string]: any;
}>;

export type Container = OlObject;

export type Instance = {
  kind: string;
  type: string;
  olObject: OlObject;
  attach?: Attach;
  detach?: (container: Container, child: Container) => void;
};

export type OpaqueHandle = Fiber;
export type TextInstance = null;
export type HydratableInstance = Instance;
export type PublicInstance = OlObject;
export type HostContext = {};
export type UpdatePayload = boolean;
export type ChildSet = void;
export type TimeoutHandle = TimerHandler;
export type NoTimeout = -1;

export type Reconciler = HostConfig<
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  HydratableInstance,
  PublicInstance,
  HostContext,
  UpdatePayload,
  ChildSet,
  TimeoutHandle,
  NoTimeout
>;


const instances = new Map();
const emptyObject = {};
const noOp = () => {};

const error002 = (containerType, childType) =>
  new Error(
    `React-Openlayers-Fiber Error: Couldn't add this child to this container. You can specify how to attach this type of child ("${childType}") to this type of container ("${containerType}") using the "attach" props.`
  );

export const createInstance = (
  type: Type,
  props: Props,
  rootContainerInstance: Container,
  hostContext: HostContext,
  internalInstanceHandle: OpaqueHandle
): Instance => {
  let instance;

  if (type === "primitive") {
    // <primitive/> Elements like in react three fiber
    const { object } = props;
    instance = object;
  } else if (type === "new") {
    // <new/> Elements like in react three fiber
    const { object, args } = props;
    instance = new object(...args);
  } else {
    const { args, constructFrom, attach, children, ...otherProps } = props;

    let name = upperFirst(type);

    const target = catalogue[type as CatalogueKey];

    let olObject;

    if (isNil(target)) {
      new Error(`React-Openlayers-Fiber Error: ${type} is not exported by ol.`);
    } else if (isNil(constructFrom)) {
      if (isNil(args)) {
        olObject = new target(
          mapKeys(
            (key) => (startsWith("_", key) ? key.substring(1) : key),
            otherProps
          )
        );
      } else if (isArray(args)) {
        olObject = new target(...args);
      } else {
        new target(args);
      }
    } else if (isFunction(target[constructFrom])) {
      olObject = target[constructFrom](...args);
    } else {
      throw new Error(
        `React-Openlayers-Fiber Error: ${constructFrom} is not a constructor for ${target}`
      );
    }
    const kind = catalogue[type as CatalogueKey].kind;

    applyProps(olObject, {}, otherProps);

    return {
      kind,
      type,
      olObject,
      attach: attach,
    };
  }
};

/**
 *
 * This code checks, for every given props,
 * if the ol entity has a setter for the prop.
 * If it has one, it sets the value to the ol object,
 * but it only sets it if it changed from the previous props.
 *
 * @param olObject The ol object to update
 * @param newProps The newProps potentially containing new changes
 */
export const applyProps = (
  olObject: OlObject,
  oldProps: object = {},
  newProps: object
): void => {
  const olObjectKeys = olObject.getKeys();
  Object.entries(newProps)
    // .filter(([key]) => includes(key, olObjectKeys))
    .forEach(([key, value]) => {
      if (oldProps[key] !== newProps[key]) {
        // For special cases (for example ol objects that have an option called "key"), we can add a "_" before.
        const olKey = startsWith("_", key) ? key.substring(1) : key;
        olObject.set(olKey, value);
      }
    });
};

// Not used as of today, feel free to implement something cool instead of this
export const getRootHostContext = (
  rootContainerInstance: Container
): HostContext => emptyObject;

// Not used as of today, feel free to implement something cool instead of this
export const getChildHostContext = (
  parentHostContext: HostContext,
  type: Type,
  rootContainerInstance: Container
): HostContext => {
  return typeof parentHostContext === "string"
    ? parentHostContext + "." + type
    : type;
};

export const shouldSetTextContent = (() => {
  return false;
}) as Reconciler["shouldSetTextContent"];

export const removeChild = ((
  { olObject: container },
  { olObject: child, attach, detach }
) => {
  if (isFunction(detach)) {
    detach(container, child);
  } else if (isString(attach)) {
    container[attach] = null;
  } else {
    new Error(
      `React-Openlayers-Fiber Error: Couldn't remove this child from this container. You can specify how to detach this type of child ("${child.constructor.name}") from this type of container ("${container.constructor.name}") using the "attach" props.`
    );
  }
}) as Reconciler["removeChild"];

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

export const getPublicInstance = (
  instance: Instance | TextInstance
): PublicInstance => {
  return instance.olObject;
};

export const finalizeInitialChildren = (() =>
  false) as Reconciler["finalizeInitialChildren"];

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

  applyProps(olObject, oldProps, props);

  if (typeof onUpdate === "function") {
    onUpdate(olObject);
  }
}) as Reconciler["commitUpdate"];

export const appendInitialChild = (
  parentInstance: Instance,
  child: Instance | TextInstance
): void => {};

export const defaultAttach = (
  parent: PublicInstance,
  child: PublicInstance,
  parentInstance: Instance,
  childInstance: Instance | TextInstance
): Detach => {
  const {
    olObject: containerOlObject,
    kind: containerKind,
    type: containerType,
  } = parentInstance;
  const {
    olObject: childOlObject,
    kind: childKind,
    type: childType,
    attach,
  } = childInstance;

  switch (containerKind) {
    case "Map": {
      switch (childKind) {
        case "View":
          (containerOlObject as OlMap).setView(childOlObject as OlView);
          return (containerOlObject, childOlObject) =>
            (containerOlObject as OlMap).unset("view"); // Dubious at best
        case "Layer":
          (containerOlObject as OlMap).addLayer(childOlObject as Layer);
          return (containerOlObject, childOlObject) =>
            (containerOlObject as OlMap).removeLayer(childOlObject as Layer);
        case "Control":
          (containerOlObject as OlMap).addControl(childOlObject as Control);
          return (containerOlObject, childOlObject) =>
            (containerOlObject as OlMap).removeControl(
              childOlObject as Control
            );
        case "Interaction":
          (containerOlObject as OlMap).addInteraction(
            childOlObject as Interaction
          );
          return (containerOlObject, childOlObject) =>
            (containerOlObject as OlMap).removeInteraction(
              childOlObject as Interaction
            );
        case "Overlay":
          (containerOlObject as OlMap).addOverlay(childOlObject as Overlay);
          return (containerOlObject, childOlObject) =>
            (containerOlObject as OlMap).removeOverlay(
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
      switch (childKind) {
        case "Feature":
          (containerOlObject as SourceVector).addFeature(
            childOlObject as OlFeature
          );
          return (containerOlObject, childOlObject) =>
            (containerOlObject as SourceVector).removeFeature(
              childOlObject as OlFeature
            ); // Dubious at best
        case "Source":
          (containerOlObject as SourceCluster).setSource(
            childOlObject as SourceVector
          );
          return (containerOlObject, childOlObject) =>
            (containerOlObject as SourceCluster).unset("source"); // Dubious at best
        default:
          throw error002(containerKind, childKind);
      }
    }
    case "Feature": {
      switch (childKind) {
        case "Geom":
          (containerOlObject as OlFeature).setGeometry(
            childOlObject as Geometry
          );
          return (containerOlObject, childOlObject) =>
            (containerOlObject as OlFeature).unset("geometry"); // Dubious at best
        default:
          throw error002(containerKind, childKind);
      }
    }
    default:
      throw error002(containerKind, childKind);
  }
};

export const appendChild = (
  parentInstance: Instance,
  childInstance: Instance | TextInstance
): void => {
  const { olObject: containerOlObject } = parentInstance;
  const { olObject: childOlObject, attach } = childInstance;

  if (isFunction(attach)) {
    childInstance.detach = attach(
      containerOlObject,
      childOlObject,
      parentInstance,
      childInstance
    );
  } else if (isNil(attach)) {
    childInstance.detach = defaultAttach(
      containerOlObject,
      childOlObject,
      parentInstance,
      childInstance
    );
  } else if (isString(attach)) {
    containerOlObject[attach] = childOlObject;
    childInstance.detach = (containerOlObject, childOlObject) => {
      delete containerOlObject[attach];
    };
  } else {
    throw new Error(`React-Openlayers-Fiber Error: Unsupported "attach" type.`);
  }
};

// TODO write this
function insertBefore(parentInstance: any, child: any, beforeChild: any) {
  if (child) {
    // if (child.isObject3D) {
    //   child.parent = parentInstance;
    //   child.dispatchEvent({ type: "added" });
    //   const restSiblings = parentInstance.children.filter(
    //     (sibling: any) => sibling !== child
    //   );
    //   // TODO: the order is out of whack if data objects are present, has to be recalculated
    //   const index = restSiblings.indexOf(beforeChild);
    //   parentInstance.children = [
    //     ...restSiblings.slice(0, index),
    //     child,
    //     ...restSiblings.slice(index),
    //   ];
    //   // updateInstance(child);
    // } else {
    appendChild(parentInstance, child);
    // } // TODO: order!!!
    // invalidateInstance(child);
  }
}

const hideInstance = (instance: Instance) => {
  switch (instance.kind) {
    case "Layer": {
      (instance.olObject as Layer).setVisible(false);
    }
  }
};

const unhideInstance = (instance: Instance, props: Props) => {
  switch (instance.kind) {
    case "Layer": {
      (instance.olObject as Layer).setVisible(true);
    }
  }
};

const prepareForCommit = (containerInfo: Container): void => {};

const resetAfterCommit = (containerInfo: Container): void => {};

const hideTextInstance = () => {
  throw new Error(
    "React-Openlayers-Fiber Error: Text is not allowed in the react-openlayers-fiber tree. You may have extraneous whitespace between components."
  );
};

const unhideTextInstance = () => {
  throw new Error(
    "React-Openlayers-Fiber Error: Text is not allowed in the react-openlayers-fiber tree. You may have extraneous whitespace between components."
  );
};

const reconciler = ReactReconciler<
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  HydratableInstance,
  PublicInstance,
  HostContext,
  UpdatePayload,
  ChildSet,
  TimeoutHandle,
  NoTimeout
>({
  getPublicInstance,
  getRootHostContext,
  getChildHostContext,

  prepareForCommit,
  resetAfterCommit,

  createInstance,
  appendInitialChild: appendChild,
  finalizeInitialChildren(
    parentInstance: Instance,
    type: Type,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext
  ): boolean;,

  // prepareUpdate(
  //     instance: Instance,
  //     type: Type,
  //     oldProps: Props,
  //     newProps: Props,
  //     rootContainerInstance: Container,
  //     hostContext: HostContext,
  // ): null | UpdatePayload;

  // shouldSetTextContent(type: Type, props: Props): boolean;
  // shouldDeprioritizeSubtree(type: Type, props: Props): boolean;

  // createTextInstance(
  //     text: string,
  //     rootContainerInstance: Container,
  //     hostContext: HostContext,
  //     internalInstanceHandle: OpaqueHandle,
  // ): TextInstance;

  // scheduleDeferredCallback(
  //     callback: () => any,
  //     options?: { timeout: number },
  // ): any;
  // cancelDeferredCallback(callbackID: any): void;

  // setTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandle | NoTimeout;
  // clearTimeout(handle: TimeoutHandle | NoTimeout): void;
  // noTimeout: NoTimeout;

  // now(): number;

  // // Temporary workaround for scenario where multiple renderers concurrently
  // // render using the same context objects. E.g. React DOM and React ART on the
  // // same page. DOM is the primary renderer; ART is the secondary renderer.
  // isPrimaryRenderer: boolean;

  // supportsMutation: boolean;
  // supportsPersistence: boolean;
  // supportsHydration: boolean;

  // // -------------------
  // //      Mutation
  // //     (optional)
  // // -------------------
  // appendChild,
  // appendChildToContainer?(container: Container, child: Instance | TextInstance): void;
  // commitTextUpdate?(textInstance: TextInstance, oldText: string, newText: string): void;
  // commitMount?(
  //     instance: Instance,
  //     type: Type,
  //     newProps: Props,
  //     internalInstanceHandle: OpaqueHandle,
  // ): void;
  // commitUpdate?(
  //     instance: Instance,
  //     updatePayload: UpdatePayload,
  //     type: Type,
  //     oldProps: Props,
  //     newProps: Props,
  //     internalInstanceHandle: OpaqueHandle,
  // ): void;
  // insertBefore?(parentInstance: Instance, child: Instance | TextInstance, beforeChild: Instance | TextInstance): void;
  // insertInContainerBefore?(
  //     container: Container,
  //     child: Instance | TextInstance,
  //     beforeChild: Instance | TextInstance,
  // ): void;
  // removeChild?(parentInstance: Instance, child: Instance | TextInstance): void;
  // removeChildFromContainer?(container: Container, child: Instance | TextInstance): void;
  // resetTextContent?(instance: Instance): void;

  // // -------------------
  // //     Persistence
  // //     (optional)
  // // -------------------
  // cloneInstance?(
  //     instance: Instance,
  //     updatePayload: null | UpdatePayload,
  //     type: Type,
  //     oldProps: Props,
  //     newProps: Props,
  //     internalInstanceHandle: OpaqueHandle,
  //     keepChildren: boolean,
  //     recyclableInstance: Instance,
  // ): Instance;

  // createContainerChildSet?(container: Container): ChildSet;

  // appendChildToContainerChildSet?(childSet: ChildSet, child: Instance | TextInstance): void;
  // finalizeContainerChildren?(container: Container, newChildren: ChildSet): void;

  // replaceContainerChildren?(container: Container, newChildren: ChildSet): void;

  // // -------------------
  // //     Hydration
  // //     (optional)
  // // -------------------
  // canHydrateInstance?(instance: HydratableInstance, type: Type, props: Props): null | Instance;
  // canHydrateTextInstance?(instance: HydratableInstance, text: string): null | TextInstance;
  // getNextHydratableSibling?(instance: Instance | TextInstance | HydratableInstance): null | HydratableInstance;
  // getFirstHydratableChild?(parentInstance: Instance | Container): null | HydratableInstance;
  // hydrateInstance?(
  //     instance: Instance,
  //     type: Type,
  //     props: Props,
  //     rootContainerInstance: Container,
  //     hostContext: HostContext,
  //     internalInstanceHandle: OpaqueHandle,
  // ): null | UpdatePayload;
  // hydrateTextInstance?(
  //     textInstance: TextInstance,
  //     text: string,
  //     internalInstanceHandle: OpaqueHandle,
  // ): boolean;
  // didNotMatchHydratedContainerTextInstance?(
  //     parentContainer: Container,
  //     textInstance: TextInstance,
  //     text: string,
  // ): void;
  // didNotMatchHydratedTextInstance?(
  //     parentType: Type,
  //     parentProps: Props,
  //     parentInstance: Instance,
  //     textInstance: TextInstance,
  //     text: string,
  // ): void;
  // didNotHydrateContainerInstance?(parentContainer: Container, instance: Instance | TextInstance): void;
  // didNotHydrateInstance?(
  //     parentType: Type,
  //     parentProps: Props,
  //     parentInstance: Instance,
  //     instance: Instance | TextInstance,
  // ): void;
  // didNotFindHydratableContainerInstance?(
  //     parentContainer: Container,
  //     type: Type,
  //     props: Props,
  // ): void;
  // didNotFindHydratableContainerTextInstance?(
  //     parentContainer: Container,
  //     text: string,
  // ): void;
  // didNotFindHydratableInstance?(
  //     parentType: Type,
  //     parentProps: Props,
  //     parentInstance: Instance,
  //     type: Type,
  //     props: Props,
  // ): void;
  // didNotFindHydratableTextInstance?(
  //     parentType: Type,
  //     parentProps: Props,
  //     parentInstance: Instance,
  //     text: string,
  // ): void;

  ///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////

  // // Boolean flags
  // // @ts-ignore
  // warnsIfNotActing: true,
  // supportsMutation: true,
  // isPrimaryRenderer: false,

  // // Scheduling stuff

  // scheduleTimeout: isFunction(setTimeout) ? setTimeout : undefined,
  // cancelTimeout: isFunction(clearTimeout) ? clearTimeout : undefined,
  // setTimeout: isFunction(setTimeout) ? setTimeout : undefined,
  // clearTimeout: isFunction(clearTimeout) ? clearTimeout : undefined,
  // noTimeout: -1,

  // // Tree manipulation
  // appendInitialChild: appendChild,
  // appendChildToContainer: appendChild,
  // removeChildFromContainer: appendChild,
  // insertInContainerBefore: insertBefore,

  // // Update commit
  // commitUpdate,
  // prepareUpdate,

  // // Hide / unhide stuff
  // hideInstance,
  // unhideInstance,
  // hideTextInstance,
  // unhideTextInstance,

  // //

  // getChildHostContext,

  // finalizeInitialChildren,

  // shouldSetTextContent,

  // createTextInstance(
  //   text: string,
  //   rootContainerInstance: OlObject,
  //   hostContext: any,
  //   internalInstanceHandle: Fiber
  // ) {
  //   return null;
  // },

  // replaceContainerChildren() {},
});

export function render(what: React.ReactNode, where: HTMLElement) {
  let container;
  if (instances.has(where)) {
    container = instances.get(where);
  } else {
    container = reconciler.createContainer(where, false, false);
    instances.set(where, container);
  }

  reconciler.updateContainer(what, container, null, () => null);
  return reconciler.getPublicRootInstance(container);
}
