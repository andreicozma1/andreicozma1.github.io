import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import {Page, pages} from "../config/pages";


const ResponsiveAppBar = ({page}: { page: Page }) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo variant="md"/>

                    <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: "block", md: "none"},
                            }}
                        >
                            {Object.entries(pages).map(([title, info]) => (
                                <MenuItem key={title} onClick={handleCloseNavMenu} href={info.href}>
                                    <Typography
                                        textAlign="center"
                                        // underlined if current page
                                        sx={{textDecoration: page.href === info.href ? "underline" : "none"}}
                                    >{title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Logo variant='xs'/>

                    <Box sx={{
                        flexGrow: 1, display: {
                            xs: "none", md: "flex",
                            // align right
                            justifyContent: "flex-end"
                        }
                    }}>
                        {Object.entries(pages).map(([title, info]) => (
                            <Button
                                key={title}
                                onClick={handleCloseNavMenu}
                                href={info.href}
                                startIcon={info.icon}
                                variant="outlined"
                                sx={{
                                    color: "white",
                                    // underlined if current page
                                    ...(page.href === info.href ? {textDecoration: "underline"} : {})
                                }}
                            >
                                {title}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
