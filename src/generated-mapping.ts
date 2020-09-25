// @ts-nocheck
// Generated Code, do not edit manually
import * as ol from "ol";
import * as layer from "ol/layer";
import * as control from "ol/control";
import * as interaction from "ol/interaction";
import * as source from "ol/source";
import * as geom from "ol/geom";
import * as style from "ol/style";

export type Mapping = {
  olCollection: typeof ol.Collection;
  olControlAttribution: typeof control.Attribution;
  olControlControl: typeof control.Control;
  olControlFullScreen: typeof control.FullScreen;
  olControlMousePosition: typeof control.MousePosition;
  olControlOverviewMap: typeof control.OverviewMap;
  olControlRotate: typeof control.Rotate;
  olControlScaleLine: typeof control.ScaleLine;
  olControlZoom: typeof control.Zoom;
  olControlZoomSlider: typeof control.ZoomSlider;
  olControlZoomToExtent: typeof control.ZoomToExtent;
  olFeature: typeof ol.Feature;
  olGeomCircle: typeof geom.Circle;
  olGeomGeometry: typeof geom.Geometry;
  olGeomGeometryCollection: typeof geom.GeometryCollection;
  olGeomLineString: typeof geom.LineString;
  olGeomLinearRing: typeof geom.LinearRing;
  olGeomMultiLineString: typeof geom.MultiLineString;
  olGeomMultiPoint: typeof geom.MultiPoint;
  olGeomMultiPolygon: typeof geom.MultiPolygon;
  olGeomPoint: typeof geom.Point;
  olGeomPolygon: typeof geom.Polygon;
  olGeomSimpleGeometry: typeof geom.SimpleGeometry;
  olInteractionDoubleClickZoom: typeof interaction.DoubleClickZoom;
  olInteractionDragAndDrop: typeof interaction.DragAndDrop;
  olInteractionDragBox: typeof interaction.DragBox;
  olInteractionDragPan: typeof interaction.DragPan;
  olInteractionDragRotate: typeof interaction.DragRotate;
  olInteractionDragRotateAndZoom: typeof interaction.DragRotateAndZoom;
  olInteractionDragZoom: typeof interaction.DragZoom;
  olInteractionDraw: typeof interaction.Draw;
  olInteractionExtent: typeof interaction.Extent;
  olInteractionInteraction: typeof interaction.Interaction;
  olInteractionKeyboardPan: typeof interaction.KeyboardPan;
  olInteractionKeyboardZoom: typeof interaction.KeyboardZoom;
  olInteractionModify: typeof interaction.Modify;
  olInteractionMouseWheelZoom: typeof interaction.MouseWheelZoom;
  olInteractionPinchRotate: typeof interaction.PinchRotate;
  olInteractionPinchZoom: typeof interaction.PinchZoom;
  olInteractionPointer: typeof interaction.Pointer;
  olInteractionSelect: typeof interaction.Select;
  olInteractionSnap: typeof interaction.Snap;
  olInteractionTranslate: typeof interaction.Translate;
  olLayerGraticule: typeof layer.Graticule;
  olLayerGroup: typeof layer.Group;
  olLayerHeatmap: typeof layer.Heatmap;
  olLayerImage: typeof layer.Image;
  olLayerLayer: typeof layer.Layer;
  olLayerMapboxVector: typeof layer.MapboxVector;
  olLayerTile: typeof layer.Tile;
  olLayerVector: typeof layer.Vector;
  olLayerVectorImage: typeof layer.VectorImage;
  olLayerVectorTile: typeof layer.VectorTile;
  olLayerWebGlPoints: typeof layer.WebGLPoints;
  olMap: typeof ol.Map;
  olOverlay: typeof ol.Overlay;
  olSourceBingMaps: typeof source.BingMaps;
  olSourceCartoDb: typeof source.CartoDB;
  olSourceCluster: typeof source.Cluster;
  olSourceIiif: typeof source.IIIF;
  olSourceImage: typeof source.Image;
  olSourceImageArcGisRest: typeof source.ImageArcGISRest;
  olSourceImageCanvas: typeof source.ImageCanvas;
  olSourceImageMapGuide: typeof source.ImageMapGuide;
  olSourceImageStatic: typeof source.ImageStatic;
  olSourceImageWms: typeof source.ImageWMS;
  olSourceOsm: typeof source.OSM;
  olSourceRaster: typeof source.Raster;
  olSourceSource: typeof source.Source;
  olSourceStamen: typeof source.Stamen;
  olSourceTile: typeof source.Tile;
  olSourceTileArcGisRest: typeof source.TileArcGISRest;
  olSourceTileDebug: typeof source.TileDebug;
  olSourceTileImage: typeof source.TileImage;
  olSourceTileJson: typeof source.TileJSON;
  olSourceTileWms: typeof source.TileWMS;
  olSourceUrlTile: typeof source.UrlTile;
  olSourceUtfGrid: typeof source.UTFGrid;
  olSourceVector: typeof source.Vector;
  olSourceVectorTile: typeof source.VectorTile;
  olSourceWmts: typeof source.WMTS;
  olSourceXyz: typeof source.XYZ;
  olSourceZoomify: typeof source.Zoomify;
  olStyleCircle: typeof style.Circle;
  olStyleFill: typeof style.Fill;
  olStyleIcon: typeof style.Icon;
  olStyleIconImage: typeof style.IconImage;
  olStyleImage: typeof style.Image;
  olStyleRegularShape: typeof style.RegularShape;
  olStyleStroke: typeof style.Stroke;
  olStyleStyle: typeof style.Style;
  olStyleText: typeof style.Text;
  olView: typeof ol.View;
};

