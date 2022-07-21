// import Swiper core and required modules
import { Navigation, Autoplay, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {  getTrendingWeekMovies } from "../../data";



const Carousel = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const results = await  getTrendingWeekMovies();
      const finalResults = results.slice(0, 10);
  
      setMovies(finalResults);
    }
  
    getData();
  }, []);
  return (
    <>
      
      <Swiper modules={[Virtual,Navigation, Autoplay]} navigation={true} autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}  virtual>
      {movies.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <Box
            sx={{
              width: "50%",
              height: "420px",
              backgroundColor: "black",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                pt: 8,
                pl: 20,
                color:'white'
              }}
            >
             {slideContent.original_title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                px: 20,
                color:'white'
              }}
            >
              {slideContent.overview}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "420px",
              // backgroundColor: "black",
              textAlign: "left",
            }}
          >
          <img src={`https://image.tmdb.org/t/p/original/${slideContent.backdrop_path}`} alt="" />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default Carousel;
