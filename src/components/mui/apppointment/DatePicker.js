import * as React from "react";
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

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(dayjs("2023-01-10T10:30"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <DesktopDatePicker
          label="Appointment Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          sx={{ width: 220 }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Available Time"
          value={value}
          onChange={handleChange}
          minTime={dayjs("2023-01-10T10:30")}
          maxTime={dayjs("2023-01-10T16:30")}
          sx={{ width: 220 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
}
