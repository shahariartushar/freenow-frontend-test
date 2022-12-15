import { VehicleDataType } from "./vehicles.types"

export type OnClickMarkerFunctionType = (
  item: VehicleDataType
) => (e: google.maps.MapMouseEvent) => void

export type MapComponentPropsType = {
  setMapDataCallBack: (data: VehicleDataType[]) => void
  mapData: VehicleDataType[]
}
