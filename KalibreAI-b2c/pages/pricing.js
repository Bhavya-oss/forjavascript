import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AvatarImage from "../components/views/AvatarImage";
import {
  AMAZON_CMP,
  APPLE_CMP,
  GOOGLE_CMP,
  INFINITY_META_CMP,
  MICROSOFT_CMP,
  STRIPE_CMP,
} from "../components/constants/ImagesLink";

function pricing() {
  const [value, setValue] = useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log("slider value ====",newValue)
  };

  const marks = [
    {
      value: 5,
      label: "5k",
    },
    {
      value: 10,
      label: "10k",
    },
    {
      value: 15,
      label: "15k",
    },
    {
      value: 20,
      label: "20k",
    },
    {
      value: 25,
      label: "25k",
    },
    {
      value: 30,
      label: "30k",
    },
    {
      value: 35,
      label: "35k",
    },
    {
      value: 40,
      label: "40k",
    },
    {
      value: 45,
      label: "45k",
    },
    {
      value: 50,
      label: "50k",
    },
  ];

  const companyImages = [
    AMAZON_CMP,
    MICROSOFT_CMP,
    INFINITY_META_CMP,
    STRIPE_CMP,
    GOOGLE_CMP,
    APPLE_CMP,
  ];

  return (
    <>
      <Container sx={{ minWidth: "85%", }}>
        <Box
          sx={{
            margin: "80px 0",
            width: "55%",
          }}
        >
          <Typography
            sx={{
              color: "#0D0E10",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "75px",
            }}
          >
            Simple, transparent pricing that grows with you.
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "30px 50px",
            width: "86%",
          }}
        >
          <Typography
            sx={{
              color: "#151522",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "48px",
              fontSize: "32px",
            }}
          >
            Select your plan
          </Typography>

          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Slider
              defaultValue={15}
              step={5}
              min={5}
              max={50}
              marks={marks}
              onChange={handleChange}
              value={value}
              sx={{
                width: "100%",
                color: "black",
                "& .MuiSlider-track": {
                  color: "black",
                  border: "1px solid black",
                  height: 10,
                },
                "& .MuiSlider-rail": {
                  color: "gray",
                  border: "2px solid gray",
                  height: 8,
                },
                "& .MuiSlider-thumb": {
                  color: "white",
                  width: 30,
                  height: 18,
                  borderRadius: 2,
                  border: "1px solid black",
                },
                "& .MuiSlider-valueLabel": {
                  color: "green",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            margin: "30px 45px",
            display: "flex",
            gap: "70px",
          }}
        >
          <Box
            sx={{
              padding: "40px",
              border: "3px solid #D3D3D3",
              borderRadius: "5px",
              width: "353px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "47px",
                fontWeight: "500",
                lineHeight: "38px",
                fontStyle: "normal",
              }}
            >
              Free
            </Typography>

            <Typography
              sx={{
                fontSize: "47px",
                fontWeight: "400",
                lineHeight: "38px",
                fontStyle: "normal",
                padding: "0 5px",
              }}
            >
              ₹0
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Grid container spacing={2}>
                <Grid item xl={3}>
                  <Typography>10000</Typography>
                </Grid>
                <Grid item xl={9}>
                  <Typography>Silver coins</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xl={3}>
                  <Typography>150</Typography>
                </Grid>
                <Grid item xl={9}>
                  <Typography>Gold coins</Typography>
                </Grid>
              </Grid>
            </Box>

            <Divider />

            <Box>
              <Typography>Benefits</Typography>
              <ul style={{ marginLeft: "20px", marginTop: "11px" }}>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    20 Normal candidate unlock
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    5 Pre-assessed candidates
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    5 Interview templates
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    5 Interviews (own Interviews)
                  </Typography>
                </li>
              </ul>
            </Box>

            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#0D0E10",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0D0E10",
                    color: "white",
                  },
                  textTransform: "none",
                }}
              >
                Start free trial
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "40px",
              border: "3px solid",
              border: "3px solid #D3D3D3",
              borderImage: "linear-gradient(45deg, #00E1F9, #5960FF, #6CECF6)",
              borderImageSlice: "1",
              borderRadius: "5px",
              width: "353px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "47px",
                fontWeight: "500",
                lineHeight: "38px",
                fontStyle: "normal",
              }}
            >
              Trending
            </Typography>

            <Typography
              sx={{
                fontSize: "47px",
                fontWeight: "400",
                lineHeight: "38px",
                fontStyle: "normal",
                padding: "0 5px",
              }}
            >
              {`₹${value * 1000}`}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Grid container spacing={2}>
                <Grid item xl={3}>
                  <Typography>{(value / 5) * 25000}</Typography>
                </Grid>
                <Grid item xl={9}>
                  <Typography>Silver coins</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xl={3}>
                  <Typography>{(value / 5) * 250}</Typography>
                </Grid>
                <Grid item xl={9}>
                  <Typography>Gold coins</Typography>
                </Grid>
              </Grid>
            </Box>

            <Divider />

            <Box>
              <Typography>Benefits</Typography>
              <ul style={{ marginLeft: "20px", marginTop: "11px" }}>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    {(value / 5) * 50} Normal candidate unlock
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    {(value / 5) * 8} Pre-assessed candidates
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    {(value / 5) * 8} Interview templates
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    {(value / 5) * 8} Interviews (own Interviews)
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    {(value / 5) * 5} Kalibre interviewers
                  </Typography>
                </li>
              </ul>
            </Box>

            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#0D0E10",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0D0E10",
                    color: "white",
                  },
                  textTransform: "none",
                }}
              >
                Buy now
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              padding: "40px",
              border: "3px solid #D3D3D3",
              borderRadius: "5px",
              width: "353px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "47px",
                fontWeight: "500",
                lineHeight: "38px",
                fontStyle: "normal",
              }}
            >
              Custom
            </Typography>

            <Typography
              sx={{
                fontSize: "47px",
                fontWeight: "400",
                lineHeight: "38px",
                fontStyle: "normal",
                padding: "0 5px",
              }}
            >
              ₹500
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography>10000</Typography>
                <Typography>Silver coins</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography>150</Typography> <Typography>Gold coins</Typography>
              </Box>
            </Box>

            <Divider />

            <Box>
              <Typography>Benefits</Typography>
              <ul style={{ marginLeft: "20px", marginTop: "11px" }}>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    20 Normal candidate unlock
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    5 Pre-assessed candidates
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    5 Interview templates
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: "16px" }}>
                    5 Interviews (own Interviews)
                  </Typography>
                </li>
              </ul>
            </Box>

            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#0D0E10",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0D0E10",
                    color: "white",
                  },
                  textTransform: "none",
                }}
              >
                Buy now
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "100px", marginBottom: "70px" }}>
          <Typography
            sx={{
              color: "#0D0E10",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "55px",
            }}
          >
            Trusted by over 2 lakhs+ companies
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            {companyImages?.map((link, id) => {
              return (
                <div key={id}>
                  <img src={link} />
                </div>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default pricing;
