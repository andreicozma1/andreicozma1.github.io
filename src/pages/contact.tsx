import * as React from "react";
import Button from "@mui/material/Button";
import {Box, Container, Stack} from "@mui/material";
import ResponsiveTopBar from "../components/ResponsiveTopBar";

function About() {
  return (
    <Box>
      <ResponsiveTopBar />
        <Container>
            <Button variant="contained">Hello World</Button>
        </Container>
    </Box>
  );
}

export default About;
