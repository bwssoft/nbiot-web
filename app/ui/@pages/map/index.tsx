"use client";
import { IPackage } from "@/app/lib/definition/package";
import { getFitBound } from "@/app/util/getFitBound";
import { svgToDataURL } from "@/app/util/svgToDataURL";
import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer, IconLayer } from "@deck.gl/layers";
import { DeckGL } from "@deck.gl/react";
import { useEffect } from "react";
import useMultipleTrackersMap from "./useMap";

export default function Map(props: {
  packages: IPackage<{
    serialNumber: string;
    latitude: number;
    longitude: number;
  }>[];
  onClickIcon: (params: {
    lat: number;
    lng: number;
    serialNumber: string;
  }) => void;
}) {
  const { initialViewState, setInitialViewState } = useMultipleTrackersMap();
  const { packages } = props;

  const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

  const coordinates = packages.map((p) => ({
    coordinates: {
      lat: p.decoded.latitude,
      lng: p.decoded.longitude,
    },
    serialNumber: p.decoded.serialNumber,
  }));

  const layers = [
    new TileLayer({
      pickable: true,
      data: `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${MAPBOX_API}`,
      // data: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      renderSubLayers: (props) => {
        const {
          //@ts-ignore
          bbox: { west, south, east, north },
        } = props.tile;
        return new BitmapLayer(props, {
          //@ts-ignore
          data: null, // NÃO EXCLUIR!
          image: props.data,
          bounds: [west, south, east, north],
        });
      },
    }),
    new IconLayer({
      id: "icon-layer",
      pickable: true,
      data: coordinates,
      sizeScale: 20,
      onClick: (e) => {
        console.log("e.object", e.object);
        props.onClickIcon(e.object);
      },
      getIcon: () => ({
        url: svgToDataURL(`<svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3901 21.3899L12.8406 29.9394L4.29122 21.3899C2.60034 19.699 1.44883 17.5447 0.982324 15.1993C0.515816 12.854 0.75526 10.423 1.67037 8.21372C2.58549 6.00445 4.13517 4.11617 6.12346 2.78764C8.11175 1.45911 10.4493 0.750011 12.8406 0.750011C15.2319 0.750011 17.5695 1.45911 19.5578 2.78764C21.5461 4.11617 23.0958 6.00445 24.0109 8.21372C24.926 10.423 25.1655 12.854 24.6989 15.1993C24.2324 17.5447 23.0809 19.699 21.3901 21.3899ZM12.8406 16.444C13.7963 16.444 14.7129 16.0643 15.3887 15.3886C16.0645 14.7128 16.4441 13.7962 16.4441 12.8405C16.4441 11.8848 16.0645 10.9683 15.3887 10.2925C14.7129 9.6167 13.7963 9.23705 12.8406 9.23705C11.8849 9.23705 10.9684 9.6167 10.2926 10.2925C9.61682 10.9683 9.23716 11.8848 9.23716 12.8405C9.23716 13.7962 9.61682 14.7128 10.2926 15.3886C10.9684 16.0643 11.8849 16.444 12.8406 16.444Z" fill="url(#paint0_linear_2_1250)" stroke="white" stroke-width="1.5"/>
        <defs>
        <linearGradient id="paint0_linear_2_1250" x1="21.1251" y1="4.27586" x2="12.8406" y2="31" gradientUnits="userSpaceOnUse">
        <stop stop-color="#5B5B5B"/>
        <stop offset="1"/>
        </linearGradient>
        </defs>
        </svg>
        `),
        width: 26,
        height: 31,
      }),
      getPosition: (d) => [d.coordinates.lng, d.coordinates.lat],
    }),
  ];

  useEffect(() => {
    const fitBound = getFitBound(
      coordinates.map((c) => ({
        lat: Number(c.coordinates.lat),
        lng: Number(c.coordinates.lng),
      }))
    );

    setInitialViewState({
      ...initialViewState,
      longitude: fitBound.centerLng,
      latitude: fitBound.centerLat,
      zoom: fitBound.zoom,
    });
  }, []);

  return (
    <div className="h-full w-full relative">
      <DeckGL
        style={{
          position: "absolute",
          inset: "0",
        }}
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      />
    </div>
  );
}
