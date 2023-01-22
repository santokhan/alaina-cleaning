import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function InputTime() {
  const { data, handleData } = useContext(AppointmentContext);

  const handleChange = (e) => {
    handleData({ ...data, time: e.target.value });
  };

  const timeArr = [
    "10.00",
    "11.00",
    "12.00",
    "14.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
  ];

  return (
    <Box sx={{ minWidth: 320, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel>Time</InputLabel>
        <Select value={data.time} label="Time" required onChange={handleChange}>
          {timeArr.map((e, i) => (
            <MenuItem disabled={timeChecker(e)} value={e} key={i}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export function timeChecker(value) {
  let APITimeArray = [
    { time: "17.00" },
    { time: "10.00" },
    { time: "19.00" },
    { time: "18.00" },
  ];

  return APITimeArray.some((e) => e.time === value);
}
