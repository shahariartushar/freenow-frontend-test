# FREE NOW Frontend Test 🖼

## Task Description 🤓

The app contains the following features:

- A **map** and a **table**, both showing the vehicles from the FREE NOW and SHARE NOW lists. You can load the vehicles from the server that you'll start (info on starting it in the "Server Setup" section). The vehicles in the table and in the map should be the same.
- **Sort** the results by “Licence plate”
- **Paginate** the results from the APIs to show just up to 10 vehicles in the table and in the map
- If we click on a row in the table, we should **highlight** the corresponding marker in the map
- If we click on a marker on the map, we should **highlight** the corresponding row in the table

The table displays the following information about each vehicle:
**Coordinates**: “12.234543 52.834729”
**Licence plate**: “HHZ 234 1259”
**Address**: “Kroogblöcke 32, 22119 Hamburg”
**Type**: “FREE NOW” | “SHARE NOW”
**State**: “Active” | “Inactive”
**Conditions**: “Bad conditions” | “Good conditions” & “Low fuel” | “Medium fuel” | “Full fuel”

Sample design: [layout](https://www.figma.com/file/qhCx4LIedUMYjmSd2MAulk/React-applicant-test-mock?node-id=0%3A1) using freenow design system called Wave.

## Technologies 🛠

- React
- Typescript
- Google map API

## Server Setup ⚙️

Run `npm install` in the `Server` folder to install the server dependencies.
Run `npm start` in the `Server` folder to start the server.
You should see something like: `Listening on Port: 5001`
API Routes:

#### Get a list of all FREE NOW vehicles:

/free-now/vehicles

#### Get a list of all SHARE NOW vehicles:

/share-now/vehicles

For example, to get the SHARE NOW vehicles, you can call: http://localhost:5001/share-now/vehicles

## Project Setup ⚙️

Run `npm install` in the `FE` folder to install the server dependencies.
Run `npm start` in the `FE` folder to start the server.
You should see something like: `Listening on Port: 5001`

## Tests

Run `npm test` in the `FE` folder
