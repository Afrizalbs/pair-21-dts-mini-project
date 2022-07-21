import Box from "@mui/material/Box";

import { signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";

import { Button, Checkbox, CssBaseline, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import { BgLogin } from "../assets";

 const   LoginScreen = () => {
  const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };



  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          // sx={{
          //   backgroundImage: "url(https://source.unsplash.com/random)",
          //   backgroundRepeat: "no-repeat",
          //   backgroundColor: (t) =>
          //     t.palette.mode === "light"
          //       ? t.palette.grey[50]
          //       : t.palette.grey[900],
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <img
            src={BgLogin}
            alt=""
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxHeight: "100vh",
              width: "800px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: "rgba(20, 20, 20, 1)",
          }}
        >
          <Box
            sx={{
              my: 15,
              mx: 7,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography color="red">{errorMessage}</Typography>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                color="error"
                variant="contained"
                sx={{ mt: 3, mb: 2, py: "15px" }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                
                  <Link to="/register">
                      {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginScreen;