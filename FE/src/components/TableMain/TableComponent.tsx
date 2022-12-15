import React, { useState, useEffect } from "react"

import {
  Table,
  TableRow,
  TableHeaderCell,
  Pagination,
  Text,
  DropupSelectIcon,
  DropdownSelectIcon,
} from "@freenow/wave"

import {
  TableComponentPropsType,
  OnClickSortDataType,
} from "../../types/table.types"

import TableDataComponent from "../TableData/TableDataComponent"
import { dataSorter, SORT_STATE } from "../../utils/common.utils"
import { VehicleDataType } from "../../types/vehicles.types"

const TableMain: React.FC<TableComponentPropsType> = ({
  setMapDataCallBack,
  mapData,
  masterData,
}) => {
  //const [currentPageData, setCurrentPageData] = useState<VehicleDataType[]>([])
  const [dataPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const PAGE_SIZE = dataPerPage
  const TOTAL_ITEMS = masterData.length
  const lastPage = Math.ceil(TOTAL_ITEMS / PAGE_SIZE)

  // Initialize data to state
  const initData = (data: VehicleDataType[]) => {
    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage
    const paginatedData = data.slice(indexOfFirstData, indexOfLastData)
    setMapDataCallBack(paginatedData)
    //setCurrentPageData(paginatedData)
  }

  // Load data while changing page
  useEffect(() => {
    initData(masterData)

    // To avoid react-hooks/exhaustive-deps warining
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  // Button action to sort data
  const sortVehicleData: OnClickSortDataType =
    (param?: "UP" | "DOWN") => () => {
      if ((!param && SORT_STATE.ASC) || param === "DOWN") {
        const sortedData = dataSorter(masterData, SORT_STATE.DSC)
        setMapDataCallBack(sortedData)
        initData(sortedData)
      } else if ((!param && SORT_STATE.DSC) || param === "UP") {
        const sortedData = dataSorter(masterData, SORT_STATE.ASC)
        setMapDataCallBack(sortedData)
        initData(sortedData)
      }

      // New approach
      // var sortedData: VehicleDataType[] = []
      // if (param === "DOWN") {
      //   sortedData = dataSorter(masterData, SORT_STATE.DSC)
      // } else if (param === "UP") {
      //   sortedData = dataSorter(masterData, SORT_STATE.ASC)
      // }
      // setMapDataCallBack(sortedData)
      // initData(sortedData)
    }

  return (
    <div>
      <Table
        rowStyle='zebra'
        columnSpace='normal'
        rowSize='normal'
      >
        {
          <caption style={{ captionSide: "bottom", padding: "1rem" }}>
            <div className='paginationStyle'>
              <Pagination
                value={currentPage}
                pageSize={PAGE_SIZE}
                totalItems={TOTAL_ITEMS}
                label={
                  <Text secondary>
                    Page{" "}
                    <Text
                      as='b'
                      fontWeight='semibold'
                      secondary
                    >
                      {currentPage} of {lastPage}
                    </Text>
                  </Text>
                }
                onNextPage={() => setCurrentPage((current) => current + 1)}
                onPrevPage={() => setCurrentPage((current) => current - 1)}
                onSkipForward={() => setCurrentPage(lastPage)}
                onSkipBackward={() => setCurrentPage(1)}
              />
            </div>
          </caption>
        }
        <thead className='tableStyle'>
          <TableRow>
            <TableHeaderCell scope='col'>Type</TableHeaderCell>
            <TableHeaderCell>
              <div className='tableHeaderLicensePlateComponent'>
                <div className='tableHeaderLicensePlateLabel'>
                  Licence Plate
                </div>
                <div className='tableHeaderSortIcon'>
                  <DropupSelectIcon
                    size='small'
                    onClick={sortVehicleData("UP")}
                  />
                  <DropdownSelectIcon
                    size='small'
                    onClick={sortVehicleData("DOWN")}
                  />
                </div>
              </div>
            </TableHeaderCell>
            <TableHeaderCell scope='col'>Coordinates</TableHeaderCell>
            <TableHeaderCell scope='col'>Address</TableHeaderCell>
            <TableHeaderCell scope='col'>State</TableHeaderCell>
            <TableHeaderCell scope='col'>Condition</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          <TableDataComponent
            mapData={mapData}
            setMapDataCallBack={setMapDataCallBack}
          />
        </tbody>
      </Table>
    </div>
  )
}

export default TableMain
