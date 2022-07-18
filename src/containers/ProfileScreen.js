import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { LogoApp } from "../assets";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Paper,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import {
    Add,
    DummyProfile,
    DummyProfile2,
    DummyProfile3,
    DummyProfile4,
} from "../assets";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ProfileScreen = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img
                            src={LogoApp}
                            alt="MovieLogo"
                            style={{ width: "36px", height: "44px" }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                ml: 1,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Meplix
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{ ml: 1 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Meplix
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>

            <Grid Container my={5} alignItems="center" justifyContent="center">
                <Grid item>
                    <Typography component="h1" variant="h5" align="center">
                        Who's watching
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                columnSpacing={5}
                rowSpacing={2}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={6} md={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={DummyProfile}
                            alt="Murat"
                        />
                        <CardContent>
                            <Typography
                                align="center"
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Murat
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={DummyProfile2}
                            alt="Umut"
                        />
                        <CardContent>
                            <Typography
                                align="center"
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Umut
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={DummyProfile3}
                            alt="Kemal"
                        />
                        <CardContent>
                            <Typography
                                align="center"
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Kemal
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={DummyProfile4}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                align="center"
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Ucok
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={Add}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                align="center"
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Other
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    type="submit"
                    color="error"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, py: "15px" }}
                >
                    Manage Profile
                </Button>
            </Grid>
        </ThemeProvider>
    );
};
export default ProfileScreen;
