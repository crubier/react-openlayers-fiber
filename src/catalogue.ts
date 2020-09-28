import {} from "lodash/fp";

import * as ol from "ol";
import * as olLayer from "ol/layer";
import * as olControl from "ol/control";
import * as olInteraction from "ol/interaction";
import * as olSource from "ol/source";
import * as olGeom from "ol/geom";
import * as olStyle from "ol/style";

export type ModuleOl = {
  [K in keyof typeof ol as `ol${capitalize K}`]: typeof ol[K]
}

export type ModuleOlLayer = {
  [K in keyof typeof olLayer as `olLayer${capitalize K}`]: typeof olLayer[K]
}

export type ModuleOlControl = {
  [K in keyof typeof olControl as `olControl${capitalize K}`]: typeof olControl[K]
}

export type ModuleOlInteraction = {
  [K in keyof typeof olInteraction as `olInteraction${capitalize K}`]: typeof olInteraction[K]
}

export type ModuleOlSource = {
  [K in keyof typeof olSource as `olSource${capitalize K}`]: typeof olSource[K]
}

export type ModuleOlGeom = {
  [K in keyof typeof olGeom as `olGeom${capitalize K}`]: typeof olGeom[K]
}

export type ModuleOlStyle = {
  [K in keyof typeof olStyle as `olStyle${capitalize K}`]: typeof olStyle[K]
}

export type Mapping = ModuleOl &
  ModuleOlLayer &
  ModuleOlControl &
  ModuleOlInteraction &
  ModuleOlSource &
  ModuleOlGeom &
  ModuleOlStyle;

export type OlTagType = keyof Mapping;

