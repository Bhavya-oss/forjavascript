import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useRef, useEffect, useContext } from "react";
import SingInCard from "../components/SingInCard";
import OtpCard from "../components/OtpCard";
import api from "../utils/httpCommons";
import OtpSuccesCard from "../components/OtpSuccesCard";
import { MyContext } from "../components/ContextProvider";
import SingUpCard from "../components/SingUpCard";
import AutoCarousel from "../components/views/AutoCarousel";
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
  NVIDIA_CMP,
} from "../components/constants/ImagesLink";

const image1 = [
  COCACOLA_CMP,
  NVIDIA_CMP,
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
];

const image2 = [
  ADOBE_CMP,
  NVIDIA_CMP,
  PAYTM_CMP,
  MPLSPORTS_CMP,
  SWIGGY_CMP,
  OYO_CMP,
  RAZORPAY_CMP,
  LINKEDIN_CMP,
  UBER_CMP,
  LICIOUS_CMP,
  META_CMP,
  EXPEDIA_CMP,
  OGILVY_CMP,
  WALMART_CMP,
  CANVA_CMP,
  COCACOLA_CMP,
];

function signIn() {
  const { setGlobalState, globalState } = useContext(MyContext);
  const isTabView = useMediaQuery("(min-width: 960px)");
  const isDeskTopView = useMediaQuery("(min-width: 1200px)");
  const isMobileView = useMediaQuery("(max-width: 600px)");

  const [showCheckBox, setShowCheckBox] = useState(false);

  const marginTopValue = () => {
    if (isDeskTopView) {
      return "4em";
    } else if (isMobileView) {
      return "7em";
    } else {
      return "4em";
    }
  };

  // const data = isDesktop;

  //phone number state
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setGlobalState((prev) => {
      return {
        ...prev,
        ["showCard"]: "signInCard",
      };
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/images/background.png)",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ minWidth: "85%" }}>
          <Box
            sx={{
              // paddingLeft:{xs:"20px",sm:'20px',md:'20px',lg:'0px',xl:'0px'},
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
                xl: "flex-start",
              },
              alignItems: "center",
            }}
          >
            <img
              src="/images/Kalibre-logo.png"
              alt="KalibreAI logo"
              style={{
                marginBottom: isTabView ? "2em" : "1em",
                width: isTabView ? "15%" : "28%",
                marginTop: marginTopValue(),
              }}
            />
          </Box>

          {globalState.showCard == "signInCard" ? (
            <SingInCard
              phone={phone}
              setPhone={setPhone}
              setShowCheckBox={setShowCheckBox}
            />
          ) : globalState.showCard == "otpCard" ? (
            <OtpCard
              phone={phone}
              setPhone={setPhone}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              showCheckBox={showCheckBox}
            />
          ) : globalState.showCard == "successCard" ? (
            <OtpSuccesCard />
          ) : globalState.showCard == "signUpCard" ? (
            <SingUpCard phone={phone} setPhone={setPhone} />
          ) : null}

          <Typography
            sx={{
              color: "#9FA0A3",
              fontSize: {
                xs: "18px",
                sm: "40px",
                md: "45px",
                lg: "50px",
                xl: "50px",
              },
              fontWeight: "600",
              lineHeight: "55px",
              marginTop: {
                xs: "3rem",
                sx: "18rem",
                sm: "12rem",
                md: "10rem",
                lg: "18rem",
                xl: "15rem",
              },
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              },
            }}
          >
            Unlock 50,000+ jobs from top companies
          </Typography>
        </Container>
        <Box sx={{ marginTop: { xs: "0.2", sm: "2rem" }, }}>
        <Stack spacing={2}>

          <AutoCarousel direction="right" img_links={image1} />
          <AutoCarousel direction="left" img_links={image2} />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

signIn.hideNavbar = true;
signIn.hideFooter = true;

export default signIn;
