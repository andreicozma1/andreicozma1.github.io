import {Box, Container, ThemeProvider, Typography} from "@mui/material";
import ResponsiveTopBar from "./ResponsiveTopBar";
import * as React from "react";
import PageBreadcrumbs from "./PageBreadcrumbs";
import theme from "../config/theme";

const Layout = ({page, children}: {page: string, children: JSX.Element}) => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <ResponsiveTopBar page={page}/>
                <Container>
                    <PageBreadcrumbs page={page}/>
                    {/*<Typography variant="h4" sx={{*/}
                    {/*    marginTop: theme.spacing(2),*/}
                    {/*    marginBottom: theme.spacing(2)*/}
                    {/*}}>{page}</Typography>*/}
                    {children}
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Layout;
