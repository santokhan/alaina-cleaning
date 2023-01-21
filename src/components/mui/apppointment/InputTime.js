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

  return (
    <Box sx={{ minWidth: 320, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel>Time</InputLabel>
        <Select value={data.time} label="Time" required onChange={handleChange}>
          <MenuItem value="10.00">10.00</MenuItem>
          <MenuItem value="11.00">11.00</MenuItem>
          <MenuItem value="12.00">12.00</MenuItem>
          <MenuItem value="13.00<">13.00</MenuItem>
          <MenuItem value="14.00<">14.00</MenuItem>
          <MenuItem value="15.00">15.00</MenuItem>
          <MenuItem value="16.00">16.00</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
