// @ts-nocheck
// Generated Code, do not edit manually
import * as ol from "ol";
import * as layer from "ol/layer";
import * as control from "ol/control";
import * as interaction from "ol/interaction";
import * as source from "ol/source";
import * as geom from "ol/geom";
import Overlay from "ol/Overlay";
const overlay = {Overlay};

export type MappingExported = {
  controlAttribution: typeof control.Attribution;
  controlControl: typeof control.Control;
  controlFullScreen: typeof control.FullScreen;
  controlMousePosition: typeof control.MousePosition;
  controlOverviewMap: typeof control.OverviewMap;
  controlRotate: typeof control.Rotate;
  controlScaleLine: typeof control.ScaleLine;
  controlZoom: typeof control.Zoom;
  controlZoomSlider: typeof control.ZoomSlider;
  controlZoomToExtent: typeof control.ZoomToExtent;
  geomCircle: typeof geom.Circle;
  geomGeometry: typeof geom.Geometry;
  geomGeometryCollection: typeof geom.GeometryCollection;
  geomLineString: typeof geom.LineString;
  geomLinearRing: typeof geom.LinearRing;
  geomMultiLineString: typeof geom.MultiLineString;
  geomMultiPoint: typeof geom.MultiPoint;
  geomMultiPolygon: typeof geom.MultiPolygon;
  geomPoint: typeof geom.Point;
  geomPolygon: typeof geom.Polygon;
  geomSimpleGeometry: typeof geom.SimpleGeometry;
  interactionDoubleClickZoom: typeof interaction.DoubleClickZoom;
  interactionDragAndDrop: typeof interaction.DragAndDrop;
  interactionDragBox: typeof interaction.DragBox;
  interactionDragPan: typeof interaction.DragPan;
  interactionDragRotate: typeof interaction.DragRotate;
  interactionDragRotateAndZoom: typeof interaction.DragRotateAndZoom;
  interactionDragZoom: typeof interaction.DragZoom;
  interactionDraw: typeof interaction.Draw;
  interactionExtent: typeof interaction.Extent;
  interactionInteraction: typeof interaction.Interaction;
  interactionKeyboardPan: typeof interaction.KeyboardPan;
  interactionKeyboardZoom: typeof interaction.KeyboardZoom;
  interactionModify: typeof interaction.Modify;
  interactionMouseWheelZoom: typeof interaction.MouseWheelZoom;
  interactionPinchRotate: typeof interaction.PinchRotate;
  interactionPinchZoom: typeof interaction.PinchZoom;
  interactionPointer: typeof interaction.Pointer;
  interactionSelect: typeof interaction.Select;
  interactionSnap: typeof interaction.Snap;
  interactionTranslate: typeof interaction.Translate;
  layerGraticule: typeof layer.Graticule;
  layerGroup: typeof layer.Group;
  layerHeatmap: typeof layer.Heatmap;
  layerImage: typeof layer.Image;
  layerLayer: typeof layer.Layer;
  layerMapboxVector: typeof layer.MapboxVector;
  layerTile: typeof layer.Tile;
  layerVector: typeof layer.Vector;
  layerVectorImage: typeof layer.VectorImage;
  layerVectorTile: typeof layer.VectorTile;
  layerWebGlPoints: typeof layer.WebGLPoints;
  olCollection: typeof ol.Collection;
  olFeature: typeof ol.Feature;
  olMap: typeof ol.Map;
  olView: typeof ol.View;
  overlayOverlay: typeof overlay.Overlay;
  sourceBingMaps: typeof source.BingMaps;
  sourceCartoDb: typeof source.CartoDB;
  sourceCluster: typeof source.Cluster;
  sourceIiif: typeof source.IIIF;
  sourceImage: typeof source.Image;
  sourceImageArcGisRest: typeof source.ImageArcGISRest;
  sourceImageCanvas: typeof source.ImageCanvas;
  sourceImageMapGuide: typeof source.ImageMapGuide;
  sourceImageStatic: typeof source.ImageStatic;
  sourceImageWms: typeof source.ImageWMS;
  sourceOsm: typeof source.OSM;
  sourceRaster: typeof source.Raster;
  sourceSource: typeof source.Source;
  sourceStamen: typeof source.Stamen;
  sourceTile: typeof source.Tile;
  sourceTileArcGisRest: typeof source.TileArcGISRest;
  sourceTileDebug: typeof source.TileDebug;
  sourceTileImage: typeof source.TileImage;
  sourceTileJson: typeof source.TileJSON;
  sourceTileWms: typeof source.TileWMS;
  sourceUrlTile: typeof source.UrlTile;
  sourceUtfGrid: typeof source.UTFGrid;
  sourceVector: typeof source.Vector;
  sourceVectorTile: typeof source.VectorTile;
  sourceWmts: typeof source.WMTS;
  sourceXyz: typeof source.XYZ;
  sourceZoomify: typeof source.Zoomify;
};

