// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { BgLogin } from "../../assets";
import { Box, Container, Typography } from "@mui/material";

const Carousel = () => {
  return (
    <Container>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <Box
            sx={{
              width: "70%",
              height: "420px",
              backgroundColor: "yellow",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                pt: 5,
                pl: 3,
              }}
            >
              The Walking Dead
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                px: 3,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              libero modi aspernatur ipsa enim! Numquam, at expedita, facere
              saepe laudantium dolorum voluptatibus dicta rem ad, quibusdam
              architecto aspernatur eos minima!
            </Typography>
          </Box>
          <img src={BgLogin} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BgLogin} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BgLogin} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
