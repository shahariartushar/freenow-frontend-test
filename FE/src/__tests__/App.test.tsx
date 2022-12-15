import { configure, shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import App from "../App"
import { Component } from "react"

configure({ adapter: new Adapter() })

// import { withHooks } from "jest-react-hooks-shallow"
//import { mockedFreeNowData, mockedShareNowData } from "./mockData"

jest.mock("axios")

describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />)

    expect(component).toMatchSnapshot()
  })

  /*
  TODO: spyOn axios and fetched data in the Components
  NB: spyOn is not working. need to investigate more
  */

  // it('should render correctly in "debug" mode', () => {
  //   jest
  //     .spyOn(axios, "get")
  //     .mockResolvedValueOnce({
  //       data: mockedFreeNowData,
  //     })
  //     .mockResolvedValueOnce({
  //       data: mockedShareNowData,
  //     })
  //   jest.spyOn(axiosFetchFunctions, "getFreeNowVehicles")
  //   jest.spyOn(axiosFetchFunctions, "getShareNowVehicles")
  //   jest.spyOn(App.prototype, "getVehicleData")

  //   withHooks(() => {
  //     const component = shallow(<App />)
  //     expect(axiosFetchFunctions.getFreeNowVehicles).toBeCalledTimes(1)
  //     expect(axiosFetchFunctions.getShareNowVehicles).toBeCalledTimes(1)
  //   })
  //   const component = shallow(<App />)
  // })
})
