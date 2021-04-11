import { CSVDownload, CSVLink } from "react-csv";
import React, { useState } from "react";

const headers = [
  { label: "Time", key: "time" },
  { label: "Date", key: "date" },
];

let newData = [];

function App() {
  var time = new Date();

  const [timeValue, setstate] = useState(
    `${time.getHours()}h ${time.getMinutes()}m ${time.getSeconds()}s`
  );

  const [data, setData] = useState([]);

  const handleButtonClick = (e) => {
    setstate(`${time.getHours()}h ${time.getMinutes()}m ${time.getSeconds()}s`);
    newData.push({
      time: `${time.getHours()}h ${time.getMinutes()}m ${time.getSeconds()}s `,
      date: time.getDate(),
    });
    console.log(newData);
    setData(newData);
  };

  let onDownloadLinkCick = (e) => {
    console.log(data);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me to generate time</button>
      <p>{timeValue}</p>
      <div>
        <h3>Export data</h3>
        <CSVLink
          data={data}
          headers={headers}
          onClick={onDownloadLinkCick}
          target="_blank"
        >
          Export to CSV
        </CSVLink>
      </div>
    </div>
  );
}

export default App;