export const mapping:Mapping = {
  olCollection: ol.Collection,
  olControlAttribution: control.Attribution,
  olControlControl: control.Control,
  olControlFullScreen: control.FullScreen,
  olControlMousePosition: control.MousePosition,
  olControlOverviewMap: control.OverviewMap,
  olControlRotate: control.Rotate,
  olControlScaleLine: control.ScaleLine,
  olControlZoom: control.Zoom,
  olControlZoomSlider: control.ZoomSlider,
  olControlZoomToExtent: control.ZoomToExtent,
  olFeature: ol.Feature,
  olGeomCircle: geom.Circle,
  olGeomGeometry: geom.Geometry,
  olGeomGeometryCollection: geom.GeometryCollection,
  olGeomLineString: geom.LineString,
  olGeomLinearRing: geom.LinearRing,
  olGeomMultiLineString: geom.MultiLineString,
  olGeomMultiPoint: geom.MultiPoint,
  olGeomMultiPolygon: geom.MultiPolygon,
  olGeomPoint: geom.Point,
  olGeomPolygon: geom.Polygon,
  olGeomSimpleGeometry: geom.SimpleGeometry,
  olInteractionDoubleClickZoom: interaction.DoubleClickZoom,
  olInteractionDragAndDrop: interaction.DragAndDrop,
  olInteractionDragBox: interaction.DragBox,
  olInteractionDragPan: interaction.DragPan,
  olInteractionDragRotate: interaction.DragRotate,
  olInteractionDragRotateAndZoom: interaction.DragRotateAndZoom,
  olInteractionDragZoom: interaction.DragZoom,
  olInteractionDraw: interaction.Draw,
  olInteractionExtent: interaction.Extent,
  olInteractionInteraction: interaction.Interaction,
  olInteractionKeyboardPan: interaction.KeyboardPan,
  olInteractionKeyboardZoom: interaction.KeyboardZoom,
  olInteractionModify: interaction.Modify,
  olInteractionMouseWheelZoom: interaction.MouseWheelZoom,
  olInteractionPinchRotate: interaction.PinchRotate,
  olInteractionPinchZoom: interaction.PinchZoom,
  olInteractionPointer: interaction.Pointer,
  olInteractionSelect: interaction.Select,
  olInteractionSnap: interaction.Snap,
  olInteractionTranslate: interaction.Translate,
  olLayerGraticule: layer.Graticule,
  olLayerGroup: layer.Group,
  olLayerHeatmap: layer.Heatmap,
  olLayerImage: layer.Image,
  olLayerLayer: layer.Layer,
  olLayerMapboxVector: layer.MapboxVector,
  olLayerTile: layer.Tile,
  olLayerVector: layer.Vector,
  olLayerVectorImage: layer.VectorImage,
  olLayerVectorTile: layer.VectorTile,
  olLayerWebGlPoints: layer.WebGLPoints,
  olMap: ol.Map,
  olOverlay: ol.Overlay,
  olSourceBingMaps: source.BingMaps,
  olSourceCartoDb: source.CartoDB,
  olSourceCluster: source.Cluster,
  olSourceIiif: source.IIIF,
  olSourceImage: source.Image,
  olSourceImageArcGisRest: source.ImageArcGISRest,
  olSourceImageCanvas: source.ImageCanvas,
  olSourceImageMapGuide: source.ImageMapGuide,
  olSourceImageStatic: source.ImageStatic,
  olSourceImageWms: source.ImageWMS,
  olSourceOsm: source.OSM,
  olSourceRaster: source.Raster,
  olSourceSource: source.Source,
  olSourceStamen: source.Stamen,
  olSourceTile: source.Tile,
  olSourceTileArcGisRest: source.TileArcGISRest,
  olSourceTileDebug: source.TileDebug,
  olSourceTileImage: source.TileImage,
  olSourceTileJson: source.TileJSON,
  olSourceTileWms: source.TileWMS,
  olSourceUrlTile: source.UrlTile,
  olSourceUtfGrid: source.UTFGrid,
  olSourceVector: source.Vector,
  olSourceVectorTile: source.VectorTile,
  olSourceWmts: source.WMTS,
  olSourceXyz: source.XYZ,
  olSourceZoomify: source.Zoomify,
  olStyleCircle: style.Circle,
  olStyleFill: style.Fill,
  olStyleIcon: style.Icon,
  olStyleIconImage: style.IconImage,
  olStyleImage: style.Image,
  olStyleRegularShape: style.RegularShape,
  olStyleStroke: style.Stroke,
  olStyleStyle: style.Style,
  olStyleText: style.Text,
  olView: ol.View,
};