export const mapping = {
  controlAttribution: control.Attribution,
  controlControl: control.Control,
  controlFullScreen: control.FullScreen,
  controlMousePosition: control.MousePosition,
  controlOverviewMap: control.OverviewMap,
  controlRotate: control.Rotate,
  controlScaleLine: control.ScaleLine,
  controlZoom: control.Zoom,
  controlZoomSlider: control.ZoomSlider,
  controlZoomToExtent: control.ZoomToExtent,
  geomCircle: geom.Circle,
  geomGeometry: geom.Geometry,
  geomGeometryCollection: geom.GeometryCollection,
  geomLineString: geom.LineString,
  geomLinearRing: geom.LinearRing,
  geomMultiLineString: geom.MultiLineString,
  geomMultiPoint: geom.MultiPoint,
  geomMultiPolygon: geom.MultiPolygon,
  geomPoint: geom.Point,
  geomPolygon: geom.Polygon,
  geomSimpleGeometry: geom.SimpleGeometry,
  interactionDoubleClickZoom: interaction.DoubleClickZoom,
  interactionDragAndDrop: interaction.DragAndDrop,
  interactionDragBox: interaction.DragBox,
  interactionDragPan: interaction.DragPan,
  interactionDragRotate: interaction.DragRotate,
  interactionDragRotateAndZoom: interaction.DragRotateAndZoom,
  interactionDragZoom: interaction.DragZoom,
  interactionDraw: interaction.Draw,
  interactionExtent: interaction.Extent,
  interactionInteraction: interaction.Interaction,
  interactionKeyboardPan: interaction.KeyboardPan,
  interactionKeyboardZoom: interaction.KeyboardZoom,
  interactionModify: interaction.Modify,
  interactionMouseWheelZoom: interaction.MouseWheelZoom,
  interactionPinchRotate: interaction.PinchRotate,
  interactionPinchZoom: interaction.PinchZoom,
  interactionPointer: interaction.Pointer,
  interactionSelect: interaction.Select,
  interactionSnap: interaction.Snap,
  interactionTranslate: interaction.Translate,
  layerGraticule: layer.Graticule,
  layerGroup: layer.Group,
  layerHeatmap: layer.Heatmap,
  layerImage: layer.Image,
  layerLayer: layer.Layer,
  layerMapboxVector: layer.MapboxVector,
  layerTile: layer.Tile,
  layerVector: layer.Vector,
  layerVectorImage: layer.VectorImage,
  layerVectorTile: layer.VectorTile,
  layerWebGlPoints: layer.WebGLPoints,
  olCollection: ol.Collection,
  olFeature: ol.Feature,
  olMap: ol.Map,
  olView: ol.View,
  overlayOverlay: overlay.Overlay,
  sourceBingMaps: source.BingMaps,
  sourceCartoDb: source.CartoDB,
  sourceCluster: source.Cluster,
  sourceIiif: source.IIIF,
  sourceImage: source.Image,
  sourceImageArcGisRest: source.ImageArcGISRest,
  sourceImageCanvas: source.ImageCanvas,
  sourceImageMapGuide: source.ImageMapGuide,
  sourceImageStatic: source.ImageStatic,
  sourceImageWms: source.ImageWMS,
  sourceOsm: source.OSM,
  sourceRaster: source.Raster,
  sourceSource: source.Source,
  sourceStamen: source.Stamen,
  sourceTile: source.Tile,
  sourceTileArcGisRest: source.TileArcGISRest,
  sourceTileDebug: source.TileDebug,
  sourceTileImage: source.TileImage,
  sourceTileJson: source.TileJSON,
  sourceTileWms: source.TileWMS,
  sourceUrlTile: source.UrlTile,
  sourceUtfGrid: source.UTFGrid,
  sourceVector: source.Vector,
  sourceVectorTile: source.VectorTile,
  sourceWmts: source.WMTS,
  sourceXyz: source.XYZ,
  sourceZoomify: source.Zoomify,
};

