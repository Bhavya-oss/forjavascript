import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import {
  PRE_VETTED_CANDIDATES,
  PRE_VETTED_MOBILE_CANDIDATES,
  INTERVIEW_TEMPLATES,
  MULTI_JOB_BOARD_POSTING,
  VIRTUAL_TABLES,
  VIRTUAL_MOBILE_TABLES,
  EXPERT_INTERVIEWER_NETWORK,
  EXPERT_INTERVIEWER_MOBILE_NETWORK,
  SMART_INTERVIEW_SHEDULAR,
  SCREENING_BOT,
  AI_BASED_AUTO_MATCHING,
  AI_BASED_AUTO_MOBILE_MATCHING,
  CANDIDATE_PIPLINES,
  AUTOMATED_RESUME_PARSING,
  INTERVIEW_PLATFORM,
  INTERVIEW_TAB_VIEW_PLATFORM,
  CLIENT_GRADIENT_BACKGROUND_IMAGE,
} from "../constants/ImagesLink";
const ClientTechHiring = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTab = useMediaQuery("(max-width:900px)");
  const isDeskTop = useMediaQuery("(min-width:1500px)");
  return (
    <div>
      <Box>
        <Box sx={{ textAlign: "center", marginBottom: "2%" }}>
          <Typography variant="client_section_three_heading">
            All-in-one Tech hiring solution
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "4rem 00rem 3rem 0rem",
            backgroundImage: `url(${CLIENT_GRADIENT_BACKGROUND_IMAGE})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            // opacity:0.8,
            // width:"200px"
          }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={8}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={
                      isMobile
                        ? PRE_VETTED_MOBILE_CANDIDATES
                        : PRE_VETTED_CANDIDATES
                    }
                    alt=""
                    loading="lazy"
                  />
                </Box>
                <CardContent sx={{ marginTop: { md: "20px", lg: "0px" } }}>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography variant="client_tech_hiring">
                      Pre Vetted Candidates
                    </Typography>
                  </Box>
                  <Typography variant="client_tech_hiring_card_description">
                    Explore top rated candidates screened and interviewed by
                    domain experts.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={INTERVIEW_TEMPLATES}
                    alt=""
                    loading="lazy"
                  />
                </Box>
                <CardContent>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography variant="client_tech_hiring">
                      Interview Templates
                    </Typography>
                  </Box>
                  <Typography variant="client_tech_hiring_card_description">
                    Replicate structured Interviews, with vetted expert
                    interview templates, from top companies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box sx={{}}>
                  <img
                    className="image-responsive"
                    src={MULTI_JOB_BOARD_POSTING}
                    alt=""
                    loading="lazy"
                  />
                </Box>

                <CardContent sx={{ marginTop: { sm: "32px", md: "10px" } }}>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography variant="client_tech_hiring">
                      Multi Job Board Posting
                    </Typography>
                  </Box>
                  <Typography variant="client_tech_hiring_card_description">
                    Source candidates from multiple portals with just a single
                    posting on our platform.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={isMobile ? VIRTUAL_MOBILE_TABLES : VIRTUAL_TABLES}
                    alt=""
                    loading="lazy"
                  />
                </Box>
                <CardContent sx={{ marginTop: { md: "24px", lg: "0px" } }}>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography variant="client_tech_hiring">
                      Hyper Sync Tables
                    </Typography>
                  </Box>
                  <Typography variant="client_tech_hiring_card_description">
                    Power of ATS with the ease of excel sheet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={
                      isMobile
                        ? EXPERT_INTERVIEWER_MOBILE_NETWORK
                        : EXPERT_INTERVIEWER_NETWORK
                    }
                    alt=""
                    loading="lazy"
                  />
                </Box>

                <CardContent sx={{ marginTop: { md: "25px", lg: "0px" } }}>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography variant="client_tech_hiring">
                      Expert Interviewer Network
                    </Typography>
                  </Box>
                  <Typography variant="client_tech_hiring_card_description">
                    Get on demand experts from any domain to any company size.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={SMART_INTERVIEW_SHEDULAR}
                    alt=""
                    loading="lazy"
                  />
                </Box>

                <CardContent>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography variant="client_tech_hiring">
                      Smart Interview Schedular
                    </Typography>
                  </Box>
                  <Typography variant="client_tech_hiring_card_description">
                    Eliminate confusions, follow ups and missed schedules with
                    our smart interview scheduler.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={
                      isMobile
                        ? AI_BASED_AUTO_MOBILE_MATCHING
                        : isTab
                        ? AI_BASED_AUTO_MATCHING
                        : SCREENING_BOT
                    }
                    alt=""
                    loading="lazy"
                  />
                </Box>

                <CardContent sx={{ marginTop: { md: "25px", lg: "0px" } }}>
                  <Box sx={{ marginBottom: "15px" }}>
                    {isTab ? (
                      <Typography variant="client_tech_hiring">
                        AI Based Auto Matching
                      </Typography>
                    ) : (
                      <Typography variant="client_tech_hiring">
                        Screening Bot
                      </Typography>
                    )}
                  </Box>
                  {isTab ? (
                    <Typography variant="client_tech_hiring_card_description">
                      Match the perfect role to the perfect candidate using ai
                      based models with 30+ data points.
                    </Typography>
                  ) : (
                    <Typography variant="client_tech_hiring_card_description">
                      Automated chatbot collects missing info, no more follow-up
                      calls.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={isTab ? SCREENING_BOT : AI_BASED_AUTO_MATCHING}
                    alt=""
                    loading="lazy"
                  />
                </Box>
                <CardContent sx={{ marginTop: { sm: "25px", md: "0px" } }}>
                  <Box sx={{ marginBottom: "15px" }}>
                    {isTab ? (
                      <Typography variant="client_tech_hiring">
                        Screening Bot
                      </Typography>
                    ) : (
                      <Typography variant="client_tech_hiring">
                        AI Based Auto Matching
                      </Typography>
                    )}
                  </Box>
                  {isTab ? (
                    <Typography variant="client_tech_hiring_card_description">
                      Automated chatbot collects missing info, no more follow-up
                      calls.
                    </Typography>
                  ) : (
                    <Typography variant="client_tech_hiring_card_description">
                      Match the perfect role to the perfect candidate using ai
                      based models with 30+ data points.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={CANDIDATE_PIPLINES}
                    alt=""
                    loading="lazy"
                  />
                </Box>
                <CardContent sx={{ marginTop: { sm: "25px", md: "4px" } }}>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography variant="client_tech_hiring">
                      Candidate Pipelines
                    </Typography>
                  </Box>
                  <Typography variant="client_tech_hiring_card_description">
                    Never run out of candidates again with our ever-active
                    candidate pipelines.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={
                      isTab
                        ? INTERVIEW_TAB_VIEW_PLATFORM
                        : AUTOMATED_RESUME_PARSING
                    }
                    alt=""
                    loading="lazy"
                  />
                </Box>

                <CardContent>
                  <Box
                    sx={{
                      marginBottom: "15px",
                      marginTop: { md: "23px", lg: "0px" },
                    }}
                  >
                    {isTab ? (
                      <Typography variant="client_tech_hiring">
                        Interview Platform
                      </Typography>
                    ) : (
                      <Typography variant="client_tech_hiring">
                        Automated Resume Parsing
                      </Typography>
                    )}
                  </Box>
                  {isTab ? (
                    <Typography variant="client_tech_hiring_card_description">
                      Standardize your interviews with transparency and clarity
                      - interview recordings, transcript, feedback and summary.
                    </Typography>
                  ) : (
                    <Typography variant="client_tech_hiring_card_description">
                      Say Goodbye to Resume Overload – Save Time with Data-Rich
                      Candidate Profiles!
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow:
                    "0px 1px 4px -1px rgba(0, 0, 0, 0.30), 0px 2px 5px -1px rgba(220, 227, 255, 0.25)",
                }}
              >
                <Box>
                  <img
                    className="image-responsive"
                    src={isTab ? AUTOMATED_RESUME_PARSING : INTERVIEW_PLATFORM}
                    alt=""
                    loading="lazy"
                  />
                </Box>
                <CardContent
                  sx={{
                    marginTop: {
                      sm: "46px",
                      md: "20px",
                      lg: "0px",
                      xl: "28px",
                    },
                  }}
                >
                  <Box sx={{ marginBottom: "15px" }}>
                    {isTab ? (
                      <Typography variant="client_tech_hiring">
                        Automated Resume Parsing
                      </Typography>
                    ) : (
                      <Typography variant="client_tech_hiring">
                        Interview Platform
                      </Typography>
                    )}
                  </Box>
                  {isTab ? (
                    <Typography variant="client_tech_hiring_card_description">
                      Say Goodbye to Resume Overload – Save Time with Data-Rich
                      Candidate Profiles!
                    </Typography>
                  ) : (
                    <Typography variant="client_tech_hiring_card_description">
                      Standardize your interviews with transparency and clarity
                      - interview recordings, transcript, feedback and summary.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default ClientTechHiring;
