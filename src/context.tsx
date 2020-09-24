import { createContext, useContext } from "react";

export const ViewerContext = createContext(null);

export const useViewer = () => useContext(ViewerContext);

export const ViewerProvider = ViewerContext.Provider;