export const kindMapping = {
  olCollection: "Collection",
  olControlAttribution: "Control",
  olControlControl: "Control",
  olControlFullScreen: "Control",
  olControlMousePosition: "Control",
  olControlOverviewMap: "Control",
  olControlRotate: "Control",
  olControlScaleLine: "Control",
  olControlZoom: "Control",
  olControlZoomSlider: "Control",
  olControlZoomToExtent: "Control",
  olFeature: "Feature",
  olGeomCircle: "Geom",
  olGeomGeometry: "Geom",
  olGeomGeometryCollection: "Geom",
  olGeomLineString: "Geom",
  olGeomLinearRing: "Geom",
  olGeomMultiLineString: "Geom",
  olGeomMultiPoint: "Geom",
  olGeomMultiPolygon: "Geom",
  olGeomPoint: "Geom",
  olGeomPolygon: "Geom",
  olGeomSimpleGeometry: "Geom",
  olInteractionDoubleClickZoom: "Interaction",
  olInteractionDragAndDrop: "Interaction",
  olInteractionDragBox: "Interaction",
  olInteractionDragPan: "Interaction",
  olInteractionDragRotate: "Interaction",
  olInteractionDragRotateAndZoom: "Interaction",
  olInteractionDragZoom: "Interaction",
  olInteractionDraw: "Interaction",
  olInteractionExtent: "Interaction",
  olInteractionInteraction: "Interaction",
  olInteractionKeyboardPan: "Interaction",
  olInteractionKeyboardZoom: "Interaction",
  olInteractionModify: "Interaction",
  olInteractionMouseWheelZoom: "Interaction",
  olInteractionPinchRotate: "Interaction",
  olInteractionPinchZoom: "Interaction",
  olInteractionPointer: "Interaction",
  olInteractionSelect: "Interaction",
  olInteractionSnap: "Interaction",
  olInteractionTranslate: "Interaction",
  olLayerGraticule: "Layer",
  olLayerGroup: "Layer",
  olLayerHeatmap: "Layer",
  olLayerImage: "Layer",
  olLayerLayer: "Layer",
  olLayerMapboxVector: "Layer",
  olLayerTile: "Layer",
  olLayerVector: "Layer",
  olLayerVectorImage: "Layer",
  olLayerVectorTile: "Layer",
  olLayerWebGlPoints: "Layer",
  olMap: "Map",
  olOverlay: "Overlay",
  olSourceBingMaps: "Source",
  olSourceCartoDb: "Source",
  olSourceCluster: "Source",
  olSourceIiif: "Source",
  olSourceImage: "Source",
  olSourceImageArcGisRest: "Source",
  olSourceImageCanvas: "Source",
  olSourceImageMapGuide: "Source",
  olSourceImageStatic: "Source",
  olSourceImageWms: "Source",
  olSourceOsm: "Source",
  olSourceRaster: "Source",
  olSourceSource: "Source",
  olSourceStamen: "Source",
  olSourceTile: "Source",
  olSourceTileArcGisRest: "Source",
  olSourceTileDebug: "Source",
  olSourceTileImage: "Source",
  olSourceTileJson: "Source",
  olSourceTileWms: "Source",
  olSourceUrlTile: "Source",
  olSourceUtfGrid: "Source",
  olSourceVector: "Source",
  olSourceVectorTile: "Source",
  olSourceWmts: "Source",
  olSourceXyz: "Source",
  olSourceZoomify: "Source",
  olStyleCircle: "Style",
  olStyleFill: "Style",
  olStyleIcon: "Style",
  olStyleIconImage: "Style",
  olStyleImage: "Style",
  olStyleRegularShape: "Style",
  olStyleStroke: "Style",
  olStyleStyle: "Style",
  olStyleText: "Style",
  olView: "View",
};
