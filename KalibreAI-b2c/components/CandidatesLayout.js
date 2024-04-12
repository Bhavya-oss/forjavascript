import { Box, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CandidateAutoCarousel from "./views/CandidateAutoCarousel";
import CandidateTab from "./views/CandidateTab";
import CandidateCardCarousel from "./CandidateCardCarousel";
import CandidateProfileAnalytics from "./CandidateProfileAnalytics";
import { getTechSkills, getJobCountEmployer, getCompanyCategory, getEmployerUnicorn } from "./ApiCalls";
const generateLogoBlock = (start, end) => {
  // const isMobile = useMediaQuery("(max-width: 600px)");
  const isTab = useMediaQuery("(max-width:900px)");
  const [jobCounts, setJobCounts] = useState([]);
  const getJobsCountInEmployer = async () => {
    try {
      const result = await getJobCountEmployer();
      const data = result.jobs_with_company;
      setJobCounts(data);

      console.log("dceu check in the useeffect data", data);
    } catch (erorr) {
      console.log(erorr);
    }
  };
 
  useEffect(() => {
    console.log("dceu check in the useeffect");
    getJobsCountInEmployer();
  }, []);

  console.log("jobCounts", jobCounts);
  return jobCounts?.slice(start, end)?.map((logo, index) => (
    <Box key={index} className={isTab ? "" : "candidates-logo-card"}>
      {console.log("index", 14 / 2)}
      <Box
        sx={{
          padding: { sm: "10px" },
          background: "",
          width: "43px",
          height: "43px",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src={logo.employer__logo}
          alt=""
        />
      </Box>
      <Box className={`candidates-info-card ${index < 7 ? "left" : "right"}`}>
        <Stack
          direction={index < 7 ? "row" : "row-reverse"}
          alignItems="center"
          spacing={2}
        >
          <Box
            sx={{
              padding: "10px 0px 10px 10px",
              background: "",
              width: "43px",
              height: "43px",
              alignItems: "center",
            }}
          >
            <img
              className="image-responsive"
              src={logo.employer__logo}
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className="">
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#383060",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {logo.employer__name}
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, color: "#383060" }}
            >
              {logo.jobs_count}{" "}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  ));
};

function CandidatesLayout() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [skillLogos, setSkillLogos] = useState([]);
  const [companyCategory, setCompanyCategory] = useState([]);
  const [employerUnicornLogo, setEmployerUnicornLogo] = useState([]);

















  
  const getTeckSkillsLogos = async (value) => {
    try {
      const result = await getTechSkills(value);
      console.log("dceu check in the useeffect", result);
      setSkillLogos(result);
      // console.log(result.results);
    } catch (erorr) {
      console.log(erorr);
    }
  };
  console.log("employerUnicornLogo", employerUnicornLogo)
  const getCompanyCategorySkill = async () => {
    try {
      const result = await getCompanyCategory();
      setCompanyCategory(result);

      console.log("dceu check in the useeffect data", data);
    } catch (erorr) {
      console.log(erorr);
    }
  };

  const getEmployerUnicornLogo = async () => {
    try {
      const result = await getEmployerUnicorn();
      setEmployerUnicornLogo(result);

      console.log("dceu check in the useeffect data", data);
    } catch (erorr) {
      console.log(erorr);
    }
  };

console.log("companyCategory", companyCategory)

  useEffect(() => {
    console.log("dceu check in the useeffect");

    getTeckSkillsLogos();
    getCompanyCategorySkill();
    getEmployerUnicornLogo();
  }, []);
  console.log("skillLogos", skillLogos);
  return (
    <div>
      <Box
        sx={{
          padding: {
            xs: "5rem 0rem 8rem 0rem",
            sm: "8rem 0rem 15rem 0rem",
            md: "12rem 0rem 6rem 0rem",
            lg: "12rem 0rem 6rem 0rem",
            xl: "12rem 0rem 6rem 0rem",
          },
        }}
      >
       
        <Stack rowGap={isMobile ? "90px" : "175px"}>
          <Stack rowGap={3} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <ArrowBackIosNewIcon
                  className="candidate-heading-back-icons"
                  sx={{ color: "#865AFE" }}
                />
              </Box>

              <Typography className="candidate-heading">
                {/* Dream Big, &nbsp; */}
                Code Your Destiny
              </Typography>
              {/* <Typography className="candidate-heading">
                to Profession
              </Typography> */}
              <Box>
                <ArrowForwardIosIcon
                  className="candidate-heading-back-icons"
                  sx={{ color: "#04D6F1" }}
                />
              </Box>
            </Box>
            <Box sx={{ margin: {lg:"0% 15%", xl:"0% 26% "} }}>
              <Typography className="candidate-main-sub-heading">
                {/* Kalibre Unlocks Doors to Your Tech Odyssey! */}
                We offer the opportunity to channel your enthusiasm for
                technology into a rewarding career path
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" , mt:{md:"50px"}}}>
              <Button
                variant="contained"
                sx={
                  {
                  backgroundColor: "black",
                  fontSize: { md: "26px", lg: "28px", xl: "30px" },
                  width: { xs: "85%", sm: "140px", xl: "180px" },
                  "&:hover": {
                    color: "#fff",
                    background: "black",
                    borderRadius: "6px",
                    fontSize: { md: "26px", lg: "28px", xl: "30px" },
                    boxShadow: "none",
                    width: { xs: "85%", sm: "140px", xl: "180px" },
                  },
                }
              }
              >
                Join now
              </Button>
            </Box>
          </Stack>
          <Box
            sx={{ mt: { xl: "0%" }, padding: { xl: "0rem 18rem 0rem 18rem" },   display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center", }}
          >
               <img className="image-responsive"
              src="https://res.cloudinary.com/kalibre-ai/image/upload/v1703318513/b2c%20images/frame_1000000894_nd3kid.webp"
              alt=""
            />


            {/* <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={4}
              mb={1}
              sx={{ overflow: { xs: "hidden", sm: "hidden", md: "visible" } }}
            >
              {generateLogoBlock(0, 14)}
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={4}
              mb={1}
              sx={{ overflow: { xs: "hidden", sm: "hidden", md: "visible" } }}
            >
              {generateLogoBlock(15, 28)}
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={4}
              mb={1}
              sx={{ overflow: { xs: "hidden", sm: "hidden", md: "visible" } }}
            >
              {generateLogoBlock(29, 43)}
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={4}
              mb={1}
              sx={{ overflow: { xs: "hidden", sm: "hidden", md: "visible" } }}
            >
              {generateLogoBlock(44, 57)}
            </Box> */}


          </Box>



          <Box>
            <CandidateAutoCarousel skillLogos={skillLogos} />
          </Box>

          <Box sx={{ background: "#fff" }}>
            <CandidateTab />
          </Box>
          <Box sx={{ background: "#fff" }}>
            <CandidateCardCarousel companyCategory={companyCategory}/>
          </Box>
          <Box>
            <CandidateProfileAnalytics />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default CandidatesLayout;
