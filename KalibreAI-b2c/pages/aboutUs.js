import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { ABOUT_US_BACKGROUND_IMAGE} from "../components/constants/ImagesLink";
import ScrollToTop from "../components/ScrollToTop";

const p_style = {
  color: "#0D0E10",
  fontSize: {sm:"15px", md:"19px", lg:"20px", xl:"24px"},
        fontStyle: "normal",
        lineHeight: {sm:"29px", md:"30px", lg:"33px", xl:"35px"},
        fontWeight: {sm:"350px", md:"350px", lg:"350px", xl:"400"},
  textAlign: "justify",
};

function aboutUs() {
  return (
    <>
      <Box
        sx={{
          padding: "4rem 0",
          backgroundImage: `url(${ABOUT_US_BACKGROUND_IMAGE})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundSize:"100% 100%"
          // width:"200px"
        }}
      >
        <Container sx={{ minWidth: "85%", width:{xs:"", sm:"86%", md:""} }}>
          <Typography
            sx={{
              color: "#0D0E10",
              fontSize: {sm:"16px",md:"25px", lg:"25px", xl:"32px"},
              fontStyle: "normal",
              lineHeight: "32px",
            }}
          >
            About us
          </Typography>
          <Box
            sx={{
              width: { xs:"220px", sm:"520px",md:"520px", lg:"520px", xl:"858px"},
              margin: {sm:"0.8rem 0rem 1.2rem 0rem",md:"0.95rem 0rem 1.55rem 0rem", xl:"3rem 0"},
              paddingRight:{xs:"", sm:"102px", md:"0px"}

            }}
          >
            <Typography
              sx={{
                color: "#0D0E10",
                fontSize: { xs:"26px", sm:"35px",md:"50px", lg:"40px", xl:"96px"},
                fontStyle: "normal",
                lineHeight: {xs:"35px", sm:"48px", md:"65px", lg:"50px", xl:"110px"},
                fontWeight: "400",
              }}
            
            >
              Our mission is to empower and connect the world with Kalibre
            </Typography>
          </Box>

          <Box sx={{ width:{ sm:"500px", md:"530px", xl:"858px"} }}>
            <Typography
              sx={{
                color: "#3E485B",
                fontSize: {sm:"16px", md:"20px", lg:"22px", xl:"24px"},
                fontStyle: "normal",
                lineHeight: "32px",
                fontWeight: "400",
              }}
            >
              We are building the best payments infrastructure today, without
              compromising tomorrow. We believe that bitcoin is the future of
              global, digital payments and that no other payment method can
              ultimately compete.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          padding: {xs:"1rem 0", sm:"2rem 0"},
        }}
      >
        <Container sx={{ minWidth: "85%", width:{xs:"", sm:"86%", md:""} }}>
          <Typography
            sx={{
              color: "#0D0E10",
              fontSize: {xs:"20px", sm:"34px", md:"50px", xl:"64px"},
              fontStyle: "normal",
              lineHeight: {sm:"72px", md:"110px"},
              fontWeight: "500",
            }}
          >
            Why we built Kalibre
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Cum egestas elementum
              morbi lacus lacinia commodo amet sit proin. Sodales interdum
              ullamcorper sollicitudin ultrices elementum consectetur lectus
              volutpat.
            </Typography>
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Massa ullamcorper tortor
              turpis id aliquam fermentum. Et arcu feugiat aliquam aliquam lacus
              facilisi venenatis. Morbi libero semper lectus laoreet sed. Leo
              ultricies sed rhoncus vel eu sollicitudin.
            </Typography>
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Massa ullamcorper tortor
              turpis id aliquam fermentum. Et arcu feugiat aliquam aliquam lacus
              facilisi venenatis. Morbi libero semper lectus laoreet sed. Leo
              ultricies sed rhoncus vel eu sollicitudin. Elementum adipiscing
              aliquam suspendisse habitant id vulputate.
            </Typography>
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Massa ullamcorper tortor
              turpis id aliquam fermentum. Et arcu feugiat aliquam aliquam lacus
              facilisi venenatis. Morbi libero semper lectus laoreet sed. Leo
              ultricies sed rhoncus vel eu sollicitudin.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "3rem 0",
            }}
          >
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Cum egestas elementum
              morbi lacus lacinia commodo amet sit proin. Sodales interdum
              ullamcorper sollicitudin ultrices elementum consectetur lectus
              volutpat.
            </Typography>
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Massa ullamcorper tortor
              turpis id aliquam fermentum. Et arcu feugiat aliquam aliquam lacus
              facilisi venenatis. Morbi libero semper lectus laoreet sed. Leo
              ultricies sed rhoncus vel eu sollicitudin.
            </Typography>
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Massa ullamcorper tortor
              turpis id aliquam fermentum. Et arcu feugiat aliquam aliquam lacus
              facilisi venenatis. Morbi libero semper lectus laoreet sed. Leo
              ultricies sed rhoncus vel eu sollicitudin. Elementum adipiscing
              aliquam suspendisse habitant id vulputate.
            </Typography>
            <Typography sx={p_style}>
              Lorem ipsum dolor sit amet consectetur. Massa ullamcorper tortor
              turpis id aliquam fermentum. Et arcu feugiat aliquam aliquam lacus
              facilisi venenatis. Morbi libero semper lectus laoreet sed. Leo
              ultricies sed rhoncus vel eu sollicitudin.
            </Typography>
          </Box>
        </Container>
        <ScrollToTop/>
      </Box>
    </>
  );
}

export default aboutUs;
