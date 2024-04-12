import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import LinearWithValueLabel from "./LinearWithValueLabel";

function CandidateTab() {
  const tab_data = [
    {
      image:
        "https://res.cloudinary.com/kalibre-ai/image/upload/v1702889990/b2c%20images/CandidatePage/Tab/one_interview_many_companies_1_yea2ma.webp",
      title: "One interview many companies",
      sub_title:
        "Unlock Your Future with One Interview! Open the door to numerous job opportunities across various companies. Unlock a spectrum of opportunities, and take the step toward a thriving career journeys.",
    },
    {
      image:
        "https://res.cloudinary.com/kalibre-ai/image/upload/v1702889990/b2c%20images/CandidatePage/Tab/ai_job_matching_hprwty.webp",
      title: "AI Job Matching",
      sub_title:
        "Navigate Your Tech Career with AI Job Matching, which has seamless and intelligent link between your skills and the right roles. Elevate your professional journey with precision.",
    },
    {
      image:
        "https://res.cloudinary.com/kalibre-ai/image/upload/v1702889990/b2c%20images/CandidatePage/Tab/job_auto_apply_nsznoo.webp",
      title: "Auto Job Apply",
      sub_title:
        "Streamline your job application process with Auto Job Apply. Effortlessly submit your applications, save your valuable time, and ensuring you never miss an opportunity.",
    },
  ];

  const [active, setActive] = useState(0);
  const [currentImage, setCurrentImage] = useState(tab_data[0].image);
  const [activeCard, setActiveCard] = React.useState(0);
  const totalSections = 3;
  const sectionDuration = 1000; // Duration for each section's progress in milliseconds
  const [activeSection, setActiveSection] = useState(1);
  const [sectionFillHeight, setSectionFillHeight] = useState(0); // Start from 0
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTab = useMediaQuery("(max-width:900px)");

  const handleClick = (index) => {
    setActive(index);
    setCurrentImage(tab_data[index].image);
  };

  useEffect(() => {
    let progressInterval;
    if (!isPaused) {
      progressInterval = setInterval(() => {
        console.log("progressInterval", progressInterval);

        setSectionFillHeight((prevHeight) => {
          if (prevHeight < 100) {
            console.log("progressInterval", prevHeight);

            return prevHeight + 1; // Increment fill height
          } else {
            setActiveSection((prevSection) =>
              prevSection < totalSections ? prevSection + 1 : 1
            );
            return 0; // Reset fill height and move to next section
          }
        });
      }, sectionDuration / 12); // Adjust for smoother transition
    }

    return () => clearInterval(progressInterval);
  }, [isPaused, activeSection]);

  const handleSectionClick = (sectionNumber) => {
    setIsPaused(false);
    setActiveSection(sectionNumber);
    setSectionFillHeight(0); // Start from 0 on section click
  };

  return (
    <div>
      <Box sx={{ width: { xs: "90%", sm: "80%" }, margin: "auto",  }}>
        <Stack rowGap={5} sx={{ marginBottom: { xs: "50px", sm: "65px" } }}>
          <Box
            sx={{
              textAlign: "center",
              margin: { xs: "0% 0%", sm: "0% 4%", md: "0% 18%" },
            }}
          >
            <Typography className="candidate-sub-heading">
              Start Your Tech Adventure: Companies Eagerly Awaits Your
              Potential!
            </Typography>
          </Box>
          <Box
            sx={{ textAlign: "center", margin: { sm: "0% 8%", md: "0% 24%" } }}
          >
            <Typography className="candidates-section-seven-sub-heading">
              Discover possibilities in tech. Your unique skills valued in the
              dynamic tech world. Thrive and shape your tech future.
            </Typography>
          </Box>
        </Stack>
        
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={isTab ? 3 : 6}
          sx={{
            marginBottom: { xs: "200px", sm: "65px" },
            width: { xs: "100%", sm: "100%", md: "%" },
            
            // height: "556px", // Set a minimum height for the Stack
            margin: "auto",
            mt:{md:"120px"}
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "38%" },
              height: { xs: "400px", sm: "", xl:"600px" },
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <img
              className="image-responsive"
              src={tab_data[activeSection - 1].image}
              alt=""
              loading="lazy"
              style={{
                objectFit: "cover",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: "20px", sm: "10px", md: "60px" },
              height: "556px",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Box
              sx={{
                width: "10%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                paddingTop: { xs: "18%", md: "0%" },
                height: "556px",
              }}
            >
              <Box
                sx={{
                  width: "8px",
                  height: { xs: "640px", sm: "650px", md: "550px" },
                  display: "flex",
                  flexDirection: "column",
                  background: "#EDEFF6",
                  borderRadius: "15px",
                }}
              >
                {Array.from({ length: totalSections }, (_, i) => i + 1).map(
                  (sectionNumber) => (
                    <Box
                      key={sectionNumber}
                      onClick={() => handleSectionClick(sectionNumber)}
                      sx={{
                        height: { xs: "223.333px", md: "183.3px" },
                        backgroundColor: "transparent",
                        position: "relative",
                        transition: "background-color 0.3s ease", // Add smooth transition
                      }}
                    >
                      {activeSection === sectionNumber && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: `${sectionFillHeight}%`,
                            backgroundColor: "#0255DC",
                            borderRadius: "15px",
                            transition:
                              "height 0.3s ease, background-color 0.3s ease", // Add smooth transition
                          }}
                        ></div>
                      )}
                    </Box>
                  )
                )}
              </Box>
            </Box>
            {/* Cards */}
            <Box
              sx={{
                width: { xs: "90%", sm: "45%" },
                height: { xs: "640px", sm: "650px", md: "550px" },
              }}
            >
              {tab_data.map((item, index) => (
                <Stack spacing={4} key={index} marginTop={4}>
                  {activeSection === index + 1 ? (
                    <Box>
                      <Card
                        className="candidate-tab-card"
                        sx={{
                          transition: "all 0.3s ease-in -out",
                          opacity: 1,
                          height: { xs: "200px", sm: "auto" },
                        }}
                      >
                        <Stack spacing={2}>
                          <Typography className="candidate-tab-heading" sx={{color:"#001F6D"}}>
                            {item.title}
                          </Typography>
                          <Typography className="candidate-tab-description" sx={{color:"#798194"}}
                          >
                            {item.sub_title}
                          </Typography>
                        </Stack>
                      </Card>
                    </Box>
                  ) : (
                    <Stack
                      spacing={2}
                      sx={{ width: { xs: "350px", sm: "350px", md: "555px" }, cursor:"pointer" }}
                      onClick={() => handleSectionClick(index+1)}
                  >
                      <Typography
                        className="candidate-tab-heading"
                        sx={{ color: "#dadada" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                      className="candidate-tab-description"
                        sx={{ color: "#dadada" }}
                      >
                        {item.sub_title}
                      </Typography>
                    </Stack>
                  )}
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
        <Box sx={{ textAlign:"center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "black",
              width: { xs: "90%", sm: "23%", md: "9%" },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default CandidateTab;
