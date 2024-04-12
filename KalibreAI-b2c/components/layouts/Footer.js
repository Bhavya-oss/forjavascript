import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../utils/httpCommons";

function Footer() {
  const [email, setEmail] = useState("");
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);
  const [success, setSuccess] = useState(false);
  // const isDesktop = useMediaQuery("(max-width: 600px)");


  const isBeforeMobileView = useMediaQuery('(max-width: 392px)'); // Adjust the breakpoint as needed for mobile view

  const isMobileView = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed for mobile view
  const isDesktopView = useMediaQuery('(min-width: 1280px)'); // Adjust the breakpoint as needed for desktop view
 
  const submit = async (e) => {
    setIsCorrectEmail(true);
    setSuccess(false);

    const email = e;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
  
    if (emailRegex.test(email)) {
      setIsCorrectEmail(true);
      const data = {
        email: email,
      };
      try {
        const result = await emailSend(data);

        // console.log("qwe result ====", result);
        setSuccess(result);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsCorrectEmail(false);
    }
  };

  useEffect(() => {
    if (success?.success == true) {
      setSuccess(true);
      setEmail("");
      setIsCorrectEmail(true);
    }

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [success]);

  const emailSend = async (data) => {
    try {
      const response = await api.post("client/mail", data);
      const result = response.data;

      return result;
    } catch (erorr) {
      console.log(erorr);
    }
  };
  const getWidth = () => {
    if(isBeforeMobileView){
      return "150px"
    }
    if (isMobileView) {
      return "198px"; 
        } else if (isDesktopView) {
          return "230px";
        } else {
          // For tablet and laptop view, you can use the same height as desktop
          return "180px";
        }
      };
  
  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          // height: "476px",
          // background:" linear-gradient(180deg, #FFF 0%, #C4D8FF 100%)",
          paddingTop: {xs:"3rem", sm:"4rem"},
          paddingBottom: "6rem",
          // border:"1px solid",
          paddingTop:{xs:"1rem", sm:"0.2rem", md:"8rem"}
        }}
      >
        <Container sx={{ minWidth: {sm:"100%", md:"100%", lg:"95%", xl:"95%"} }}>
          <Box>
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: "180px",
                  sm: "100px",
                  md: "130px",
                  lg: "130px",
                  xl: "130px",
                },
                borderRadius:"20px",
                background:"#fff",
                boxShadow: "0px 4px 14px 0px #DCE3FF",
                paddingBottom:{xs:"1.9rem", sm:"1rem", xl:"1rem"},
                paddingTop:{sm:"1rem", md:""},
              }}
            >
              <Grid container spacing={{ xs: 2, sm: 0, md: 0, lg: 2, xl: 2 }}>
                <Grid item xs={0} sm={0} md={0} lg={1} xl={1} />
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={5}
                  xl={5}
                  sx={{ paddingTop: "0px" }}
                >
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "300",
                      fontSize: { xs: "19.2px", sm: "28px", md:"30px", lg:"30px",  xl: "40px" },
                      lineHeight: {xs:"32px", sm:"24px", md:"32px"},
                      letterSpacing: "-1%",
                      color: "#253746",
                      marginTop: "45px",
                      marginTop: {
                        xs: "0px",
                        sm: "40px",
                        md: "48px",
                        lg: "47px",
                        xl: "45px",
                      },
                      marginLeft: {
                        xs: "16px",
                        sm: "19px",
                        md: "25px",
                        lg: "0px",
                        xl: "0px",
                      },
                    }}
                  >
                   Join the Kalibre community
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={11}
                  sm={6}
                  md={6}
                  lg={5}
                  xl={5}
                  sx={{
                    display: {
                      xs: "",
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                    textAlign: {
                      xs: "",
                      sm: "",
                      md: "center",
                      lg: "center",
                      xl: "center",
                    },

                    justifyContent: {
                      xs: "",
                      sm: "",
                      md: "",
                      lg: "flex-end",
                      xl: "flex-end",
                    },
                  }}
                >
                  <Box>
                    <TextField
                      size="large"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      sx={{
                        marginTop: {
                          xs: "0px",
                          sm: "21px",
                          md: "35px",
                          lg: "35px",
                          xl: "35px",
                        },
                        marginLeft: {
                          xs: "15px",
                          sm: "20px",
                          md: "25pxpx",
                          lg: "0px",
                          xl: "0px",
                        },
                        marginRight: {
                          xs: "15px",
                          sm: "15px",
                          md: "0px",
                          lg: "0px",
                          xl: "0px",
                          fontSize: "4px",
                        },
                        minWidth: getWidth(), // Set minWidth based on isDesktop

                      }}
                      inputProps={{
                        style: { minWidth:getWidth() }, // Set minWidth directly to the input field
                      }}
                      InputProps={{
                        
                        endAdornment: (
                          <Button
                            onClick={() => {
                              submit(email);
                            }}
                            sx={{
                              backgroundColor: "black",
                              color: "white",
                              width: {xs:"8rem", sm:"8rem", md:"8rem", lg:"10rem", xl:"10rem"},
                              fontSize: {
                                xs: "16px",
                                sm: "16px",
                                md: "16px",
                                lg: "16px",
                                xl: "16px",
                              },
                              "&:hover": {
                                backgroundColor: "black",
                                color: "white",
                              },
                            }}
                          >
                            Subscribe
                          </Button>
                        ),
                      }}
                    />

                    {!isCorrectEmail && (
                      <Box sx={{ marginLeft: {xs:"1.2rem",sm:"1.2rem", md:"4rem", lg:"4rem", xl:"-8.8rem" }}}>
                        <Typography sx={{ color: "red", fontSize:{xs:"0.8rem",sm:"0.8rem", md:"0.8rem", lg:"0.8rem", xl:"1rem" } }}
                        
                        >
                          Please enter a valid email address!
                        </Typography>
                      </Box>
                    )}
                    {success && (
                      <Box sx={{ marginLeft: {xs:"1rem", sm:"1rem", md:"-1rem", lg:"-1rem", xl:"-12.8rem"} }}>
                        <Typography sx={{ color: "green",fontSize: {xs:"0.8rem",sm:"0.8rem", md:"0.8rem", lg:"0.8rem", xl:"1rem" } }}>
                          Thank you for subscribing!
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>

                <Grid item xs={0} sm={0} md={0} lg={0} xl={1} />
              </Grid>
            </Box>

            <Box
              sx={{
                // display: {xs:"block", sm:"flex"},
                // justifyContent: {xs:"", md:"space-between"},
                display:{xs:"block", sm:"flex"},
                justifyContent:"space-around",
                marginTop: {xs:"2rem", sm:"3rem", md:"4rem", lg:"4rem", xl:"6rem"},
                marginBottom:{sm:"2rem", md:"0rem"}
              }}
            >
              <Box sx={{ width:{xs:"80%", sm:'28%', xl:"28%"} }}>
                <Box>
                  <img
                    src="/images/Kalibre-logo.png"
                    alt="KalibreAI logo"
                    width={'50%'}
                  />
                </Box>
                <Typography sx={{ 
                    fontSize: {
                      xs: "14px",
                      sm: "13px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    },
                    lineHeight: "23px",
                    marginTop:""
                   }}>
                  &copy; 2023 All rights reserverd.
                </Typography>
                <Typography sx={{ 
                    fontSize: {
                      xs: "14px",
                      sm: "13px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    },
                    lineHeight: "23px",
                 }}>
                  DWise Techlabs Pvt ltd.
                </Typography>
                {/* <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "13px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                    },
                    lineHeight: "23px",
                    // marginTop: "1rem",
                  }}
                >
                  hello@kalibre.ai
                </Typography>
                <Typography sx={{ fontSize: {
                      xs: "14px",
                      sm: "13px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                    },
                    lineHeight: "23px", 
                    textTransform: "none",
                  }}>
                  +91 8088354074
                </Typography> */}
              </Box>

              {/* <Box sx={{marginTop:{xs:"20px", sm:"0px", md:"0px", lg:"0px", xl:"0px", width:"18%"}}}>
                <Link style={{ textDecoration: "none" }} href="/aboutUs">
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      lineHeight: "23px",
                      color: "#253746",
                      textDecoration: "null",
                      marginTop: {
                        xs: "20px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                        xl: "0px",
                      },
                    }}
                  >
                    About us
                  </Typography>
                </Link>
                <Link
                  href="/contactUs"
                  style={{ textDecoration: "none" }}
                  underline="none"
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      lineHeight: "24px",
                      marginTop: {sm:"0px", md:"5px"},
                      textDecoration: "null",
                      color: "#253746",
                    }}
                  >
                    Contact us
                  </Typography>
                </Link>
                <Link
                  href="/pricing"
                  style={{ textDecoration: "none" }}
                  underline="none"
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      lineHeight: "23px",
                      marginTop: "5px",
                      textDecoration: "null",
                      color: "#253746",
                    }}
                  >
                    Pricing
                  </Typography>
                </Link>
              </Box> */}

              <Box sx={{width:{xs:"65%", sm:"30%"}}}>
              <Link style={{ textDecoration: "none" }} 
              href="/privacy">
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      lineHeight: "23px",
                      color: "#253746",
                      textDecoration: "null",
                      marginTop: {
                        xs: "20px",
                        sm: "0px",
                       
                      },
                    }}
                  >
                    Privacy Statement
                  </Typography>
                </Link>
                <Link
                  href="/terms"
                  style={{ textDecoration: "none" }}
                  underline="none"
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      lineHeight: "23px",
                      marginTop: {sm:"0px", md:"5px"},
                      textDecoration: "null",
                      color: "#253746",
                    }}
                  >
                    Terms of Service
                  </Typography>
                </Link>
                <Link
                  href="/cancellation"
                  style={{ textDecoration: "none" }}
                  underline="none"
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      lineHeight: "23px",
                      marginTop: {sm:"0px", md:"5px"},
                      textDecoration: "null",
                      color: "#253746",
                    }}
                  >
                    Cancellation and Refund Policy
                  </Typography>
                </Link>
                <Link
                  href="/contact"
                  style={{ textDecoration: "none" }}
                  underline="none"
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      lineHeight: "24px",
                      marginTop: {sm:"0px", md:"5px"},
                      textDecoration: "null",
                      color: "#253746",
                    }}
                  >
                    Contact us
                  </Typography>
                </Link>
              </Box>

              <Box
                sx={{
                  width:{xs:"60%", sm:'35%',xl:"28%"}
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "px",
                      sm: "13px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                    },
                    lineHeight: "23px",
                    color: "#253746",
                    fontStyle: "normal",
                    fontWeight: "400", marginTop: {
                      xs: "20px",
                      sm: "0px",
                     
                    },
                  }}
                >
                  Find us on
                </Typography>

                <Box sx={{display:'flex',flexDirection:'row'}} >
                  <Box>
                  <a
                    href="https://instagram.com/kalibre.ai?igshid=MWQ1ZGUxMzBkMA=="
                    target="_blank"
                  >
                    <img
                      src="https://res.cloudinary.com/kalibre-ai/image/upload/v1695280634/b2c%20images/svg%20kalibre%20images/company%20svg/Benefits-Icon-1.svg_1_ki37fm.svg"
                      alt="instagram"
                      className="responsive"
                      // height={"100%"}
                      // width={"100%"}
                    />
                  </a>
                  </Box >
                  <Box >
                  <a href="https://www.facebook.com/kalibreai" target="_blank">
                    <img
                      src="https://res.cloudinary.com/kalibre-ai/image/upload/v1695280634/b2c%20images/svg%20kalibre%20images/company%20svg/Benefits-Icon-1.svg_2_hk7mxt.svg"
                      alt="facebook"
                      className="responsive"
                      // height={"100%"}
                      // width={"100%"}
                    />
                  </a>
                  </Box>
                  <Box >
                  <a
                    href="https://www.linkedin.com/company/kalibreai/"
                    target="_blank"
                  >
                    <img
                      src="https://res.cloudinary.com/kalibre-ai/image/upload/v1695280634/b2c%20images/svg%20kalibre%20images/company%20svg/Benefits-Icon-1.svg_3_iybckt.svg"
                      alt="linkedin"
                      className="responsive"
                      // height={"100%"}
                      // width={"100%"}
                    />
                  </a>
                  </Box>
                </Box>
              </Box>

              
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;