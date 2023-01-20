import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputName() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 246 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="name" label="Name" defaultValue="John Doe" />
      </div>
    </Box>
  );
}
