// import Swiper core and required modules
import { Navigation, Autoplay, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { BgLogin } from "../../assets";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getNowPlayingMovies, getPopularMovies, getTop10Movies, getTopRatedMovies, getUpComingMovies } from "../../data";




const Category = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      let results;
      if(props.id == 1){
         results = await  getPopularMovies();
      }else if(props.id == 2){
         results = await  getUpComingMovies();

      }else if(props.id == 3){
         results = await  getTopRatedMovies();

      }
    
      const finalResults = results.slice(0, 10);
  
      setMovies(finalResults);
    }
  
    getData();
  }, []);
  return (
    <>
       <Box
            sx={{
             
              backgroundColor: "black",
              textAlign: "left",
              mt:5
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb:2,
                color:'white'
              }}
            >
            {props.title}
            </Typography>
          </Box>
      <Swiper modules={[Virtual,Navigation, Autoplay]} slidesPerView={5} autoplay={{
          delay: 8000,
          disableOnInteraction: true,
          
        }}  virtual>
      {movies.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
         
          <Box
            sx={{
              width: "100%",
              height: "420px",
              // backgroundColor: "black",
              textAlign: "left",
            }}
          >
          <img src={`https://image.tmdb.org/t/p/original/${slideContent.poster_path}`} style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxHeight: "100vh",
              
            }} alt="" />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default Category;
