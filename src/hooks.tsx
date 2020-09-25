import { useEffect, useCallback } from "react";

import { useMap } from "./context";

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
