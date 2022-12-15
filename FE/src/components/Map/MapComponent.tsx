import React from "react"

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { VehicleDataType, VEHICLE_TYPE } from "../../types/vehicles.types"

import {
  containerStyle,
  svgMarkerFreeNow,
  svgMarkerShareNow,
} from "../../configs/MapComponent.config"

import {
  MapComponentPropsType,
  OnClickMarkerFunctionType,
} from "../../types/map.types"

export const MapComponent: React.FC<MapComponentPropsType> = ({
  mapData,
  setMapDataCallBack,
}) => {
  // eslint-disable-next-line
  const [map, setMap] = React.useState<google.maps.Map | null>(null)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA5mCRZyI27Avzwzqlum-6KWCXIjty-ASo",
  })

  // Set bounderies
  const onLoadSetBounds = (map: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds()
    mapData.forEach((item) => {
      const vehicle = new google.maps.LatLng(
        item.coordinate.latitude,
        item.coordinate.longitude
      )
      bounds.extend(vehicle)
    })
    map.fitBounds(bounds)
    setMap(map)
  }

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  // Action to highlight the row
  const onClickMapMarker: OnClickMarkerFunctionType = (item) => (e) => {
    const newObject: VehicleDataType[] = JSON.parse(JSON.stringify(mapData))
    const filterData = newObject.filter((row) => {
      if (row.licencePlate === item.licencePlate) {
        row.active = true
        return row
      }
      row.active = false
      return row
    })
    setMapDataCallBack(filterData)
  }

  return isLoaded ? (
    <div className='mapStyle'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={11}
        onLoad={onLoadSetBounds}
        onUnmount={onUnmount}
      >
        <div>
          {mapData.map((item: VehicleDataType, index) => (
            <Marker
              key={index}
              position={{
                lng: item.coordinate.longitude,
                lat: item.coordinate.latitude,
              }}
              icon={
                item.statusType === VEHICLE_TYPE.FREE_NOW
                  ? svgMarkerFreeNow
                  : svgMarkerShareNow
              }
              animation={
                item.active ? window.google.maps.Animation.BOUNCE : undefined
              }
              onClick={onClickMapMarker(item)}
            />
          ))}
        </div>
      </GoogleMap>
    </div>
  ) : null
}
