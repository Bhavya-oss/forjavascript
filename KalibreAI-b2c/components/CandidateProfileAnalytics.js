import {
  Box,
  Button,
  CardContent,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  CANDIDATE_MATCHES,
  cANDIDATE_UNLOCKS,
  CANDIDATE_COMPANY_TYPE,
  CANDIDATE_JOB_GROUP_APPLY,
  CANDIDATE_DREAM_COMPANIES,
  CANDIDATES_BACKGROUND_IMAGE,
  JOBS_GRADIENT_BACKGROUND_IMAGE,
} from "./constants/ImagesLink";
import { CenterFocusStrong } from "@mui/icons-material";

function CandidateProfileAnalytics() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTab = useMediaQuery("(max-width:900px)");
  return (
    <div>
      <Stack
        sx={{
          width: { xs: "90%", sm: "95%", md: "80%" },
          margin: "auto",
          marginBottom: "200px",
        }}
        spacing="200px"
      >
     
        <Box>
          <Grid
            container
            spacing={10}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={9} md={5}>
              <Box>
                {" "}
                <img
                  className="image-responsive"
                  src={CANDIDATE_JOB_GROUP_APPLY}
                  alt=""
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9} md={5}>
              <Stack
                spacing={3}
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                <Typography className="candidate-sub-heading">
                  Apply to all matching jobs with a single click
                </Typography>
                <Typography className="candidates-section-seven-sub-heading">
                  Optimize your job search with our group apply feature. With a
                  simple click, efficiently apply to various positions, just by
                  attending a single interview with us.
                </Typography>

                <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
                  <Button
                    sx={{
                      backgroundColor: "black",
                      width: { xs: "90%", sm: "fit-content" },
                      padding: "8px 22px",
                    }}
                  >
                    Join Now
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Stack rowGap={2} sx={{ textAlign: "center", marginBottom: "80px" }}>
            <Typography className="candidate-sub-heading">
            Advanced analysis for your profile            </Typography>
            <Typography
              className="candidates-section-seven-sub-heading"
              sx={{ margin: { xs: "0%", sm: "0% 10%", md: "0% 20%" } }}
            >
              Analyze your profile through our advanced analytics ensures a
              seamless matches, connecting your talent and skills with the perfect
              company fits you effortlessly.
            </Typography>
          </Stack>

          <Grid container spacing={6} sx={{ marginBottom: "50px" }}>
            <Grid item xs={12} sm={4} md={4}>
              <Box>
                <img
                  className="image-responsive"
                  src={CANDIDATE_MATCHES}
                  alt=""
                  loading="lazy"
                />
              </Box>
              <CardContent sx={{ marginTop: { md: "20px", lg: "0px" } }}>
                <Box sx={{ marginBottom: "15px" }}>
                  <Typography variant="client_tech_hiring">Matches </Typography>
                </Box>
                <Typography variant="client_tech_hiring_card_description">
                  Effortlessly connect with multiple companies in a single click
                  through our profile matching feature.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box>
                <img
                  className="image-responsive"
                  src={cANDIDATE_UNLOCKS}
                  alt=""
                  loading="lazy"
                />
              </Box>
              <CardContent sx={{ marginTop: { md: "20px", lg: "0px" } }}>
                <Box sx={{ marginBottom: "15px" }}>
                  <Typography variant="client_tech_hiring">Unlocks </Typography>
                </Box>
                <Typography variant="client_tech_hiring_card_description">
                  Know your profile viewer, revealing the admirers of your
                  talent. Your professional spotlight is ready to shine brightly
                  .
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box>
                <img
                  className="image-responsive"
                  src={CANDIDATE_COMPANY_TYPE}
                  alt=""
                  loading="lazy"
                />
              </Box>
              <CardContent sx={{ marginTop: { md: "20px", lg: "0px" } }}>
                <Box sx={{ marginBottom: "15px" }}>
                  <Typography variant="client_tech_hiring">
                    Company types{" "}
                  </Typography>
                </Box>
                <Typography variant="client_tech_hiring_card_description">
                  Explore diverse tech categories and apply to multiple
                  companies with just one click that aligns your profile type.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "black",
                width: { xs: "90%", sm: "18%", md: "11%" },
              }}
            >
              Explore more
            </Button>
          </Box>
        </Box>
        <Box>
          <Grid
            container
            spacing={isMobile ? 7 : 22}
            direction={isTab ? "column-reverse" : "row"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={5}>
              <Stack
                spacing={3}
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                {/* <Typography className="candidates-section-seven-heading"> */}
                <Typography className="candidate-sub-heading">
                  Show your zeal for the ideal company
                </Typography>
                <Typography className="candidates-section-seven-sub-heading">
                  Express your interest in dream companies, effortlessly
                  enhancing your job hunt and increasing the likelihood of
                  favorable opportunities.
                </Typography>
                <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
                  <Button
                    sx={{
                      background: "black",
                      width: { xs: "90%", sm: "fit-content" },
                      padding: "8px 22px",
                    }}
                  >
                    Join Now
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={2} sm={12} md={6}>
              <Box>
                {" "}
                <img
                  className="image-responsive"
                  src={CANDIDATE_DREAM_COMPANIES}
                  alt=""
                  loading="lazy"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #FFF 0%, #F9F6FF 49.76%, #FFF 100%)",
        }}
      >
        <Box
          sx={{ width: { xs: "90%", sm: "95%", md: "80%" }, margin: "auto" }}
        >
          <Box sx={{ width: "100%", margin: "auto" }}>
            <Box sx={{ width: { xs: "90%", sm: "86%" }, margin: "auto" }}>
              <Box
                sx={{
                  ...(isMobile
                    ? {}
                    : {
                        backgroundImage: `url(${CANDIDATES_BACKGROUND_IMAGE})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% auto",
                        backgroundPosition: "center",
                        height: "500px",
                      }),
                }}
              >
                <Stack
                  direction={"column"}
                  rowGap={5}
                  sx={{ textAlign: "center", }}
                >
                  <Box
                    sx={{ margin: { xs: "0%", sm: "0% 12%", md: "0% 28%" }, mt:{md:"68px"} }}
                  >
                    <Typography className="candidate-sub-heading">
                      An extensive pool of candidates engaged
                    </Typography>
                  </Box>
                  <Box
                    sx={{ margin: { xs: "0%", sm: "0% 16%", md: "0% 24%" } }}
                  >
                    <Typography className="candidates-section-seven-sub-heading">
                      Join the pool of candidates who have chosen our platform,
                      finding their interview process streamlined for a seamless
                      and successful experience in landing their dream jobs.
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      sx={{
                        width: { xs: "100%", sm: "fit-content" },
                        backgroundColor: "black",
                        padding: "8px 22px",
                      }}
                    >
                      Join Now
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CandidateProfileAnalytics;
