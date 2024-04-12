import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Card,
  Button,
  Modal,
  CardContent,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import CarouselTab from "./jobs/CarouselTab";
import api from "../utils/httpCommons";
import { checkArrayLength, convertToHttps } from "./GlobalFunction";
import FilterView from "./jobs/FilterView";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import JobCard1 from "./jobs/JobCard1";
import { MyContext } from "./ContextProvider";
import FilterSlider from "./FilterSlider";
import AuthenticationModel from "./AuthenticationModel";
import { AnimatePresence, motion } from "framer-motion";
import SideFilters from "./jobs/SideFilters";
import TabViewFilters from "./jobs/TabViewFilters";
import SearchField from "./jobs/SearchField";
import { JOB_PAGE_BACKGROUND_IMAGE, JOBS_GRADIENT_BACKGROUND_IMAGE } from "./constants/ImagesLink";
import ResultNotFound from "./views/ResultNotFound";

import ScrollToTop from "./ScrollToTop";
import Skeletonsidefilters from "./Skeletonsidefilters";
import CardSkeleton from "./views/CardSkeleton";
import { getUniqueArray } from "./ApiCalls";

const pageInfo = {
  next: null,
  previous: null,
};

const intailSelectedFilterList = {};

function JobsLayout(props) {
  const { tabData } = props;
  const { globalState, setGlobalState } = useContext(MyContext);
  const isBeforeMobileView = useMediaQuery("(max-width: 392px)"); // Adjust the breakpoint as needed for mobile view

  const isMobileView = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint as needed for mobile view
  const isAfterTabView = useMediaQuery("(max-width: 1200px)");

  const isTabView = useMediaQuery("(max-width: 900px)");
  const isDesktopView = useMediaQuery("(min-width: 1280px)"); // Adjust the breakpoint as needed for desktop view
  //side filter list
  // console.log("check responsive", isMobileView);
  const [sideFilterList, setSideFilterList] = useState([]);

  const [isWhichFilterActive,setIsWhichFilterActive] = useState({filterName : null ,isReset:false})

  //jobs page info
  const [jobsPage, setJobsPage] = useState(pageInfo);

  //job search queary
  const [queary,setQueary] = useState("search/b2cjobs")

  //Main search bar filter 
  const [searchQuear,setSearQueary] = useState("")

  //checkFilter state
  const [checkFilterQueary,setCheckFilterQueary]=useState("")

  //jobs list data
  const [jobList, setjobList] = useState([]);

  //selected filters list
  const [selectedFiltersList, setSelectedFiltersList] = useState(
    intailSelectedFilterList
  );
  // console.log("jobListjobListjobList", jobList.length);

  //total count of job
  const [totalJobs, setTotalJobs] = useState("");

  //reset sliders
  const [sliderStatus, setSliderstatus] = useState(false);

  //disply or hide for clear button
  const [showButton, setShowButton] = useState(false);

  //tabs carosel selected data
  const [selected, setSelected] = useState(null);

  //for animation purpose
  const [showBox, setShowBox] = useState(true);
  const [slideUp, setSlideUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkedChip, setCheckedChip] = useState([]);

  // console.log("loadingloading", loading);
  const getHeight = () => {
    if (isBeforeMobileView) {
      return "20vh";
    }
    if (isMobileView) {
      return "15vh";
    } else if (isDesktopView) {
      return "30vh";
    } else if (isTabView) {
      return "21vh";
    } else if (isAfterTabView) {
      return "25vh";
    } else {
      // For tablet and laptop view, you can use the same height as desktop
      return "28vh";
    }
  };

  const getMarginTop = () => {
    if (isMobileView) {
      return slideUp ? "30px" : "-15px";
    } else {
      return slideUp ? "50px" : "-10px";
    }
  };

  const handleSearchClick = () => {
    setShowBox(false);
    setSlideUp(true);
  };

  useEffect(() => {
    getSideFilter();
  }, []);

 

  useEffect(() => {
    setLoading(true);
    const isChange =
      JSON.stringify(selectedFiltersList) !=
      JSON.stringify(intailSelectedFilterList);
    setShowButton(isChange);

    querycreater();
  }, [selectedFiltersList]);


  useEffect(() => {

    updateQueary()

  },[searchQuear,checkFilterQueary])


  useEffect(() => {

    getJobs()

  },[queary])


  const updateQueary = useCallback(() => {

    let result = "search/b2cjobs"

      if(checkFilterQueary == "" && searchQuear == ""){
        setQueary(result)
        // result = result
      }else if(checkFilterQueary != "" && searchQuear != ""){
        setQueary(`${result}${checkFilterQueary}&${searchQuear}`)
        // result = `${result}${checkFilterQueary}&${searchQuear}`
      }else if(checkFilterQueary === "" && searchQuear != ""){
        setQueary(`${result}/?${searchQuear}`)
        // result = `${result}/?${searchQuear}`

      }else{
        setQueary(`${result}${checkFilterQueary}`)
       
        // result = `${result}${checkFilterQueary}`
      }

    // console.log("lkj result ===",result)
   
  },[searchQuear,checkFilterQueary])



  //creating query function
  const querycreater = useCallback(() => {
    //setting the key of selectedFilterslist object
    const selectedKeys = Object?.keys(selectedFiltersList);

    //Initialize the url
    let url = "";

    // Flag to keep track if it's the first query parameter
    let isFirstQueryParam = true;

    //looping through the selected keys
    if (Array.isArray(selectedKeys) && selectedKeys != undefined) {
      selectedKeys?.forEach((key) => {
        //get the values assosiate with the key
        const values = selectedFiltersList?.[key];

        //check if it is an array and it has values
        if (Array?.isArray(values) && values?.length > 0) {
          // If it's the first query parameter, append "/?" followed by key__in=values
          // Otherwise, append "&" followed by key__in=values
          if (isFirstQueryParam) {
            url += `/?${key}=${values.join("__")}`;
            isFirstQueryParam = false;
          } else {
            url += `&${key}=${values.join("__")}`;
          }
        }
        // Check if values is not an array and is not null or undefined
        else if (
          !Array.isArray(values) &&
          values !== null &&
          values !== undefined
        ) {
          // If it's the first query parameter, append "/?" followed by key__in=values
          // Otherwise, append "&" followed by key=values
          if (isFirstQueryParam) {
            url += `/?${key}=${values}`;
            isFirstQueryParam = false;
          } else {
            url += `&${key}=${values}`;
          }
        }
      });
    }

    // console.log("ghj sss value ====",);  

    // setQueary((prevQueary) => prevQueary + url)
    setCheckFilterQueary(url)
    
  }, [selectedFiltersList,queary]);

  // console.log("api getjobs list  ====", jobList);






  const getJobs = useCallback(async () => {

    try {
      const response = await api.get(queary);
      const result = response.data;

      // console.log("api getjobs result ====== ===", result);

      setjobList(result.results);
      setTotalJobs(result.count);
      setLoading(false);
      const page = pageInfo;

      if (result.next != null) {
        page.next = convertToHttps(result.next);
      } else {
        page.next = result.next;
      }

      if (result.previous != null) {
        page.previous = convertToHttps(result.previous);
      } else {
        page.previous = result.previous;
      }

      // console.log("api getjobs convert======",page)

      setJobsPage(page);
    } catch (error) {
      console.log(error);
      setjobList([]);
      setJobsPage(pageInfo);
    }
  },[queary])



  //page requesting 
  const pageRequestapi  = async(url) => {

    try{
      const response = await api.get(url);
      const result = response.data;
      setjobList(result.results);
      setTotalJobs(result.count);
      setLoading(false);
      const page = pageInfo;

      if (result.next != null) {
        page.next = convertToHttps(result.next);
      } else {
        page.next = result.next;
      }

      if (result.previous != null) {
        page.previous = convertToHttps(result.previous);
      } else {
        page.previous = result.previous;
      }

      // console.log("api getjobs convert======",page)

      setJobsPage(page);

    }catch(erorr){
      console.log(erorr);
      setjobList([]);
      setJobsPage(pageInfo);
    }

  }







  const createKey = (sideBarList) => {
    // console.log("vbn list before ====", sideBarList);
    if (checkArrayLength(sideBarList)) {
      // console.log("vbn list after ====", sideBarList);

      if (sideBarList != undefined) {
        sideBarList?.forEach((data) => {
          if (data.type == "checkbox") {
            intailSelectedFilterList[data?.value] = [];
          } else {
            intailSelectedFilterList[data?.slider_data?.min_key] =
              data?.slider_data?.min;
            intailSelectedFilterList[data?.slider_data?.max_key] =
              data?.slider_data?.max;
          }
        });
      }
    }
  };

  // console.log("vbnb checking in jobLayout loading ====", loading);

  const getSideFilter = async () => {
    try {
      const response = await api.get("b2c/sidebar");
      const result = response.data;

      // console.log("api sidefilters  =====", result);

      createKey(result);
      setSideFilterList(result);
    } catch (error) {
      // console.log(error);
      setSideFilterList([]);
    }
  };

  console.log("sds  checking filter list ===",sideFilterList);

  //page request function

  const pageRequest = useCallback(
    (type) => {
      if (!globalState?.isAuthentication?.isAuth == true) {
        setGlobalState((prev) => {
          return {
            ...prev,
            ["authModel"]: true,
          };
        });
      } else {
        if (type == "next") {
          // console.log("vvv next page reque",jobsPage.next)

          if (jobsPage?.next != null) {
            pageRequestapi(jobsPage?.next);
            setLoading(true)
          }
        } else {
          // console.log("vvv previous page ...",jobsPage.previous)
          if (jobsPage?.previous != null) {
            pageRequestapi(jobsPage?.previous);
            setLoading(true)

          }
        }
      }
      
    },
    [jobsPage, globalState]
  );

  let jobcount = 0;
  // console.log("fit job count out side ===", jobcount);
  // console.log("sideFilterList JobLayout", sideFilterList.length);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          // background:
          //   "linear-gradient(180deg, #F9EDFF 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #A3C3FF 0%, #fff 100%)",
          // backgroundImage: `url(${JOBdiv_PAGE_BACKGROUND_IMAGE})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundSize: "100% 100%", // Set background size to cover the container
          background:"linear-gradient(179deg, #ECF0FF 0.98%, #FFF 47.98%, #FFF 99.03%)",
          paddingTop: "5rem",
          paddingBottom:{xs:"0.9rem", sm:"1rem", md:"1.3rem", lg:"3rem"},
        }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: showBox ? 1 : 0,
            y: showBox ? 0 : 0,
            height: showBox ? null : 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            height: showBox ? null : 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // marginTop: {
              //   xs: "5.5rem",
              //   sm: "5.6rem",
              //   md: "5.6rem",
              //   lg: "5.6rem",
              //   xl: "7rem",
              // },
              marginBottom: "1rem",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "98%",
                  sm: "96%",
                  md: "85%",
                  lg: "75%",
                  xl: "75%",
                },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: {
                    xs: "24px",
                    sm: "36px",
                    md: "44px",
                    lg: "53px",
                    xl: "64px",
                  },
                  fontStyle: "normal",
                  fontWeight: 550,
                  lineHeight: {
                    xs: "40px",
                    sm: "59px",
                    md: "69px",
                    lg: "82px",
                    xl: "90px",
                  },
                  color: "#0D0E10",
                  paddingTop: { xs: "1.4rem", sm: "5.5rem", xl: "7rem" },
                }}
              >
                Chart your tech odyssey, Gateway to your dream startup role
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <Box
          sx={{
            // paddingBottom: {
            //   xs: "5%", // Padding bottom for extra-small devices
            //   sm: "8%", // Padding bottom for small devices
            //   md: "8%", // Padding bottom for medium devices
            //   lg: "22%", // Padding bottom for large devices
            //   xl: "0%", // Padding bottom for extra-large devices
            // },
            marginTop: getMarginTop(),
          }}
        >
          <Container
            sx={{
              minWidth: "85%",
              // position: 'relative',

              // position: 'absolute',
              //       top: "2%",
            }}
          >
            <Typography
              align="center"
              variant="h1"
              sx={{
                padding: {
                  xs: "7% 0% 6% 0%",
                  sm: "3% 0",
                  md: "3% 0",
                  lg: "3% 0",
                  xl: "3% 0",
                },
                lineHeight:{xs:"32px", sm:"43px", md:"3px"},
                fontSize: {
                  xs: "1.2rem", // Width for extra-small devices
                  sm: "1.6rem",
                  md: "1.6rem", // Width for medium devices
                  xl: "32px", // Width for extra-large devices
                },
              }}
            >
              Tech Careers Limitless - From Startups to Tech Titans - Yours to
              Explore.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <SearchField
                handleSearchClick={handleSearchClick}
                get={updateQueary}
                setSearQueary={setSearQueary}
                isWhichFilterActive={isWhichFilterActive}
                setIsWhichFilterActive={setIsWhichFilterActive}
                intailSelectedFilterList={intailSelectedFilterList}
                  setSelectedFiltersList={setSelectedFiltersList}
                  setSelected={setSelected}
              />
            </Box>
          </Container>
        </Box>
        <Container sx={{ minWidth: "85%" }}>
          <Box
            sx={{
              border: "1px solid #fff",
              borderRadius: "20px",
              // background: "linear-gradient(183deg, #E4E5FF 0%, #FFF 86.64%)",
              // background:"linear-gradient(215deg, #E4E5FF 0%, #FFF 92.9%)",
              background:"linear-gradient(180deg, #F1F1FF 0%, #EEF4FB 49.55%, #EBF7F7 100%)",
              boxShadow: "0px 4px 14px 0px #DCE3FF",
              // height: {
              //   xs: "0vh",
              //   sm: "0%",
              //   md: "3%",
              //   lg: "3vh",
              //   xl: "28vh",
              // },
              paddingBottom: {
                xs: "1.4rem",
                sm: "0rem",
                md: "1.3rem",
                lg: "1.3rem",
                xl: "2rem",
              },
              marginTop: {
                xs: "28%",
                sm: "18%",
                md: "13%",
                lg: "10%",
                xl: "10%",
              },

              // boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px"
            }}
          >
            <CarouselTab
              tabsData={tabData}
              setSelectedFiltersList={setSelectedFiltersList}
              selected={selected}
              setSelected={setSelected}
              intailSelectedFilterList={intailSelectedFilterList}
              handleSearchClick={handleSearchClick}
              setIsWhichFilterActive={setIsWhichFilterActive}
              checkedChip={checkedChip}
              setCheckedChip={setCheckedChip}
            />
          </Box>
        </Container>
      </Box>

      {/*for tab  and phone view only */}
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
          // backgroundColor: "#f5f3f3",
          padding: {
            xs: "22px 17px 49px 17px",
            sm: "34px 38px 6px 39px",
            md: "40px 11% 0px 11%",
            lg: "40px 38px 0px 39px",
          },
        }}
      >
        <TabViewFilters
          showButton={showButton}
          sliderStatus={sliderStatus}
          intailSelectedFilterList={intailSelectedFilterList}
          setSelected={setSelected}
          filters={sideFilterList}
          selectedFiltersList={selectedFiltersList}
          setSelectedFiltersList={setSelectedFiltersList}
          setSliderstatus={setSliderstatus}
          setIsWhichFilterActive={setIsWhichFilterActive}
          isWhichFilterActive={isWhichFilterActive}
          checkedChip={checkedChip}
          setCheckedChip={setCheckedChip}

        />
      </Box>

      <Box
        sx={{
          // background:
          //   "linear-gradient(180deg, #FFF 0%, #F5F9FF 11.98%, #F5F2FF 35.57%, #fff 80%, #FCF7FF 87.76%, #FFF 100%)",
          backgroundImage: `url(${JOBS_GRADIENT_BACKGROUND_IMAGE})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundSize:"100% 100%",
          marginTop: 0,
        }}
      >
        <Container sx={{ minWidth: "85%" }}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={0}
              md={0}
              lg={3}
              xl={3}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              {sideFilterList.length == 0 ? (
                <Skeletonsidefilters />
              ) : (
                <SideFilters
                  showButton={showButton}
                  sliderStatus={sliderStatus}
                  selectedFiltersList={selectedFiltersList}
                  intailSelectedFilterList={intailSelectedFilterList}
                  setSelectedFiltersList={setSelectedFiltersList}
                  sideFilterList={sideFilterList}
                  setSelected={setSelected}
                  setSliderstatus={setSliderstatus}
                  setIsWhichFilterActive={setIsWhichFilterActive}
          isWhichFilterActive={isWhichFilterActive}
                />
              )}
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={10}
              lg={9}
              xl={9}
              sx={{
                marginTop: { xs: "-16px", sm: "-15px", md: "2px", xl: "2px" },
                marginLeft:{md:"7.4%", lg:"0%"}
              }}
            >
              <Box
                sx={{
                  margin: {
                    xs: "0px",
                    sm: "0 15px",
                    md: "0 15px",
                    lg: "0px 15px",
                    xl: "0px 15px",
                  },
                }}
              >
                {loading ? (
                  <>
                    {Array.from({ length: 20 }).map((_, index) => (
                      <CardSkeleton key={index} />
                    ))}
                  </>
                ) : (
                  <>
                    {checkArrayLength(jobList) ? (
                      <>
                        {jobList?.map((data) => {
                          if (
                            data.employer_name != null &&
                            data.role_name != null &&
                            checkArrayLength(data.application_link)
                          ) {
                            jobcount += 1;

                            // console.log("job count ===", jobcount);
                            return (
                              <Box
                                key={data.id}
                                sx={{
                                  marginTop: {
                                    xs: "0px",
                                    sm: "30px",
                                    md: "30px",
                                    lg: "30px",
                                    xl: "30px",
                                  },
                                }}
                              >
                                <JobCard1
                                  data={data}
                                  loading={loading}
                                  jobCount={jobcount}
                                />
                              </Box>
                            );
                          }
                        })}
                      </>
                    ) : (
                      <>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <ResultNotFound />
                        </Box>
                      </>
                    )}
                  </>
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: { xs: "12% 0%", sm:"6% 0", md: "3% 0" },
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBackIosIcon />}
                    sx={{
                      color: "black",
                      borderColor: "black",
                      "&:hover": {
                        borderColor: "black",
                      },
                    }}
                    onClick={() => {
                      pageRequest("prev");
                    }}
                    disabled={jobsPage.previous == null}
                  >
                    Previous
                  </Button>
                  <Button
                    endIcon={<ArrowForwardIosIcon />}
                    variant="outlined"
                    onClick={() => {
                      pageRequest("next");
                    }}
                    disabled={jobsPage.next == null}
                    sx={{
                      color: "black",
                      borderColor: "black",
                      "&:hover": {
                        borderColor: "black",
                      },
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <AuthenticationModel />
      <ScrollToTop />
    </Box>
  );
}

export default JobsLayout;
