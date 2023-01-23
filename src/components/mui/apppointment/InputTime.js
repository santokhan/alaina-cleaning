import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function InputTime({ times }) {
  const { data, handleData } = useContext(AppointmentContext);

  const handleChange = (e) => {
    handleData({ ...data, time: e.target.value });
  };

  const timeArr = [
    "10.00",
    "11.00",
    "12.00",
    "09.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
  ];

  return (
    <Box sx={{ minWidth: 320, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel>Time</InputLabel>
        <Select value={data.time} label="Time" required onChange={handleChange}>
          {timeArr.map((e, i) => (
            <MenuItem disabled={timeChecker(e, times)} value={e} key={i}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export function timeChecker(value, times) {
  console.log(times.data);

  if (typeof times.data === "object") {
    if (times.data.length > 0) {
      let APITimeArray = times.data;

      return APITimeArray.some((e) => e.time === value);
    } else {
      console.log("times.data.length is not > 0");
    }
  } else {
    console.log("times.data isn not an object");
  }
}
