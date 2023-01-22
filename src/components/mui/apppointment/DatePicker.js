import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Box } from "@mui/system";
import { AppointmentContext } from "../../../context/AppointmentContext";
import InputTime from "./InputTime";

export default function MaterialUIPickers() {
  const { data, handleData } = useContext(AppointmentContext);

  const [value, setValue] = useState("2023-01-10");
  // const [value, setValue] = useState({});

  const handleChange = (newValue) => {
    setValue(newValue);

    handleData({ ...data, date: value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: 320,
        }}
      >
        <DesktopDatePicker
          label="Appointment Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} required sx={{ width: 320, my: 1 }} />
          )}
        />
        {/* <TimePicker
          label="Available Time"
          value={value}
          onChange={handleChange}
          minTime={dayjs("2023-01-10T10:30")}
          maxTime={dayjs("2023-01-10T16:30")}
          sx={{ width: 220 }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Box>
    </LocalizationProvider>
  );
}
