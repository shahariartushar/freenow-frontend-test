import axios from "axios"
import { FreeNowDataType, ShareNowDataType } from "../types/vehicles.types"

export async function getFreeNowVehicles() {
  const response = await axios.get<FreeNowDataType>(
    `http://localhost:5001/free-now/vehicles`
  )
  return response.data
}

export async function getShareNowVehicles() {
  const response = await axios.get<ShareNowDataType>(
    `http://localhost:5001/share-now/vehicles`
  )
  return response.data
}

export const mockAxios = axios
