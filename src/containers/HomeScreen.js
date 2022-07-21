import { Box } from "@mui/material";
import React from "react";
import SwiperComponent from "../components/Carousel";
import Category from "../components/Carousel/category";
import { getPopularMovies } from "../data";

function HomeScreen() {
  return (
    <Box sx={{ background:"black" }}>
    <SwiperComponent />
    <Category id={2} title={'Up Coming'}/>
    <Category id={1} title={'Popular'}/>
    <Category id={3} title={'Top Rated'}/>
    
    </Box>
  );
}

export default HomeScreen;
