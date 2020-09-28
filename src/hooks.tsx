import {
  useEffect,
  useCallback,
  useState,
  useRef,
  useLayoutEffect,
} from "react";

export { useMap } from "./context";


export function useResource<T>(
  optionalRef?: React.MutableRefObject<T>
): React.MutableRefObject<T> {
  const [_, forceUpdate] = useState(false);
  const localRef = useRef<T>((undefined as unknown) as T);
  const ref = optionalRef ? optionalRef : localRef;
  useLayoutEffect(() => void forceUpdate((i) => !i), []);
  return ref;
}

export function useUpdate<T>(
  callback: (props: T) => void,
  dependents: any[],
  optionalRef?: React.MutableRefObject<T>
): React.MutableRefObject<T> | React.MutableRefObject<undefined> {
  const localRef = useRef();
  const ref = optionalRef ? optionalRef : localRef;
  const prevDependentsRef = useRef(dependents);

  useEffect(() => {
    prevDependentsRef.current = dependents;
  });

  useLayoutEffect(() => {
    if (ref.current && prevDependentsRef.current !== dependents) {
      callback(ref.current);
    }
  }, [callback, dependents, ref]);
  return ref;
}

// export const usePostUpdate = (callback, dependencyArray) => {
//   const map = useMap();
//   const memoisedCallback = useCallback(callback, dependencyArray);

//   useEffect(() => {
//     if (map != null) {
//       const { scene } = map;
//       return scene.postUpdate.addEventListener(memoisedCallback);
//       // returns a function to remove the event listener
//     }
//   }, [callback, map]);
// };

// export const usePostRender = (callback, dependencyArray) => {
//   const map = useMap();
//   const memoisedCallback = useCallback(callback, dependencyArray);

//   useEffect(() => {
//     if (map != null) {
//       const { scene } = map;
//       return scene.postRender.addEventListener(memoisedCallback);
//       // returns a function to remove the event listener
//     }
//   }, [callback, map]);
// };

// export const usePreUpdate = (callback, dependencyArray) => {
//   const map = useMap();
//   const memoisedCallback = useCallback(callback, dependencyArray);

//   useEffect(() => {
//     if (map != null) {
//       const { scene } = map;
//       return scene.preUpdate.addEventListener(memoisedCallback);
//       // returns a function to remove the event listener
//     }
//   }, [callback, map]);
// };

// export const usePreRender = (callback, dependencyArray) => {
//   const map = useMap();
//   const memoisedCallback = useCallback(callback, dependencyArray);

//   useEffect(() => {
//     if (map != null) {
//       const { scene } = map;
//       return scene.preRender.addEventListener(memoisedCallback);
//       // returns a function to remove the event listener
//     }
//   }, [callback, map]);
// };
