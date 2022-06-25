import * as React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";

const Logo = ({variant}: { variant: string }) => {

    let display;
    if (variant === 'xs') {
        display = {xs: "flex", md: "none"}
    } else {
        display = {xs: "none", md: "flex"}
    }

    return <>
        <AdbIcon sx={{display: display, mr: 1}}/>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: display,
                fontFamily: "monospace",
                flexGrow: variant === 'xs' ? 1 : 0,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
            }}
        >
            Andrei Cozma
        </Typography>
    </>;
}

export default Logo;