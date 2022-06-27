import {Box, Container, ThemeProvider} from "@mui/material";
import ResponsiveTopBar from "./ResponsiveTopBar";
import * as React from "react";
import PageBreadcrumbs from "./PageBreadcrumbs";
import theme from "../config/theme";
import {Page} from "../config/pages";

const Layout = ({page, children}: {page: Page, children: JSX.Element}) => {
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
