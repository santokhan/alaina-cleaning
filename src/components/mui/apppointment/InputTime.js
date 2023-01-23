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
    "14.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
  ];


const bookedTime = []
  times.data.map(time=>
    {
      bookedTime.push(time.time)
    }
  )
  const availableTime = timeArr.filter(i=> !bookedTime.includes(i));

  return (
    <Box sx={{ minWidth: 320, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel>Time</InputLabel>
        <Select value={data.time} label="Time" required onChange={handleChange}>
          {availableTime.map((e, i) => (
            <MenuItem>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}