export const kindMapping = {
  controlAttribution: "Control",
  controlControl: "Control",
  controlFullScreen: "Control",
  controlMousePosition: "Control",
  controlOverviewMap: "Control",
  controlRotate: "Control",
  controlScaleLine: "Control",
  controlZoom: "Control",
  controlZoomSlider: "Control",
  controlZoomToExtent: "Control",
  geomCircle: "Geom",
  geomGeometry: "Geom",
  geomGeometryCollection: "Geom",
  geomLineString: "Geom",
  geomLinearRing: "Geom",
  geomMultiLineString: "Geom",
  geomMultiPoint: "Geom",
  geomMultiPolygon: "Geom",
  geomPoint: "Geom",
  geomPolygon: "Geom",
  geomSimpleGeometry: "Geom",
  interactionDoubleClickZoom: "Interaction",
  interactionDragAndDrop: "Interaction",
  interactionDragBox: "Interaction",
  interactionDragPan: "Interaction",
  interactionDragRotate: "Interaction",
  interactionDragRotateAndZoom: "Interaction",
  interactionDragZoom: "Interaction",
  interactionDraw: "Interaction",
  interactionExtent: "Interaction",
  interactionInteraction: "Interaction",
  interactionKeyboardPan: "Interaction",
  interactionKeyboardZoom: "Interaction",
  interactionModify: "Interaction",
  interactionMouseWheelZoom: "Interaction",
  interactionPinchRotate: "Interaction",
  interactionPinchZoom: "Interaction",
  interactionPointer: "Interaction",
  interactionSelect: "Interaction",
  interactionSnap: "Interaction",
  interactionTranslate: "Interaction",
  layerGraticule: "Layer",
  layerGroup: "Layer",
  layerHeatmap: "Layer",
  layerImage: "Layer",
  layerLayer: "Layer",
  layerMapboxVector: "Layer",
  layerTile: "Layer",
  layerVector: "Layer",
  layerVectorImage: "Layer",
  layerVectorTile: "Layer",
  layerWebGlPoints: "Layer",
  olCollection: "Collection",
  olFeature: "Feature",
  olMap: "Map",
  olView: "View",
  overlayOverlay: "Overlay",
  sourceBingMaps: "Source",
  sourceCartoDb: "Source",
  sourceCluster: "Source",
  sourceIiif: "Source",
  sourceImage: "Source",
  sourceImageArcGisRest: "Source",
  sourceImageCanvas: "Source",
  sourceImageMapGuide: "Source",
  sourceImageStatic: "Source",
  sourceImageWms: "Source",
  sourceOsm: "Source",
  sourceRaster: "Source",
  sourceSource: "Source",
  sourceStamen: "Source",
  sourceTile: "Source",
  sourceTileArcGisRest: "Source",
  sourceTileDebug: "Source",
  sourceTileImage: "Source",
  sourceTileJson: "Source",
  sourceTileWms: "Source",
  sourceUrlTile: "Source",
  sourceUtfGrid: "Source",
  sourceVector: "Source",
  sourceVectorTile: "Source",
  sourceWmts: "Source",
  sourceXyz: "Source",
  sourceZoomify: "Source",
};

