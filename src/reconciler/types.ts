import { PropsWithChildren } from "react";
import { HostConfig } from "react-reconciler";
import OlObject from "ol/Object"

export type Detach = (container: OlObject, child: OlObject) => void;
export type Attach =
  | string
  | ((container: OlObject, child: OlObject) => Detach);

// Types for React-reconciler
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
  olObject: OlObject;
  attach?: Attach;
  detach: (container: Container, child: Container) => void;
};

export type TextInstance = null;

export type HydratableInstance = Instance;

export type PublicInstance = Instance["olObject"];

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
