
import { Box, Container } from "@mui/material";
import JobsLayout from "../components/JobsLayout";
import api from "../utils/httpCommons";
// import BrandCarousel from "../components/BrandCarousel";
// import HomeHero from "../components/HomeHero";
// import Jobs from "./jobs";

export const getStaticProps = async () => {
  try {
    const response = await api.get("/commons/groups");

    const data = response.data; // Assuming the API response contains the job data

    return {
      props: { tabData: data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { tabData: [] },
    };
  }
};



export default function Home({tabData}) {

  // console.log("api tab filters  ===",tabData)


  return (
    // <>
    //     <Container sx={{minWidth:"85%"}}>

    //       <Box sx={{ marginTop: "10px" }}>
    //         <HomeHero />
    //       </Box>

    //       <Box sx={{ marginTop: "64px" }}>
    //         <BrandCarousel />
    //       </Box>

    //       <Box sx={{ marginTop: "64px" }}>
    //         <JobsLayout />
    //       </Box>

    //       </Container>
    // </>
    <Box sx={{background:"linear-gradient(180deg, #ECF0FF 0.03%, rgba(255, 255, 255, 0.97) 3.51%, rgba(255, 255, 255, 0.88) 10.08%, #FAFEFF 12.64%, #FFF 15.52%, #FFF 25.58%, #F3FCFF 30.07%, #FFF 34.07%, #FFF 91.55%, #DDE2FF 99.96%)"}}>
      <JobsLayout  tabData={tabData}/>
    </Box>
    
  );
}