export type MappingTypeofExport = {
  controlAttribution: typeof control["Attribution"];
  controlControl: typeof control["Control"];
  controlFullScreen: typeof control["FullScreen"];
  controlMousePosition: typeof control["MousePosition"];
  controlOverviewMap: typeof control["OverviewMap"];
  controlRotate: typeof control["Rotate"];
  controlScaleLine: typeof control["ScaleLine"];
  controlZoom: typeof control["Zoom"];
  controlZoomSlider: typeof control["ZoomSlider"];
  controlZoomToExtent: typeof control["ZoomToExtent"];
  geomCircle: typeof geom["Circle"];
  geomGeometry: typeof geom["Geometry"];
  geomGeometryCollection: typeof geom["GeometryCollection"];
  geomLineString: typeof geom["LineString"];
  geomLinearRing: typeof geom["LinearRing"];
  geomMultiLineString: typeof geom["MultiLineString"];
  geomMultiPoint: typeof geom["MultiPoint"];
  geomMultiPolygon: typeof geom["MultiPolygon"];
  geomPoint: typeof geom["Point"];
  geomPolygon: typeof geom["Polygon"];
  geomSimpleGeometry: typeof geom["SimpleGeometry"];
  interactionDoubleClickZoom: typeof interaction["DoubleClickZoom"];
  interactionDragAndDrop: typeof interaction["DragAndDrop"];
  interactionDragBox: typeof interaction["DragBox"];
  interactionDragPan: typeof interaction["DragPan"];
  interactionDragRotate: typeof interaction["DragRotate"];
  interactionDragRotateAndZoom: typeof interaction["DragRotateAndZoom"];
  interactionDragZoom: typeof interaction["DragZoom"];
  interactionDraw: typeof interaction["Draw"];
  interactionExtent: typeof interaction["Extent"];
  interactionInteraction: typeof interaction["Interaction"];
  interactionKeyboardPan: typeof interaction["KeyboardPan"];
  interactionKeyboardZoom: typeof interaction["KeyboardZoom"];
  interactionModify: typeof interaction["Modify"];
  interactionMouseWheelZoom: typeof interaction["MouseWheelZoom"];
  interactionPinchRotate: typeof interaction["PinchRotate"];
  interactionPinchZoom: typeof interaction["PinchZoom"];
  interactionPointer: typeof interaction["Pointer"];
  interactionSelect: typeof interaction["Select"];
  interactionSnap: typeof interaction["Snap"];
  interactionTranslate: typeof interaction["Translate"];
  layerGraticule: typeof layer["Graticule"];
  layerGroup: typeof layer["Group"];
  layerHeatmap: typeof layer["Heatmap"];
  layerImage: typeof layer["Image"];
  layerLayer: typeof layer["Layer"];
  layerMapboxVector: typeof layer["MapboxVector"];
  layerTile: typeof layer["Tile"];
  layerVector: typeof layer["Vector"];
  layerVectorImage: typeof layer["VectorImage"];
  layerVectorTile: typeof layer["VectorTile"];
  layerWebGlPoints: typeof layer["WebGLPoints"];
  olCollection: typeof ol["Collection"];
  olFeature: typeof ol["Feature"];
  olMap: typeof ol["Map"];
  olView: typeof ol["View"];
  overlayOverlay: typeof overlay["Overlay"];
  sourceBingMaps: typeof source["BingMaps"];
  sourceCartoDb: typeof source["CartoDB"];
  sourceCluster: typeof source["Cluster"];
  sourceIiif: typeof source["IIIF"];
  sourceImage: typeof source["Image"];
  sourceImageArcGisRest: typeof source["ImageArcGISRest"];
  sourceImageCanvas: typeof source["ImageCanvas"];
  sourceImageMapGuide: typeof source["ImageMapGuide"];
  sourceImageStatic: typeof source["ImageStatic"];
  sourceImageWms: typeof source["ImageWMS"];
  sourceOsm: typeof source["OSM"];
  sourceRaster: typeof source["Raster"];
  sourceSource: typeof source["Source"];
  sourceStamen: typeof source["Stamen"];
  sourceTile: typeof source["Tile"];
  sourceTileArcGisRest: typeof source["TileArcGISRest"];
  sourceTileDebug: typeof source["TileDebug"];
  sourceTileImage: typeof source["TileImage"];
  sourceTileJson: typeof source["TileJSON"];
  sourceTileWms: typeof source["TileWMS"];
  sourceUrlTile: typeof source["UrlTile"];
  sourceUtfGrid: typeof source["UTFGrid"];
  sourceVector: typeof source["Vector"];
  sourceVectorTile: typeof source["VectorTile"];
  sourceWmts: typeof source["WMTS"];
  sourceXyz: typeof source["XYZ"];
  sourceZoomify: typeof source["Zoomify"];
};