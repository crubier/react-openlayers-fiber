import React from "react";

import { Catalogue } from "./catalogue";

export declare namespace ReactOlFiber {
  type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
    ? 1
    : 2) extends <T>() => T extends Y ? 1 : 2
    ? A
    : B;

  /**
   * Get keys whose fields are writable in a class (not readonly)
   */
  type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals<
      { [Q in P]: T[P] },
      { -readonly [Q in P]: T[P] },
      P
    >;
  }[keyof T];

  /**
   * Get keys whose fields are functions in a class
   */
  type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
  }[keyof T];

  /**
   * Get keys whose fields are classes in a class
   */
  type ClassKeys<T> = {
    [K in keyof T]: T[K] extends new (...args: any) => any ? K : never;
  }[keyof T];

  /**
   * Get keys whose fields are ol object catalog elements class with a single option arg in contructor
   */
  type OlObjectCatalogElementKeys<T> = {
    [K in keyof T]: T[K] extends {
      object: new (arg: any, arg2: void) => any /*new <U>(arg?: U) => any*/;
    }
      ? K
      : never;
  }[keyof T];

  type PickWritables<T> = Pick<T, WritableKeys<T>>;
  type OmitWritables<T> = Omit<T, WritableKeys<T>>;

  type PickFunctions<T> = Pick<T, FunctionKeys<T>>;
  type OmitFunctions<T> = Omit<T, FunctionKeys<T>>;

  type PickClasses<T> = Pick<T, ClassKeys<T>>;
  type OmitClasses<T> = Omit<T, ClassKeys<T>>;

  type PickOlObjectCatalogElements<T> = Pick<T, OlObjectCatalogElementKeys<T>>;
  type OmitOlObjectCatalogElements<T> = Omit<T, OlObjectCatalogElementKeys<T>>;

  // /**
  //  * Generic elements based on ol base object
  //  */
  // type ObjectElements = {
  //   [T in keyof ]: ComponentWithProperties<
  //     Catalogue[T]["object"],
  //     ConstructorParameters<Catalogue[T]["object"]>
  //   >;
  // };

  type ObjectProps<T> = {};

  /**
   * Generic elements based on simple ol objects (most usual case)
   */
  type IntrinsicElementsSimpleObject = {
    [T in keyof PickOlObjectCatalogElements<Catalogue>]: Partial<
      // Fields of the class that are not functions (Most of the time there isn't any)
      OmitFunctions<PickWritables<Catalogue[T]["object"]>>
    > &
      // Fields of the options argument of the constructor (First argument)
      ConstructorParameters<Catalogue[T]["object"]>[0] & {
        // Usual props for all elements
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
  };

  /**
   * Generic elements based on more complex constructors
   */
  type IntrinsicElementsArgsObject = {
    [T in keyof OmitOlObjectCatalogElements<Catalogue>]: Partial<
      // Fields of the class that are not functions (Most of the time there isn't any)
      OmitFunctions<PickWritables<Catalogue[T]["object"]>>
    > & // Usual props for all elements
    {
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
      // Fields of the options argument of the constructor (First argument)
      args: ConstructorParameters<Catalogue[T]["object"]>;
    };
  };

  /**
   * Specific ad-hoc elements
   */
  type IntrinsicElementsAdHoc = {
    // Primitive
    primitive: { object: any } & { [properties: string]: any };
  };
}

declare global {
  namespace JSX {
    interface IntrinsicElements
      extends ReactOlFiber.IntrinsicElementsAdHoc,
        ReactOlFiber.IntrinsicElementsSimpleObject,
        ReactOlFiber.IntrinsicElementsArgsObject {}
  }
}
