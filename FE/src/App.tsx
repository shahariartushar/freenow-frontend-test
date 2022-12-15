import React, { useEffect, useState } from "react"

import "./App.css"

import { MapComponent } from "./components/Map/MapComponent"
import { Divider, InlineSpinner } from "@freenow/wave"
import { getFreeNowVehicles, getShareNowVehicles } from "./api/axios"
import { VehicleDataType } from "./types/vehicles.types"
import { dataSorter, SORT_STATE } from "./utils/common.utils"

import TableComponent from "./components/TableMain/TableComponent"
import HeaderComponent from "./components/Header/HeaderComponent"
import { dataMapper } from "./mapper/Mapper"

const App = () => {
  const [vehicleData, setVehicleData] = useState<VehicleDataType[]>([])
  const [mapData, setMapData] = useState<VehicleDataType[]>([])

  const getVehicleData = async () => {
    const [freeNowData, shareNowData] = await Promise.all([
      getFreeNowVehicles(),
      getShareNowVehicles(),
    ])
    const mappedData = [...dataMapper(freeNowData), ...dataMapper(shareNowData)]
    const data = dataSorter(mappedData, SORT_STATE.ASC)
    setVehicleData(data)
  }

  useEffect(() => {
    getVehicleData()
  }, [])

  const setMapDataCallBack = (data: VehicleDataType[]) => {
    setMapData(data)
  }

  return (
    <>
      <div className='App'>
        <div className='headContainer'>
          <div className='header'>
            <HeaderComponent />
          </div>
          <div className='divider'>
            <Divider />
          </div>
        </div>

        <div className='vehiclesComponent'>
          <div className='mapComponent'>
            {!mapData.length ? (
              <InlineSpinner />
            ) : (
              <MapComponent
                setMapDataCallBack={setMapDataCallBack}
                mapData={mapData}
              />
            )}
          </div>
          <div className='tableComponent'>
            {!vehicleData.length ? (
              <InlineSpinner />
            ) : (
              <TableComponent
                setMapDataCallBack={setMapDataCallBack}
                mapData={mapData}
                masterData={vehicleData}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
