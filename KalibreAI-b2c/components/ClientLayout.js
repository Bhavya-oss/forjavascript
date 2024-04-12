import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  useMediaQuery,
} from "@mui/material";
import {
  CLIENT_HERO,
  ENCRED_IMAGE,
  MADIATEK_IMAGE,
  HAVELLS_IMAGE,
  BANIX_IMAGE,
  FLOWS_IMAGE,
  ISMART_IMAGE,
  CAREER_KRAFT_IMAGE,
  INTREPID_OVERLAND_IMAGE,
  DERMIDIA_IMAGE,
  DERMIDIA_NEW_IMAGE,
  COGNITIVE_CLOUDS_IMAGE,
  CHRIP_SOUNDS_IMAGE,
  JUST_GHAR_IMAGE,
  HOLD_IT_WRITE_IMAGE,
  DYN_PRO_IMAGE,
  ASSURED_AUTOMATION_IMAGE,
  BIGGWORKS_IMAGE,
  ARITHA_IMAGE,
  RECRO_IMAGE,
  QUICKII_IMAGE,
  KEMSYS_IMAGE,
  NUVENTO_IMAGE,
  SANDLOGIC_IMAGE,
  CLIENT_MOBILE_HERO,
  COGNITIVE_CLOUDS_NEW_IMAGE,
} from "./constants/ImagesLink";
import Link from "next/link";

