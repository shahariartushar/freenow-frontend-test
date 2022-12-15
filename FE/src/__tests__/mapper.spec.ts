import {
  mockedFreeNowData,
  mockedShareNowData,
  mockedVehicleData,
} from "./mockData"
import { dataMapper } from "../mapper/Mapper"

describe("Test Mapper", () => {
  test("returns correct amount of data fetching freenowdata", async () => {
    const mappedFreeNowData = dataMapper(mockedFreeNowData)
    expect(mappedFreeNowData).toStrictEqual(mockedVehicleData.slice(0, 5))
  })

  test("returns correct amount of data fetching sharenowdata", async () => {
    const mappedShareNowData = dataMapper(mockedShareNowData)
    expect(mappedShareNowData).toStrictEqual(mockedVehicleData.slice(5, 10))
  })
})
