import { NavLink } from "react-router-dom";
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1Image1 from "../images/slide-1.jpg";
import slide1Image2 from "../images/slide-2.jpg";
import slide1Image3 from "../images/slide-3.jpg";

import slide1Image11 from "../images/slide-1.jpg";
import slide1Image12 from "../images/slide-2.jpg";
import slide1Image13 from "../images/slide-3.jpg";
import '../styles/homestyle.css'

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <>
      {/* slider-slick container */}
      <div className="sliderMain">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          <SwiperSlide data-hash="slide1">

            <div className="innerContent">
              <img src={slide1Image1} />
              <div>
              <h1>WELCOME TO THE My Sport Club</h1>
              <p>
                Bringing Together Players at My Sport Club
              </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
          <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
        </Swiper>
      </div>
      {/* cards-material ui */}
      <Container className="my-5 ">
        <Grid container spacing={3} className="cardCenter">
          <Grid item md={4} className="mt-3">
            <Card>
              <CardActionArea id="cardHover" component={NavLink} to="/page">
                <CardMedia id="cardimg"
                  component="img"
                  alt="WEEKLY MEETINGS"
                  height="235"
                  image={slide1Image11}
                  title="WEEKLY MEETINGS"
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  WEEKLY MEETINGS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Join Us on Mondays and Thursdays from 5.30 to 8.30
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} className="mt-3">
            <Card>
              <CardActionArea id="cardHover" component={NavLink} to="/page">
                <CardMedia
                  id="cardimg"
                  component="img"
                  alt="MEET OUR TEAM"
                  height="235"
                  image={slide1Image12}
                  title="MEET OUR TEAM"
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MEET OUR TEAM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn More About our 2024 Team Members
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} className="mt-3">
            <Card>
              <CardActionArea id="cardHover" component={NavLink} to="/page">
                <CardMedia
                  id="cardimg"
                  component="img"
                  alt="FAQ PAGE"
                  height="235"
                  image={slide1Image13}
                  title="FAQ PAGE"
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  FAQ PAGE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get Answers to Frequently Asked Questions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}

export default Home;
