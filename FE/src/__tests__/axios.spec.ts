import axios from "axios"
import { mockedFreeNowData, mockedShareNowData } from "./mockData"
import { getFreeNowVehicles, getShareNowVehicles } from "../api/axios"

jest.mock("axios")

describe("Test Axios", () => {
  test("returns correct amount of data fetching freenowdata", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: mockedFreeNowData,
    })
    const result = await getFreeNowVehicles()
    expect(result.poiList.length).toBe(mockedFreeNowData.poiList.length)
  })

  test("returns correct amount of data fetching sharenowdata", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: mockedShareNowData,
    })
    const result = await getShareNowVehicles()
    expect(result.placemarks).toHaveLength(mockedShareNowData.placemarks.length)
  })
})
