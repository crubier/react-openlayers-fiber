import { PropsWithChildren } from "react";
import { HostConfig } from "react-reconciler";

//FIXME: Maybe something more explicit
export type CesiumObject = object;

export type Detach = (container: CesiumObject, child: CesiumObject) => void;
export type Attach =
  | string
  | ((container: CesiumObject, child: CesiumObject) => Detach);

// Types for React-reconciler
export type Type = string;

export type Props = PropsWithChildren<{
  args?: any[];
  attach?: Attach;
  onUpdate?: any;
  constructFrom: string;
  [key: string]: any;
}>;

export type Container = CesiumObject;

export type Instance = {
  cesiumObject: CesiumObject;
  attach?: Attach;
  detach: (container: Container, child: Container) => void;
};

export type TextInstance = null;

export type HydratableInstance = Instance;

export type PublicInstance = Instance["cesiumObject"];

export type HostContext = any;

export type UpdatePayload = boolean;

//FIXME: No idea what this is
export type ChildSet = unknown;
export type TimeoutHandle = unknown;
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
