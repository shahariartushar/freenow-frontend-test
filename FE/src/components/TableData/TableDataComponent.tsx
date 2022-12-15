import React from "react"
import {
  TableRow,
  TableCell,
  Colors,
  EmojiHappyIcon,
  EmojiSadIcon,
  Label,
  Fuel0Icon,
  Fuel100Icon,
  Fuel10Icon,
  Fuel25Icon,
  Fuel50Icon,
  Fuel75Icon,
} from "@freenow/wave"

import { OnClickHighlightMarkerType } from "../../types/table.types"
import { MapComponentPropsType } from "../../types/map.types"
import { VehicleDataType } from "../../types/vehicles.types"
import { VEHICLE_CONDITION, VEHICLE_STATE } from "../../utils/common.utils"

const TableDataComponent: React.FC<MapComponentPropsType> = ({
  mapData,
  setMapDataCallBack,
}) => {
  // Action to highlight the row
  const onClickHighlightMarker: OnClickHighlightMarkerType = (item) => (e) => {
    e.preventDefault()
    const newObject: VehicleDataType[] = JSON.parse(JSON.stringify(mapData))
    const data = newObject.filter((rowData) => {
      if (rowData.licencePlate === item.licencePlate) {
        rowData.active = true
        return rowData
      }
      rowData.active = false
      return rowData
    })
    setMapDataCallBack(data)
  }

  // Get the proper Icon based on fuel availability
  const getFuelIcon = (param: number) => {
    if (param >= 0 && param <= 9) return <Fuel0Icon />
    if (param >= 10 && param <= 24) return <Fuel10Icon />
    if (param >= 25 && param <= 49) return <Fuel25Icon />
    if (param >= 50 && param <= 74) return <Fuel50Icon />
    if (param >= 75 && param <= 99) return <Fuel75Icon />
    if (param === 100) return <Fuel100Icon />
  }
  return (
    <>
      {mapData.map((item, index) => (
        <TableRow
          key={index}
          onClick={onClickHighlightMarker(item)}
          active={item.active}
        >
          <TableCell
            scope='row'
            className='typeCol'
          >
            {item.statusType}{" "}
          </TableCell>
          <TableCell>{item.licencePlate}</TableCell>
          <TableCell className='coordinatesCol'>
            <div>{item.coordinate.latitude}</div>
            <div> {item.coordinate.longitude}</div>
          </TableCell>
          <TableCell
            className='addressCol'
            style={{
              wordWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {item.address}
          </TableCell>
          <TableCell className='stateCol'>
            {item.state === VEHICLE_STATE.ACTIVE ? (
              <Label
                variant='success'
                filled
                mr={1}
              >
                Active
              </Label>
            ) : (
              <Label mr={1}>Inactive</Label>
            )}
          </TableCell>
          <TableCell className='conditionCol'>
            {!item.fuel ? null : getFuelIcon(item.fuel)}
            <span> </span>
            {item.condition === VEHICLE_CONDITION.GOOD ? (
              <EmojiHappyIcon color={Colors.POSITIVE_GREEN_900} />
            ) : (
              <EmojiSadIcon color={Colors.NEGATIVE_ORANGE_900} />
            )}
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default TableDataComponent
