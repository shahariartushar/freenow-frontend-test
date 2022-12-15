import { VehicleDataType } from "./vehicles.types"

export type OnClickHighlightMarkerType = (
  param: VehicleDataType
) => (e: React.MouseEvent) => void

export type OnClickSortDataType = (
  param: "UP" | "DOWN"
) => (e: React.MouseEvent) => void

export type TableComponentPropsType = {
  setMapDataCallBack: (data: VehicleDataType[]) => void
  mapData: VehicleDataType[]
  masterData: VehicleDataType[]
}
