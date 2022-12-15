export enum VEHICLE_TYPE {
  FREE_NOW = "FREE NOW",
  SHARE_NOW = "SHARE NOW",
}

export type PoiList = {
  id: number
  coordinate: {
    latitude: number
    longitude: number
  }
  state: string
  licencePlate: string
  condition: string
}

export type FreeNowDataType = {
  poiList: PoiList[]
}

export type Placemark = {
  address: string
  coordinates: number[]
  engineType: string
  condition: string
  fuel: number
  state: string
  licencePlate: string
  id: number
}

export type ShareNowDataType = {
  placemarks: Placemark[]
}

export type VehicleDataType = {
  id: number
  statusType: VEHICLE_TYPE
  coordinate: {
    latitude: number
    longitude: number
  }
  state: string
  licencePlate: string
  condition: string
  fuel?: number
  engineType?: string
  address?: string
  active: boolean
}
