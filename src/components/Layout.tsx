import {Box, Container} from "@mui/material";
import ResponsiveTopBar from "./ResponsiveTopBar";
import * as React from "react";


const Layout = ({children}) => {
    return (
        <Box>
            <ResponsiveTopBar/>
            <Container>
                {children}
            </Container>
        </Box>
    )
}

export default Layout;