import ClientAutoCarousel from "./views/ClientAutoCarousel";
import ClientTab from "./views/ClientTab";
import ClientCardCarousel from "./views/ClientCardCarousel";
import ClientTechHiring from "./views/ClientTechHiring";
import Bubbles from "./views/Bubbles";
function ClientLayout() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTab = useMediaQuery("(max-width:900px)");
  const isGreaterTab = useMediaQuery("(min-width: 900px) and (max-width: 1200px)");
  const isBeforeDesktop = useMediaQuery("(min-width: 1200px) and (max-width: 1500px)")
  const isDeskTop = useMediaQuery("(min-width:1500px)");
  const image_carousel = [
    ENCRED_IMAGE,
    MADIATEK_IMAGE,
    HAVELLS_IMAGE,
    BANIX_IMAGE,
    FLOWS_IMAGE,
    ISMART_IMAGE,
    CAREER_KRAFT_IMAGE,
    INTREPID_OVERLAND_IMAGE,

    DERMIDIA_IMAGE,
    COGNITIVE_CLOUDS_IMAGE,
    CHRIP_SOUNDS_IMAGE,
    JUST_GHAR_IMAGE,
    HOLD_IT_WRITE_IMAGE,
    DYN_PRO_IMAGE,
    ASSURED_AUTOMATION_IMAGE,
    BIGGWORKS_IMAGE,
    ARITHA_IMAGE,
    RECRO_IMAGE,
    QUICKII_IMAGE,
    KEMSYS_IMAGE,
    NUVENTO_IMAGE,
    SANDLOGIC_IMAGE,


  ];

  var ReactRotatingText = require("react-rotating-text");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputStyle = {
    borderRadius: "10px", // Adjust the border radius as needed
    border: "1px white",
    backgroundColor: "#f5f5f4",
  };


  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setPhase((prevPhase) => prevPhase - 10);
    }, 100); // Adjust the interval to control the speed of the animation

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "5rem 0rem 8rem 0rem",
            sm: "8rem 0rem 15rem 0rem",
            md: "1rem 0rem 6rem 0rem",
            lg: "6rem 0rem 6rem 0rem",
            xl:"5rem 0rem 6rem 0rem"
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "100%", lg: "100%" },
            margin: "auto",
            marginBottom: { xs: "120px", sm: "120px", md: "80px" },
          }}
        >
          {/* <div class="container">
        <div class="marching-ant-border"></div>
      </div> */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Grid container spacing={isTab ? 10 : 18}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundImage: `url(${CLIENT_HERO})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    // height:isMobile? 250:800,

                    backgroundSize: "100% auto",
                    // width:'80%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: {

                      md: "100px",
                      lg: "30px",
                      xl: "50px",
                    },
                    paddingTop: { md: "0px" },
                  }}
                >

                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 40 40' preserveAspectRatio='none'>
<style>
    
  </style>
  <path d='M 20,20 L 40,40'/>
  <path d='M 20,20 L 00,40'/>
  <path d='M 20,20 L 40,0'/>
  <path d='M 20,20 L 0,0'/>
  <rect width='40' height='40'/>
</svg> */}


                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 500 230"
                    style={{
                      marginTop: isGreaterTab
                        ? "73px" // Set marginTop for screens larger than tablet but smaller than desktop
                        : isBeforeDesktop ?
                          "--5px"
                          : isDeskTop
                            ? "0px" // Set marginTop for desktop screens
                            : "2px", // Default value
                    }}
                  >

                    <defs />
                    <g>
                      <path d="M 81 36.9 L 168 36.9" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />


                      <path d="M 271 89 L 271 67.2 A 5 5 0 0 0 267 62.2 L 81 62.2" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />

                      <path d="M 400 36 L 376.5 36" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />
                      <path d="M 410 61 L 393.8 61" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />

                      <path d="M 368 104.5 L 423.5 104.5 A 9 9 0 0 0 432.5 100 L 432.5 72" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />


                      <path d="M 432.5 93.2 L 460 93.2 A 5 5 0 0 1 464 98.2 L 464 115" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />


                      <path d="M 485.5 36 L 485.5 28" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />


                      <path d="M 317.8 140 L 317.8 160 A 5 5 0 0 0 322 163.5 L 452 163.5  A 5 5 0 0 1 456.5 170 L 456.5 176" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />

                      <path d="M 420 211.8 L 397.8 211.8" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />
                      <path d="M 53.5 207 L 96 207" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />
                      <path d="M 72.2 189 L 72.2 168" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />

                      <path d="M 180 118.5 L 115 118.5 A 14 14 0 0 0 111.6 124 L 111.6 182 A 9 9 0 0 1 100 190.6 L 53.5 190.6 " fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />


                      <path d="M 37.9 174.6 L 37.9 142.5" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />

                    </g>

                  </svg>




                  <Grid
                    item
                    xs={8}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ display: { xs: "none", sm: "none", md: "block", position: "absolute", top: "15%", left: { md: "24%", lg: "27.6%" }, zIndex: 1 } }}
                  >
                    <Stack
                      spacing={isTab ? 4.3 : isMobile ? 4 : 5.4}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        marginTop: { md: "77px", lg: "159px", xl: "260px" },
                      }}
                    >
                      <Card
                        sx={{
                          borderRadius: "20px",
                          background: "#fff",
                          boxShadow:
                            "0px 6px 43px 0px rgba(220, 227, 255, 0.66)",
                          width: { md: "520px", lg: "640px", xl: "835px" },
                          padding: { md: "16px 0px 16px 32px", lg: "16px 0px" },
                        }}
                      >
                        <Box>
                          <Box sx={{ marginLeft: { xl: "3%" } }}>
                            <Box
                              sx={{
                                textAlign: "center",
                                display: "flex",
                                width: "100%",
                                margin: "auto",
                                justifyContent: "flex-start",
                              }}
                            >
                              <Box sx={{ marginRight: "16px" }}>
                                <Typography variant="client_heading">
                                  Put your
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: { lg: "140px" },
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  textAlign: "center",
                                  paddingRight: { xl: "8px" },
                                }}
                              >
                                <Typography variant="client_heading_chip">
                                  Tech{" "}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  borderRadius: "0px 3px 3px 0px",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <ReactRotatingText
                                  style={{
                                    fontSize: isDeskTop ? "60px" : "38px",
                                    fontWeight: 600,
                                    backgroundColor: "#D1FCFF",
                                    lineHeight: isDeskTop ? "90px" : "70px",
                                  }}
                                  items={[
                                    "Sourcing",
                                    "Screening",
                                    "Interviewing",
                                    "Hiring",
                                  ]}
                                />
                              </Box>
                            </Box>
                          </Box>
                          <Box sx={{ textAlign: "center" }}>
                            <Typography variant="client_heading">
                              on auto-pilot
                            </Typography>
                          </Box>
                        </Box>
                      </Card>

                      <Box sx={{ textAlign: "center" }}>
                        <Typography variant="client_sub_heading" style={{whiteSpace:'pre'}} >
                          Hire better{'  '}🌟{'    '}smarter{'  '}🤖{'    '}faster{'  '}⚡
                          {/* Hire better, smarter & faster */}

                        </Typography>
                      </Box>

                      <Box sx={{ textAlign: "center" }}>
                        {/* <Link target="_blank" href="https://fedev.kalibre.ai/employer"> */}
                        <Link href="/waitlist                                                                             ">
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "black",
                            fontSize: "30px",
                            width: { lg: "250px" },
                            "&:hover": {
                              color: "#fff",
                              background: "black",
                              borderRadius: "6px",
                              fontSize: { md: "26px", lg: "28px", xl: "30px" },
                              boxShadow: "none",
                            },
                          }}
                         
                          size="large"
                        >
                          Start Hiring
                        </Button>

                        {/* </Link> */}
                        </Link>
                      </Box>
                    </Stack>
                  </Grid>



                </Box>

              </Grid>
            </Grid>
          </Box>






          <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
            <Grid container >
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundImage: `url(${CLIENT_MOBILE_HERO})`,

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    // height:isMobile? 250:800,

                    backgroundSize: "100% auto",
                    // width:'80%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    paddingTop: { xs: "0px", sm: "0px", },
                  }}
                >

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 500 300"
                    style={{
                      marginTop: isMobile
                        ? "0px" // Set marginTop for mobile screens
                        : "0px" // Set marginTop for tablet screens

                    }}
                  >

                    <defs />
                    <g>

                      <path d="M 146 114 L 67 114" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />
                      <path d="M 424 125 L 424 102" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />
                      <path d="M 307 340 L 307 246" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />


                      <path d="M 180 194 L 120 194" fill="none" stroke="rgb(255, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke" class="marching-ant" />

                    </g>

                  </svg>





                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "none",
                      marginTop: { xs: "8px", sm: "0px" },
                    },
                    margin: "auto",
                  }}
                >
                  <Stack spacing={4} sx={{ margin: "10px 0px 0px 0px" }}>
                    <Box>
                      <Card
                        sx={{
                          borderRadius: "20px",
                          background: "#fff",
                          boxShadow:
                            "0px 6px 43px 0px rgba(220, 227, 255, 0.66)",
                          width: { xs: "350px", sm: "650px" },
                          padding: "16px 0px 16px 32px",
                          // marginLeft:"100px",
                          margin: "auto",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            paddingLeft: { xs: "0%", sm: "0%" },
                          }}
                        >
                          <Box sx={{ marginRight: "10px" }}>
                            <Typography variant="client_heading">
                              Put your
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              // width: "140px",
                              display: "flex",
                              justifyContent: "flex-start",

                              textAlign: "center",
                              // paddingRight: "8px"
                            }}
                          >
                            <Typography variant="client_heading_chip">
                              Tech
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              borderRadius: "0px 3px 3px 0px",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <ReactRotatingText
                              style={{
                                fontSize: isMobile ? "24px" : "42px",
                                fontWeight: 600,
                                backgroundColor: "#D1FCFF",
                                lineHeight: isMobile ? "50px" : "63px",
                              }}
                              items={[
                                "Sourcing",
                                "Screening",
                                "Interviewing",
                                "Hiring",
                              ]}
                            />
                          </Box>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography variant="client_heading">
                            on auto-pilot
                          </Typography>
                        </Box>
                      </Card>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="client_sub_heading" style={{ whiteSpace:'pre' }}>
                      Hire better{'  '}🌟{'    '}smarter{'  '}🤖{'    '}faster{'  '} ⚡
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                      {/* <Link target="_blank" href="https://fedev.kalibre.ai/employer"> */}
                      <Link href="/waitlist">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "black",
                          fontSize: { xs: "20px", sm: "25px" },
                        }}
                        size="large"
                        onClick={handleOpen}
                      >
                        Start Hiring
                      </Button>
                      </Link>
                      {/* </Link> */}
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            margin: "auto",
            marginBottom: { xs: "100px", sm: "140px", md: "150px" },
          }}
        >
          <Box sx={{ marginTop: { lg: "158px", xl: "0px" } }}>
            <Stack spacing={isMobile ? 4 : 8}>
              <Box sx={{ margin: "auto", textAlign: "center" }}>
                <Typography variant="client_section_two_heading">
                  100s of tech companies are hiring on Kalibre
                </Typography>
              </Box>

              <Box>
                <ClientAutoCarousel image_carousel={image_carousel} />
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "88%", xl: "65%" },
            margin: "auto",
            marginBottom: "150px",
          }}
        >
          <ClientTab />
        </Box>
        <Box sx={{ width: "100%", margin: "auto", marginBottom: "150px" }}>
          <Box
            sx={{
              textAlign: "center",
              margin: {
                xs: "0% 0% 18% 0%",
                sm: "0 22% 7.6% 22%",
                md: "0 8% 6% 8%",
                xl: "0% 28% 4% 28%",
              },
            }}
          >
            <Typography variant="client_section_three_heading">
              Perpetually building the ultimate Tech talent pool..
            </Typography>
          </Box>
          <Stack spacing={2.8}>
            <ClientCardCarousel direction="right" />
            <ClientCardCarousel direction="left" />
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "95%", xl: "80%" },
            margin: "auto",
            marginBottom: "0px",
          }}
        >
          <ClientTechHiring />
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "95%", xl: "80%" },
            margin: "auto",
            marginBottom: { xs: "50px", sm: "150px" },
          }}
        >
          <Card
            sx={{
              borderRadius: "16px",
              boxShadow:
                "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
              padding: {
                xs: "30px 25px 30px 25px",
                sm: "30px 25px 30px 15px",
                md: "30px",
              },
            }}
          >
            <Box
              sx={{
                display: { xs: "block", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  marginBottom: { xs: "40px", sm: "0px" },
                }}
              >
                <Typography variant="client_section_three_heading">
                  Rev up your Tech hiring
                </Typography>
              </Box>

              <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                {/* <Link target="_blank" href="https://fedev.kalibre.ai/employer"> */}
                <Link href="/waitlist                                                                             ">

                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black" }}
                  onClick={handleOpen}
                >
                  Start Hiring
                </Button>
                </Link>

                {/* </Link> */}
              </Box>
            </Box>
          </Card>
        </Box>
        {/* <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" },
            margin: "auto",
            marginBottom: { xs: "90px", sm: "150px" },
          }}
        >
          <Box>
            <img
              className="image-responsive"
              src={
                isMobile
                  ? "https://res.cloudinary.com/kalibre-ai/image/upload/v1695725931/b2c%20images/clients/Hero%20image/floating_bubbles_fjutao.webp"
                  : "https://res.cloudinary.com/kalibre-ai/image/upload/v1695729946/b2c%20images/clients/Hero%20image/to_floating_bubble_hnwgbz.webp"
              }
              alt=""
              loading="lazy"
            />
          </Box>
        </Box> */}


        <Box sx={{marginBottom:{xs:"50px", sm:"150px"}}}>
          <Bubbles/>
        </Box>
        {/* <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "80%" },
            margin: "auto",
            marginBottom: "150px",
          }}
        >
          <Grid container alignItems="center" justifyContent="center" sx={{marginTop:"130px", marginBottom:{xs:"40px", sm:"0px"}}} >
                <Grid xs={12} sm={5} md={5}>
                  <Box sx={{marginBottom:{xs:"40px",sm:"0px"}}}>
                    <Typography variant="client_rareblocks">
                      “Rareblocks made it so simple. Our new site is so much
                      beautiful and easier to work with than my old site. I just
                      choose the page, make the change.”
                    </Typography>
                  </Box>
                </Grid>
                <Grid sm={2}>

                </Grid>
                <Grid xs={12} sm={4} md={4}>
                  <Box>
                    <img
                      style={{ width: "100%", height: "auto" }}
                      src={TECH_HIRING}
                      alt=""
                    />
                  </Box>
                </Grid>
              </Grid>
          <Card
                  sx={{
                    background:
                      "linear-gradient(223deg, rgba(234, 226, 255, 0.35) 3.09%, rgba(255, 255, 255, 0.35) 83.65%)",
                    borderRadius: "20px",
                    border: "1px solid #FFF",
                    padding: {xs:"12px", sm:"30px", md:"55px 50px 55px 105px"},
                    boxShadow:"0px 4px 14px 0px #DCE3FF",
                  }}
                >
                  <Stack direction="row" spacing={5}>
                    <Box>
                      <img className="image-responsive"
                        src="https://res.cloudinary.com/kalibre-ai/image/upload/v1694266230/b2c%20images/clients/Vector_11_eq907n.svg"
                        alt
                      />
                    </Box>
                    <Box>
                      <Box>
                      <Typography variant="client_cameron_title">Cameron Williamson</Typography>
                      </Box>
                      <Box>
                      <Typography variant="client_cameron_sub_title">
                        Director of Technology, CreativeGIG
                      </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
        </Box> */}

        <Box>
          <Box sx={{ width: "75%", margin: "auto" }}></Box>
          <Box
            sx={{
              width: { xs: "90%", sm: "90%", md: "95%", xl: "80%" },
              margin: "auto",
            }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                background:
                  "linear-gradient(180deg, rgba(238, 238, 255, 0.60) 0%, rgba(238, 252, 253, 0.60) 100%)",
                padding: {
                  xs: "20px 20px 0px 20px",
                  sm: "40px 40px 0px 40px",
                  md: "75px 75px 40px 75px",
                },
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={6} lg={5} xl={5}>
                  <Box
                    sx={{
                      margin: {
                        xs: "12px 0px 35px 0px",
                        sm: "12px 40px 28px 40px",
                        md: "12px 0px 43px 0px",
                      },
                      textAlign: { xs: "center", sm: "center", md: "left" },
                    }}
                  >
                    <Typography variant="client_hyper_growing_title">
                      100+ Companies hyper growing through Kalibre
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      textAlign: { xs: "center", sm: "center", md: "left" },
                      margin: {
                        xs: "0px",
                        sm: "0px 75px 28px 75px",
                        md: "0px 0px 0px 0px",
                      },
                    }}
                  >
                    <Typography variant="client_hyper_growing_sub_title">
                      From innovative startups to global tech titans, hundreds
                      of companies are using Kalibre to scale their tech teams.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <Box
                    sx={{
                      marginTop: { xs: "50px", md: "0px" },
                      marginLeft: { sm: "40px", md: "0px" },
                      marginRight: { sm: "40px", md: "0px" },
                    }}
                  >
                    <img
                      className="image-responsive"
                      src="https://res.cloudinary.com/kalibre-ai/image/upload/v1695724819/b2c%20images/clients/Hero%20image/group_1_azc4y7.webp"
                      alt=""
                      loading="lazy"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        {/* </Stack> */}
        {/* </Box> */}
      </Box>
    </>
  );
}

export default ClientLayout;
