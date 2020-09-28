import { PropsWithChildren } from "react";
import { Fiber, HostConfig } from "react-reconciler";

import { Object as OlObject } from "ol";

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
