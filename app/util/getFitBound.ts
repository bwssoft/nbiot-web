import { bbox, featureCollection, point } from 'turf';

type Coordinates = {
  lat: number;
  lng: number;
}[];

type Result = {
  centerLat: number;
  centerLng: number;
  zoom: number;
};

export function getFitBound(coordinates: Coordinates): Result {
  // Convert coordinates to Turf.js feature collection
  const points = featureCollection(
    coordinates.map((coord) => point([coord.lng, coord.lat])),
  );

  // Calculate bounding box
  const _bbox = bbox(points);

  // Extract bounding box coordinates
  const [minLng, minLat, maxLng, maxLat] = _bbox;
  // Determine center of bounding box
  const centerLat = (minLat + maxLat) / 2;
  const centerLng = (minLng + maxLng) / 2;

  // Calculate the bounding box width and height
  const bboxWidth = maxLng - minLng;
  const bboxHeight = maxLat - minLat;

  // Calculate the zoom level based on the bounding box dimensions
  const zoomByWidth = Math.log2(360 / bboxWidth);
  const zoomByHeight = Math.log2(180 / bboxHeight);
  const zoom = Math.min(zoomByWidth, zoomByHeight);

  // zoom value
  const isZoomInfity = zoom === Infinity || zoom === -Infinity;

  return {
    centerLat,
    centerLng,
    zoom: isZoomInfity ? 15 : zoom,
  };
}
