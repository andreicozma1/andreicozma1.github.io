import * as React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import ResponsiveTopBar from "../components/ResponsiveTopBar";

function About() {
  return (
    <Stack spacing={2}>
      <ResponsiveTopBar />
      <Button variant="contained">Hello World</Button>
      <Button variant="contained">Hello World</Button>
    </Stack>
  );
}

export default About;
