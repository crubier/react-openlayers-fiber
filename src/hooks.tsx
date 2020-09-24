import { useEffect, useCallback } from "react";

import { useViewer } from "./context";

export const usePostUpdate = (callback, dependencyArray) => {
  const viewer = useViewer();
  const memoisedCallback = useCallback(callback, dependencyArray);

  useEffect(() => {
    if (viewer != null) {
      const { scene } = viewer;
      return scene.postUpdate.addEventListener(memoisedCallback);
      // returns a function to remove the event listener
    }
  }, [callback, viewer]);
};

export const usePostRender = (callback, dependencyArray) => {
  const viewer = useViewer();
  const memoisedCallback = useCallback(callback, dependencyArray);

  useEffect(() => {
    if (viewer != null) {
      const { scene } = viewer;
      return scene.postRender.addEventListener(memoisedCallback);
      // returns a function to remove the event listener
    }
  }, [callback, viewer]);
};

export const usePreUpdate = (callback, dependencyArray) => {
  const viewer = useViewer();
  const memoisedCallback = useCallback(callback, dependencyArray);

  useEffect(() => {
    if (viewer != null) {
      const { scene } = viewer;
      return scene.preUpdate.addEventListener(memoisedCallback);
      // returns a function to remove the event listener
    }
  }, [callback, viewer]);
};

export const usePreRender = (callback, dependencyArray) => {
  const viewer = useViewer();
  const memoisedCallback = useCallback(callback, dependencyArray);

  useEffect(() => {
    if (viewer != null) {
      const { scene } = viewer;
      return scene.preRender.addEventListener(memoisedCallback);
      // returns a function to remove the event listener
    }
  }, [callback, viewer]);
};
