import { Card, CardContent, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect } from "react";
import api from "../utils/httpCommons";
import { MyContext } from "./ContextProvider";

function OtpSuccesCard(props) {
  const { isModel,whatsappStatus } = props;

  const { globalState, setGlobalState } = useContext(MyContext);

  const router = useRouter();

  useEffect(() => {
    sendData();
    const redirectTimer = setTimeout(() => {
      if (isModel) {
        setGlobalState((prev) => {
          return {
            ...prev,
            ["authModel"]: false,
          };
        });
      } else {
        router.push("/");
      }
    }, 900);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  const sendUserInfoToBackend = async (postData) => {
    try {
      const response = await api.post("supertoken/", postData);
      const result = response.data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const sendData = useCallback(() => {
    if (globalState?.userInfo != null) {
      let data = {
        username: globalState?.userInfo?.phone_number,
        userid: globalState?.userInfo?.user_id,
        type: "candidate",
        phone_number: globalState?.userInfo?.phone_number,
        roles: globalState?.userInfo?.role,
        source: "b2c",
        whatsapp : whatsappStatus
      };

      sendUserInfoToBackend(data);
    }
  }, [globalState.userInfo,whatsappStatus]);

  return (
    <>
    <Box
    sx={{
      display: 'flex',
      justifyContent: { xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' },
      alignItems: 'center',
    }}
    >
      <Card
        sx={{
          width: isModel ? null : {
            xs:'100%',
            sm:'55%',
            md:'35%',lg:'30%',
            xl:"31%",},
          height: isModel ? null :{ xs:"15rem",sm:"19.4rem", md:"20rem"},
          backgroundColor: "#FFF",
          boxShadow: "0px 8px 25px 0px rgba(13, 10, 44, 0.06)",
          borderRadius: "20px",
          padding: {xs:"0px 0px", sm:"0px 10px", xl:"20px 40px"},
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginTop: {xs:"0.5rem", sm:"2rem"} }}>
            <img src="images/sucss.png" width={79} />
          </Box>
          <Typography
 sx={{ fontSize:{xs:"29px",sm:"28px",md:'36px',lg:'36px',xl:'36px'}, lineHeight: "40px", fontWeight: "bolder" }}          >
            Secure your role!
          </Typography>
          <Typography
            sx={{
              fontSize: {xs:"15", sm:"18px", md:"18px", lg:"18px", xl:"18px"},
              lineHeight: "24px",
              fontWeight: "400",
              color: "#212529",
              marginTop: "5px",
            }}
          >
            Your account has been created succesfully.
          </Typography>
        </CardContent>
      </Card>
      </Box>
    </>
  );
}

export default OtpSuccesCard;
