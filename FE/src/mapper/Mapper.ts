import {
  FreeNowDataType,
  ShareNowDataType,
  VehicleDataType,
  VEHICLE_TYPE,
} from "../types/vehicles.types"

function isFreeNowDataType(arg: any): arg is FreeNowDataType {
  return arg.poiList !== undefined
}

export const dataMapper = (
  input: FreeNowDataType | ShareNowDataType
): VehicleDataType[] => {
  if (isFreeNowDataType(input)) {
    return input.poiList.map((item) => {
      return {
        id: item.id,
        statusType: VEHICLE_TYPE.FREE_NOW,
        condition: item.condition,
        coordinate: {
          latitude: item.coordinate.latitude,
          longitude: item.coordinate.longitude,
        },
        licencePlate: item.licencePlate,
        state: item.state,
        active: false,
      }
    })
  }
  return input.placemarks.map((item) => {
    return {
      id: item.id,
      statusType: VEHICLE_TYPE.SHARE_NOW,
      condition: item.condition,
      coordinate: {
        latitude: item.coordinates[1],
        longitude: item.coordinates[0],
      },
      licencePlate: item.licencePlate,
      address: item.address,
      state: item.state,
      active: false,
      fuel: item.fuel,
    }
  })
}
