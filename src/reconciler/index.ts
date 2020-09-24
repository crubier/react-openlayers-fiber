import ReactReconciler from "react-reconciler";

import { appendChild } from "./append-child";
import { commitUpdate } from "./commit-update";
import { createInstance } from "./create-instance";
import { finalizeInitialChildren } from "./finalize-initial-children";
import { getChildHostContext } from "./get-child-host-context";
import { getPublicInstance } from "./get-public-instance";
import { getRootHostContext } from "./get-root-host-context";
import { prepareUpdate } from "./prepare-update";
import { removeChild } from "./remove-child";
import { shouldSetTextContent } from "./should-set-text-content";

const instances = new Map();
import {
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
  NoTimeout,
} from "./types";

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
  supportsMutation: true,

  appendChild,
  appendInitialChild: appendChild,
  commitUpdate,
  createInstance,
  finalizeInitialChildren,
  getChildHostContext,
  getPublicInstance,
  getRootHostContext,
  prepareUpdate,
  removeChild,
  shouldSetTextContent,

  appendChildToContainer() {},
  // createTextInstance() {},
  prepareForCommit() {},
  removeChildFromContainer() {},
  replaceContainerChildren() {},
  resetAfterCommit() {},
  // @ts-ignore
  switchInstance() {},
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
