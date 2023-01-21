import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function BasicSelect() {
  const { data, handleData } = useContext(AppointmentContext);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);

    handleData({ ...data, time: age });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="10.30">10.30 am</MenuItem>
          <MenuItem value="10.30">11.00 am</MenuItem>
          <MenuItem value="10.30">10.30 am</MenuItem>
          <MenuItem value="10.30">10.30 am</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
