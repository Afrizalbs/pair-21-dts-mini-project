import { Box, Button, Card, CardMedia, CssBaseline, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  Add,
  DummyProfile,
  DummyProfile2,
  DummyProfile3,
  DummyProfile4,
} from "../assets";

const ProfileScreen = () => {
  return (
    <>
      <CssBaseline />
      <Grid Container my={8} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography component="h1" variant="h3" align="center">
            Who's watching?
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
              height="200"
              width="200"
              image={DummyProfile}
              alt="Murat"
            />
          </Card>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "text.secondary",
              mt: "21px",
            }}
          >
            Murat
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image={DummyProfile2}
              alt="Umut"
            />
          </Card>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "text.secondary",
              mt: "21px",
            }}
          >
            Umut
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={DummyProfile3}
              alt="Kemal"
            />
          </Card>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "text.secondary",
              mt: "21px",
            }}
          >
            Kemal
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={DummyProfile4}
              alt="green iguana"
            />
          </Card>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "text.secondary",
              mt: "21px",
            }}
          >
            Ucok
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Box
            sx={{
              maxWidth: 345,
              textAlign: "center",
              py: 5,
              height: "200px",
            }}
          >
            <img src={Add} alt="" />
          </Box>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "text.secondary",
              mt: "21px",
            }}
          >
            Other
          </Typography>
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
          color="info"
          variant="outlined"
          sx={{ mt: 3, mb: 2, py: "15px" }}
        >
          Manage Profile
        </Button>
      </Grid>
    </>
  );
};
export default ProfileScreen;
