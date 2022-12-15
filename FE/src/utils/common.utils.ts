import { VehicleDataType } from "../types/vehicles.types"

export enum SORT_STATE {
  ASC = "asc",
  DSC = "dsc",
}

export enum VEHICLE_STATE {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum VEHICLE_CONDITION {
  GOOD = "GOOD",
  BAD = "BAD",
}

export const dataSorter = (data: VehicleDataType[], sortOrder: SORT_STATE) => {
  return data
    .map((item) => {
      item.active = false
      return item
    })
    .sort((a, b) =>
      sortOrder === SORT_STATE.ASC
        ? a.licencePlate.localeCompare(b.licencePlate)
        : b.licencePlate.localeCompare(a.licencePlate)
    )
}
