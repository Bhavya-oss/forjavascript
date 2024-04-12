import { Box, Container, Grid, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";
import ContactForm from "../components/forms/ContactForm";
import ScrollToTop from "../components/ScrollToTop";

function contactUs() {
  return (
    <>
      <Container sx={{ minWidth: "85%" }}>
        <Box
          sx={{
            padding: {
              xs: "4rem 0rem 4rem 0rem",
              sm: "8rem 0rem 5rem 0rem",
              md: "8rem 3rem 8rem 3rem",
            },
          }}
        >
          <Grid container spacing={1}>
            <Grid item sm={2} lg={3} xl={1} />

            <Grid item sm={8} lg={8} xl={7}>
              <Box>
                <Typography
                  sx={{
                    color: "#0D0E10",
                    fontSize: {
                      xs: "31px",
                      sm: "29px",
                      md: "32px",
                      lg: "32px",
                      xl: "64px",
                    },
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: {
                      xs: "39px",
                      sm: "32px",
                      md: "34px",
                      xl: "75px",
                    },
                  }}
                >
                  Love to hear from you, Get in touch
                </Typography>
              </Box>

              <Box
                sx={{
                  marginTop: "36px",
                  padding: "48px",
                  width: { sm: "420px", md: "450px", xl: "550px" },
                  border: "3px solid",
                  borderImage:
                    "linear-gradient(45deg, #00E1F9, #5960FF, #6CECF6)",
                  borderImageSlice: "1",
                  borderRadius: "12px",
                }}
              >
                <ContactForm />
              </Box>
            </Grid>
            <Grid
              item
              sm={12}
              xl={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  flexDirection: {
                    sm: "row",
                    md: "row",
                    lg: "row",
                    xl: "column",
                  },
                  marginTop: { xs: "2.5rem", sm: "5rem" },
                  gap: {
                    xs: "23px",
                    sm: "10px",
                    md: "10px",
                    xl: "36px", // Adjust the value as per your requirement
                  },
                  paddingLeft: { sm: "2%", md: "2%", lg: "1%", xl: "0%" },

                  // "& > *": {
                  //   flexGrow: 1, // Each box will take equal available space
                  //   flexShrink: 0, // Prevent boxes from shrinking
                  //   flexBasis: "0", // Set initial flex basis to 0 (will be distributed equally)
                  // },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: "8px", sm: "11px", xl: "16px" },
                    marginBottom: { xs: "30px", sm: "0px" },
                  }}
                >
                  <LocalPhoneOutlinedIcon
                    // fontSize="large"
                    sx={{
                      color: "#BDC1C5",
                      fontSize: { sm: "1.6rem", md: "1.9rem", xl: "2.1875rem" },
                    }}
                  />

                  <Box sx={{ width: { sm: "180px" } }}>
                    <Typography
                      sx={{
                        color: "#0D0E10",
                        fontSize: { xs: "16px", md: "20px", xl: "25px" },
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "24px",
                        marginBottom: { sm: "2px", md: "5px", xl: "10px" },
                      }}
                    >
                      Call us
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: "17px", md: "18px", xl: "18px" },
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: { xs: "20px", sm: "28px" },
                        color: "#18181B",
                      }}
                    >
                      9483225221{" "}
                    </Typography>
                    {/* <Typography
                      sx={{
                        fontSize: {sm:"17px", md:"18px", xl:"20px"},
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: {xs:"20px", sm:"28px"},
                        color: "#18181B",
                      }}
                    >
                      (316) 555-0342
                    </Typography> */}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: { sm: "flex", md: "flex", xl: "block" },
                    "& > *": {
                      flexGrow: 1, // Each box will take equal available space
                      flexShrink: 0, // Prevent boxes from shrinking
                      flexBasis: "0", // Set initial flex basis to 0 (will be distributed equally)
                    },
                    gap: "36px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: "8px", sm: "11px", xl: "16px" },
                      paddingBottom: {
                        xs: "0px",
                        sm: "0px",
                        md: "0px",
                        lg: "36px",
                        xl: "0px",
                      },
                      marginBottom: { xs: "30px", sm: "0px" },
                    }}
                  >
                    <EmailOutlinedIcon
                      sx={{
                        color: "#BDC1C5",
                        fontSize: { sm: "1.6rem", xl: "2.1875rem" },
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color: "#0D0E10",
                          fontSize: { xs: "16px", md: "20px", xl: "25px" },
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight: "24px",
                          marginBottom: { sm: "2px", md: "5px", xl: "10px" },
                        }}
                      >
                        Email us
                      </Typography>

                      <Typography
                        sx={{
                          color: "#0D0E10",
                          fontSize: { sm: "17px", md: "18px", xl: "20px" },
                          fontStyle: "normal",
                          fontWeight: "530",
                          lineHeight: "24px",
                          marginBottom: { sm: "2px", md: "3px", xl: "10px" },
                          // margin
                        }}
                      >
                        For anything related to Jobs/Careers{" "}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { sm: "17px", md: "18px", xl: "20px" },
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: { xs: "20px", sm: "28px" },
                          color: "#18181B",
                          marginBottom: "8px",
                        }}
                      >
                        jobs@kalibre.ai
                      </Typography>

                      <Typography
                        sx={{
                          color: "#0D0E10",
                          fontSize: { sm: "17px", md: "18px", xl: "20px" },
                          fontStyle: "normal",
                          fontWeight: "530",
                          lineHeight: "24px",
                          marginBottom: { sm: "2px", md: "3px", xl: "10px" },
                        }}
                      >
                        For all other things
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { sm: "17px", md: "18px", xl: "20px" },
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: { xs: "20px", sm: "28px" },
                          color: "#18181B",
                        }}
                      >
                        hello@kalibre.ai
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: { sm: "11px", xl: "16px" } }}>
                  <LocationOnOutlinedIcon
                    sx={{
                      color: "#BDC1C5",
                      fontSize: { sm: "1.6rem", xl: "2.1875rem" },
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color: "#0D0E10",
                        fontSize: { xs: "16px", md: "20px", xl: "25px" },
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "24px",
                        marginBottom: { sm: "2px", xl: "10px" },
                      }}
                    >
                      Location
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: "17px", xl: "20px" },
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "28px",
                        color: "#18181B",
                      }}
                    >
                      1st Floor, 247, JCK Industrial Park, Hebbal,Belagola Post
                      Mysuru, Mysuru, Karnataka, 570016
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={0} xl={1} />
          </Grid>
        </Box>
      </Container>
      <ScrollToTop />
    </>
  );
}

export default contactUs;
