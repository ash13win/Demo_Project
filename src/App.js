import { CSVDownload, CSVLink } from "react-csv";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
      <Grid
        container
        justify="center"
        className={{ flexGrow: 1 }}
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={6}>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Click Me
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={6} justify="center">
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
