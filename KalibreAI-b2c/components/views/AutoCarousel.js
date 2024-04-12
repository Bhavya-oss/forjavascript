import React, { useEffect, useState } from "react";
import {
  COCACOLA_CMP,
  DISNEPHOTSTAR_CMP,
  CANVA_CMP,
  WALMART_CMP,
  OGILVY_CMP,
  EXPEDIA_CMP,
  META_CMP,
  LICIOUS_CMP,
  UBER_CMP,
  LINKEDIN_CMP,
  RAZORPAY_CMP,
  OYO_CMP,
  SWIGGY_CMP,
  MPLSPORTS_CMP,
  PAYTM_CMP,
  ADOBE_CMP,
} from "../constants/ImagesLink";
import { Box, useMediaQuery } from "@mui/material";
import { checkArrayLength } from "../GlobalFunction";

function AutoCarousel(props) {
  const { direction, img_links } = props;

//   const imagesUrl = [
//     COCACOLA_CMP,
//     DISNEPHOTSTAR_CMP,
//     CANVA_CMP,
//     WALMART_CMP,
//     OGILVY_CMP,
//     EXPEDIA_CMP,
//     META_CMP,
//     LICIOUS_CMP,
//     UBER_CMP,
//     LINKEDIN_CMP,
//     RAZORPAY_CMP,
//     OYO_CMP,
//     SWIGGY_CMP,
//     MPLSPORTS_CMP,
//     PAYTM_CMP,
//     ADOBE_CMP,
//   ];

  const [images, setImages] = useState([]);
  const isMobileView = useMediaQuery("(max-width: 1200px)");

  useEffect(() => {
    let list = addElementsToArray(img_links);
    setImages(list);
  }, []);

  const addElementsToArray = (arr) => {
    return [...arr, ...arr, ...arr];
  };

  return (
    <>
      <Box className="carousel_container">
        <Box
          className={
            direction == "right"
              ? "slide_container_right"
              : "slide_container_left"
          }
        >
          {checkArrayLength(images) &&
            images.map((data, idx) => {
              return (
                <Box key={idx} className="content">
                  <img src={data} />
                  
                </Box>
              );
            })}
        </Box>
      </Box>
    </>
  );
}

export default AutoCarousel;
