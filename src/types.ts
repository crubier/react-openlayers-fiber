import React from "react";
import * as Cesium from "cesium";

import { MappingExported, MappingTypeofExport } from "./generated-mapping";

export declare namespace ReactCesiumFiber {
  type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
    ? 1
    : 2) extends <T>() => T extends Y ? 1 : 2
    ? A
    : B;

  type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals<
      { [Q in P]: T[P] },
      { -readonly [Q in P]: T[P] },
      P
    >;
  }[keyof T];

  type Writable<Type> = Pick<Type, WritableKeys<Type>>;

  type NonFunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
  }[keyof T];

  type WithoutFunctionKeys<T> = Pick<T, NonFunctionKeys<T>>;

  // set the values of type `property` to type any
  type TransformProperty<Object, Replacement = any> = {
    [P in keyof Object]: Object[P] extends Cesium.Property
      ? Replacement
      : Object[P];
  };

  type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O;

  type NodeProps<ConstructorOptions = any> = {
    args?: ConstructorOptions;
    constructFrom?: string;
    attach?:
      | string
      | (<Container = any, Child = any>(
          container: Container,
          child: Child
        ) => (container: Container, child: Child) => void);
    onUpdate?: (...args: any[]) => void;
    children?: React.ReactNode;
    ref?: React.Ref<React.ReactNode>;
    key?: React.Key;
  };

  type ComponentWithProperties<Type, ConstructorOptions> = NodeProps<
    ConstructorOptions
  > &
    Partial<WithoutFunctionKeys<Writable<Type>>>;

  type Component<Type, ConstructorOptions> = TransformProperty<
    ComponentWithProperties<Type, ConstructorOptions>
  >;

  type IntrinsicElements = {
    [T in keyof MappingExported]: ReactCesiumFiber.Component<
      MappingExported[T],
      ConstructorParameters<MappingTypeofExport[T]>
    >;
  };
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ReactCesiumFiber.IntrinsicElements {}
  }
}

// A way more elegant solution that avoid generating a mapping
// However, it does not work as typescript doesn't provide a way
// to change the case of a key.
// The problem is that we can have all the JSX intrinsic elements types
// Directly from the one exported in Cesium but in CapitalizedCamelCase ...

// type UpperCamelCaseType = {
//   [T in UpperCamelCaseKeys]: ReactCesiumFiber.Component<
//     typeof Cesium[T],
//     ConstructorParameters<typeof Cesium[T]>
//   >;
// };

// type UpperCamelCaseKeys = {
//   [T in keyof typeof Cesium]: typeof Cesium[T] extends new (...args: any) => any
//     ? T
//     : never;
// }[keyof typeof Cesium];
