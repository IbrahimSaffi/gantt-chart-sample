import { Chart } from "react-google-charts";
import { faker } from '@faker-js/faker';

import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [rows, setRows] = useState([])
  const [col, setCol] = useState([
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ])
  useEffect(() => {
    let rows = new Array(10).fill(0)
    let datePointer = "2022-12-05T00:00:00.000Z"
    rows = rows.map((row, i) => {
      let startDate = faker.date.between('2022-12-01T00:00:00.000Z', datePointer)
      let endDate = faker.date.between(startDate, '2022-12-29T00:00:00.000Z')
      datePointer = startDate
      datePointer = endDate
      let percentage = faker.datatype.number(100)
      return [i + 1, faker.git.branch(), "", startDate, endDate, endDate.getDate() - startDate.getDate(), percentage, null]
    })
    console.log(rows)
    setRows(rows)
  }, [])
  return (
    <div className="App">
      <h1>Branches status</h1>
      <p>Graph lists repos team should work on for this month</p>
      <Chart chartType="Gantt" width="90vw" height="90vh" data={[col, ...rows]} />
    </div>
  );
}

export default App;
