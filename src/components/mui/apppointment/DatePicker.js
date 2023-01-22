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

  const [value, setValue] = useState(dayjs(new Date()));
  const handleChange = (newValue) => {
    setValue(newValue);

    // Date object to string on change
    let newDate = new Date(newValue);
    newDate = [
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      newDate.getDate(),
    ];
    newDate = newDate.join("-");
    console.log({ newDate });

    handleData({ ...data, date: newDate });
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
          minDate={new Date()}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} required sx={{ width: 320, my: 1 }} />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}

export function minDate() {
  const d = new Date();
  return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
}
