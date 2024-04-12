import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../components/ContextProvider";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import SingUpCard from "../components/SingUpCard";
import OtpCard from "../components/OtpCard";
import OtpSuccesCard from "../components/OtpSuccesCard";

function signUp() {
  const { setGlobalState, globalState } = useContext(MyContext);

  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 960px)");

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
          justifyContent: isDesktop ? "flex-start" : "center",
        }}
      >
        <Container sx={{ minWidth: "85%" }}>
          <Box sx={{display: 'flex',
    justifyContent: { xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' },
    alignItems: 'center',}}
    >

    
          <img
            src="/images/Kalibre-logo.png"
            alt="KalibreAI logo"
            style={{ marginBottom: isDesktop?"2em":"1em",  width: isDesktop ?  "15%":"28%", marginTop: isDesktop ? '4em' : '12em',}}
          />
</Box>
          {globalState.showCard == "signInCard" ? (
            <SingUpCard
              phone={phone}
              setPhone={setPhone}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          ) : globalState.showCard == "otpCard" ? (
            <OtpCard phone={phone} setPhone={setPhone} />
          ) : globalState.showCard == "successCard" ? (
            <OtpSuccesCard whatsappStatus={isChecked} />
          ) : null}

          <Typography
            sx={{
              color: "#9FA0A3",
              fontSize:{ xs:"30px", sm:'40px',md:'50px',lg:'50px',xl:'50px'},
              fontWeight: "400",
              lineHeight: "55px",
              marginTop: {
                sx: "16rem",
                sm: "12rem",
                md: "18rem",
                lg: "18rem",
                xl: "18rem",
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
            Unlock 500+ jobs from top companies
          </Typography>
        </Container>
      </Box>
    </>
  );
}

signUp.hideNavbar = true;
signUp.hideFooter = true;

export default signUp;
