import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Tooltip,
  Skeleton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SkillViews from "../views/SkillViews";
import LocationViews from "../views/LocationViews";
import ToolTip from "../views/ToolTip";
import {
  checkArrayLength,
  checkObjectLength,
  getDiffrenceInDate,
  getformateExperiance,
} from "../GlobalFunction";
import { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../ContextProvider";
import EmployerInfoModle from "../EmployerInfoModle";
import api from "../../utils/httpCommons";
import { getEmployerInfo } from "../ApiCalls";
import moment from "moment";
import EastIcon from "@mui/icons-material/East";
import AvatarImage from "../views/AvatarImage";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Chipsrendering from "../Chipsrendering";

function JobCard1(props) {
  const { data, loading } = props;
  // console.log("l");

  const isDesktop = useMediaQuery("(min-width: 960px)");
  const isMobileView = useMediaQuery("(max-width: 600px)");

  const { globalState, setGlobalState } = useContext(MyContext);

  const [isEmpModel, setIsEmpModel] = useState(false);
  const [empInfo, setEmpInfo] = useState(null);
  const [isCardHover, setIsCardHover] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [employerTooltipOpen, setTEmployerooltipOpen] = useState(false);
  const [empNameTooltipOpen, setEmprNameTooltipOpen] = useState(false);


  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay to display the skeleton for a short time
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 500);

  //   // Cleanup function to clear the timer when component unmounts
  //   return () => clearTimeout(timer);
  // }, []);


  // console.log("datadatadatadatadata",checkObjectLength(data))



  // console.log("vbnb checking in card loading ====", loading);
  const roleName = data?.role_name;
  const showTooltip = roleName && roleName.length > 15;

  const employerHighlights = data?.employer_highlights;
  const showEmployerHighlightsTooltip =
    employerHighlights && employerHighlights?.total_employes?.length > 10;

const employerName = data?.employer_name;
const emprNameTooltip = employerName && employerName.length  > 18;
// console.log("data?.employer_name", data?.employer_name.length , data?.employer_name)

  const empNameHandleChipTouchStart = () => {
    if (isMobileView && emprNameTooltip) {
      setEmprNameTooltipOpen(true);
    }
  };

  const empNameHandleChipTouchEnd = () => {
    setEmprNameTooltipOpen(false);
  };


  const handleChipTouchStart = () => {
    if (isMobileView && showTooltip) {
      setTooltipOpen(true);
    }
  };

  const handleChipTouchEnd = () => {
    setTooltipOpen(false);
  };

  const employerHandleChipTouchStart = () => {
    if (isMobileView && showEmployerHighlightsTooltip) {
      setTEmployerooltipOpen(true);
    }
  };

  const empoyerHandleChipTouchEnd = () => {
    setTEmployerooltipOpen(false);
  };

  // console.log(
  //   "data.employer_highlights",
  //   employerHighlights?.total_employes?.length
  // ),
  //   console.log("data.employer_highlights", data.employer_highlights);

 

  const getEmpData = async (value) => {
    if (!globalState?.isAuthentication?.isAuth == true) {
      setGlobalState((prev) => {
        return {
          ...prev,
          ["authModel"]: true,
        };
      });
    } else {
      try {
        setIsEmpModel(true);
        const result = await getEmployerInfo(value);
        console.log(result.results)
        setEmpInfo(result.results);
      } catch (erorr) {
        console.log(erorr);
      }
    }
  };

  const isDateInPast = (date) => {
    const currentDate = moment();
    const providedDate = moment(date);

    return providedDate.isSameOrBefore(currentDate);
  };

  const datePosted = getDiffrenceInDate(data?.posted_on);

  // console.log("mnb jobs data", data);

  const applyJob = useCallback(
    (url) => {
      if (!globalState?.isAuthentication?.isAuth == true) {
        setGlobalState((prev) => {
          return {
            ...prev,
            ["authModel"]: true,
          };
        });
      } else {
        window.open(url, "_blank");
      }
    },
    [globalState]
  );

  return (
    <>

    {/* {loading?( 
      <Skeleton variant="rectangular"   sx={{
          width: {xs:"91.4%",sm:"92%", md:"97%", lg:"100%", xl:"100%"},
          border: "0.05rem solid rgba(0, 0, 0,0.05)",
          borderRadius: "20px",
          padding: {
            xs: "15px 15px 15px 15px",
            sm: "30px 30px 12px 30px",
            md: "20px",
            lg: "16px",
            xl: "16px",
          },
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          marginTop: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "30px",
            xl: "30px",
          },
          height: {xs:"120px",sm:"130px", md:"150px"},

        }} />
 ): 
       (  */}
        <Card
        sx={{
          width: {xs:"91.4%",sm:"92%", md:"97%", lg:"100%", xl:"98%"},
          // border: "0.05rem solid rgba(0, 0, 0,0.05)",
          borderRadius: "20px",
          background:"#fff",
          padding: {
            xs: "15px 15px 15px 15px",
            sm: "30px 30px 12px 30px",
            md: "20px",
            lg: "16px",
            xl: "16px",
          },
          // boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          // boxShadow: "0px 4px 14px 0px #DCE3FF",
          // boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
         boxShadow: "0px 4px 14px 0px #DCE3FF",

          marginTop: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "50px",
            xl: "50px",
          },
        }}
        onMouseEnter={() => {
          setIsCardHover(data.id);
        }}
        onMouseLeave={() => {
          setIsCardHover(null);
        }}
      >
        <Grid container>
          <Grid
            item
            xs={2}
            sm={1}
            
            sx={{
              paddingTop: {
                xs: "00.3em",
                sm: "0em",
                md: "0em",
                lg: "0em",
                xl: ".1em",
              },
              paddingLeft: { xs: "0.3em", sm: "0em", md: "0em",lg:"0em", xl:".4em" },
            }}
          >
            <AvatarImage
              url={data?.employer_logo}
              style={{
                // width: { xs: "80%", sm: "100%", md:"92%", xl:"15%" },
                width:"68%",
                height: "auto",
                // boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                borderRadius: "6px",
                boxShadow:
                  "rgba(17, 17, 26, 0.03) 0px 4px 16px, rgba(17, 17, 26, 0.03) 0px 8px 32px",
              }}
              altName={data?.employer_name}
              shape="square"
            />

          </Grid>
          <Grid
            item
            xs={10}
            sm={9}
            md={9}
            lg={9}
            xl={9}
            sx={{ paddingLeft: { xs: "0px", sm: "21px", md:"10px", xl:"0px" } }}
          >
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box>
                <ClickAwayListener onClickAway={empNameHandleChipTouchEnd}>
                <Tooltip
                  onClose={empNameHandleChipTouchEnd}
                  title={employerName}
                  open={empNameTooltipOpen}
                  disableHoverListener
                  placement="top"
                  // sx={{margin:"1000px"}}
                  PopperProps={{
                    sx: {
                      "& .MuiTooltip-tooltip": {
                        backgroundColor: "white",
                        padding: "18px", // Adjust the padding value as needed
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        color: "black",
                        borderRadius: "10px",
                        // marginBottom: showTooltip ? "22px" : "0",
                        fontSize: {
                          xs: "100%",
                          sm: "103%",
                          md: "120",
                          lg: "120%",
                          xl: "120%",
                        },
                        fontWeight: "600",
                      },
                    },
                  }}
                >
                <Typography
                  paragraph
                  sx={{
                    color: "GrayText",
                    marginBottom: 0,
                    fontSize: {
                      xs: "0.83em",
                      sm: "0.9em",
                      md: "1em",
                      lg: "1em",
                      xl: "1em",
                    },
                    cursor: data?.employer != null ? "pointer" : null,
                    // cursor: isMobileView && emprNameTooltip || data?.employer != null ? "pointer" : null,

                  }}
                  onClick={() => {
                    if (data?.employer != null) {
                      getEmpData(data?.employer);
                    }
                  empNameHandleChipTouchStart();

                  }}
                >
                  {isMobileView && emprNameTooltip
                      ? `${employerName.slice(0, 18)}...`
                      : data?.employer_name}
                </Typography>
                </Tooltip>

                </ClickAwayListener>

                {data?.employer != null ? (
                  <Divider
                    sx={{
                      marginTop: "-3px",
                      borderTop: "1px dotted GrayText",
                    }}
                  />
                ) : null}
                </Box>
                {/* {data?.employer_info != null && (
                  <ToolTip title={<>{data?.employer_info}</>} arrow>
                    <InfoOutlinedIcon
                      sx={{ color: "#BDC1C5", fontSize: { xs: 18, sm: 20 } }}
                      onClick={() => {
                        if (data?.employer != null) {
                          getEmpData(data?.employer);
                        }
                      }}
                    />
                  </ToolTip>
                )} */}
              </Box>

              <Box
                sx={{
                  display: {
                    sx: "block",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                {isMobileView &&
                  data?.posted_on != null &&
                  isDateInPast(data.posted_on) && (
                    <>
                      <Typography
                        sx={{
                          color: "GrayText",
                          // marginTop: { xs: 0, sm: 0.5 },
                          fontSize: { xs: "12px" },
                          paddingRight:{xs:"7.4px", sm:"8px"},
                        }}
                      >
                        {datePosted != "today"
                          ? datePosted + " ago"
                          : datePosted}
                      </Typography>
                      {/* <BookmarkBorderOutlinedIcon
                    sx={{ fontSize: 18, marginTop: 0.2 }}
                  /> */}
                    </>
                  )}
              </Box>
            </Stack>
            <Box
              sx={{
                display: { sm: "flex" },
                // gap: 1,
                flexWrap: { xs: "wrap", sm: "" },
                marginTop: 0,
                marginBottom: { xs: "7px", sm: "10px", md: "12px" },
                alignItems: "baseline",
              }}
            >
              {/* <Box marginBottom={showTooltip ? "8px" : "0"}> */}
              <ClickAwayListener onClickAway={handleChipTouchEnd}>
                <Tooltip
                  onClose={handleChipTouchEnd}
                  title={roleName}
                  open={tooltipOpen}
                  disableHoverListener
                  placement="top"
                  // sx={{margin:"1000px"}}
                  PopperProps={{
                    sx: {
                      "& .MuiTooltip-tooltip": {
                        backgroundColor: "white",
                        padding: "18px", // Adjust the padding value as needed
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        color: "black",
                        borderRadius: "10px",
                        // marginBottom: showTooltip ? "22px" : "0",
                        fontSize: {
                          xs: "100%",
                          sm: "103%",
                          md: "120",
                          lg: "120%",
                          xl: "120%",
                        },
                        fontWeight: "600",
                      },
                    },
                  }}
                >
                  <Typography
                    paragraph
                    sx={{
                      fontSize: {
                        xs: "100%",
                        sm: "103%",
                        md: "120",
                        lg: "120%",
                        xl: "120%",
                      },
                      fontWeight: "600",
                      color: "#444444",
                      cursor: showTooltip && isMobileView ? "pointer" : "default",
                      marginBottom: "0",
                    }}
                    onClick={handleChipTouchStart}
                    // onMouseLeave={handleChipTouchEnd}
                  >
                    {/* {console.log("showTooltipshowTooltip",showTooltip)} */}
                    {isMobileView && showTooltip
                      ? `${roleName.slice(0, 15)}...`
                      : roleName}
                  </Typography>
                </Tooltip>
              </ClickAwayListener>

              {/* <Tooltip
          // title={roleName}
          open={tooltipOpen}
          disableHoverListener
          placement="top"
          // sx={{margin:"1000px"}}
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                backgroundColor: "white",
                padding: "18px", // Adjust the padding value as needed
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                color: "black",
                borderRadius: "10px",
                // marginBottom: showTooltip ? "22px" : "0",
                fontSize: {
                  xs: "100%",
                  sm: "103%",
                  md: "120",
                  lg: "120%",
                  xl: "120%",
                },
                fontWeight: "600",

              },
            },
          }}

        >
          <Typography
            paragraph
            sx={{
              fontSize: {
                xs: "100%",
                sm: "103%",
                md: "120",
                lg: "120%",
                xl: "120%",
              },
              fontWeight: "600",
              color: "#444444",
              cursor: showTooltip ? "pointer" : "default",
              marginBottom: "0",

            }}
            onClick={() => {
              if (showTooltip) {
                // Handle click event if needed
              }
            }}
            onMouseEnter={handleChipMouseEnter}
            onMouseLeave={handleChipMouseLeave}
          >
            {showTooltip ? `${roleName.slice(0, 10)}...` : roleName}
          </Typography>
        </Tooltip> */}
              {/* </Box> */}

              {data?.job_type != null && (
                <>
                  {
                    <Divider
                      flexItem
                      sx={{
                        display: {
                          xs: "none",
                          sm: "block",
                          md: "block",
                          lg: "block",
                          xl: "block",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="lightgray"
                        sx={{
                          fontSize: 20,
                          marginTop: { xs: "-4px", sm: "0px", md: "2px" },
                        }}
                      >
                        &bull;
                      </Typography>
                    </Divider>
                  }
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        color: "GrayText",
                        marginTop: { xs: 0, sm: 0.5 },
                        fontSize: { xs: "13px" },
                      }}
                    >
                      {data?.job_type}
                    </Typography>
                    {/* <Divider
                      flexItem
                      sx={{
                        display: {
                          xs: "block",
                          sm: "none",
                          md: "none",
                          lg: "none",
                          xl: "none",
                          paddingRight: "0px !important",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="lightgray"
                        sx={{
                          fontSize: 20,
                          marginTop: { xs: "-4px", sm: "0px", md: "2px" },
                        }}
                      >
                        &bull;
                      </Typography>
                    </Divider> */}
                    {/* {data?.posted_on != null &&
                      isDateInPast(data.posted_on) && (
                        <>
                          <Typography
                            sx={{
                              color: "GrayText",
                              marginTop: { xs: 0, sm: 0.5 },
                              fontSize: { xs: "13px" },
                              display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "none",
                                xl: "none",
                              },
                            }}
                          >
                            {datePosted != "today"
                              ? datePosted + " ago"
                              : datePosted}
                          </Typography>
                         
                        </>
                      )} */}
                  </Box>
                </>
              )}
            </Box>

            {data?.total_exp_max != null &&
              data?.total_exp_min != null &&
              data?.total_exp_max != 0 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1, sm: 1.5 },
                    marginBottom: { xs: "4px", sm: "8px", md: "12px" },
                  }}
                >
                  <WorkOutlineOutlinedIcon
                    sx={{ color: "#BDC1C5", fontSize: { xs: 20, sm: 24 } }}
                  />
                  <Typography
                    paragraph
                    sx={{
                      marginBottom: 0,
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                    }}
                  >{`${getformateExperiance(
                    data?.total_exp_min,
                    data?.total_exp_max
                  )} yrs`}</Typography>
                </Box>
              )}

            {checkArrayLength(data?.b2c_work_locations) && (
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 0, sm: 1 },
                  marginBottom: "12px",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    color: "#BDC1C5",
                    fontSize: { xs: "1.38rem", sm: "1.5rem" },
                  }}
                />
                <LocationViews list={data.b2c_work_locations} />
              </Box>
            )}

            {checkArrayLength(data?.pri_tech_skills_raw) && (
              <Box>
                {/* <SkillViews skills={data?.pri_tech_skills_raw} /> */}
                <Chipsrendering arr={data?.pri_tech_skills_raw} />
              </Box>
            )}
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "flex-end",
              paddingRight: {
                xs: "0em",
                sm: "0.5em",
                md: "1em",
                lg: "0.5em",
                xl: "2em",
              },
              // ...(isMobileView && { display: "none" }), // Apply display: none on smaller screens
            }}
          >
            {!isMobileView &&
              data?.posted_on != null &&
              isDateInPast(data.posted_on) && (
                <>
                  <Typography
                    sx={{
                      color: "GrayText",
                      // marginTop: { xs: 0, sm: 0.5 },
                      fontSize: { xs: "13px" },
                    }}
                  >
                    {datePosted != "today" ? datePosted + " ago" : datePosted}
                  </Typography>
                  {/* <BookmarkBorderOutlinedIcon
                    sx={{ fontSize: 18, marginTop: 0.2 }}
                  /> */}
                </>
              )}
          </Grid>
        </Grid>

        <Divider
          sx={{
            border: 0,
            height: "1px",
            backgroundImage:
              "linear-gradient(to right, #fafafa, #dddddd, #fafafa)",
            margin: {
              xs: "14px 0px 4px 0px",
              sm: "22px 0px 10px 0px",
              md: "16px 0px",
            },
          }}
        />

        <Grid container>
          <Grid item xs={2} sm={1} />
          <Grid
            item
            xs={7}
            sm={8}
            md={8}
            lg={9}
            xl={9}
            sx={{ paddingLeft: { xs: "0px", sm: "21px", md: "0px", xl:"0px" } }}
          >
            <ClickAwayListener onClickAway={empoyerHandleChipTouchEnd}>
              <Tooltip
                title={
                  <Stack
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    alignItems="center"
                    divider={
                      <Divider
                        flexItem
                        sx={{
                          marginTop: {
                            xs: "10px 0px !important",
                            sm: "10px 0px !important",
                            md: "16px 0px !important",
                            lg: "16px 0px !important",
                            xl: "16px 0px !important",
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="lightgray"
                          sx={{ fontSize: 20 }}
                        >
                          &bull;
                        </Typography>
                      </Divider>
                    }
                    sx={{
                      marginTop: {
                        xs: "0px",
                        sm: "6px",
                        md: "3px",
                        lg: "6px",
                        xl: "0px",
                      },
                    }}
                  >
                    {checkObjectLength(data.employer_highlights) &&
                      Object.entries(data.employer_highlights).map(
                        ([key, value]) => {
                          return (
                            <Typography
                              key={key}
                              sx={{
                                color: "#888888",
                                fontWeight: "400",
                                fontSize: {
                                  xs: "77%",
                                  sm: "83%",
                                  md: "90%",
                                  lg: "90%",
                                  xl: "90%",
                                },
                              }}
                            >
                              {value != null && value}
                            </Typography>
                          );
                        }
                      )}
                  </Stack>
                }
                onClose={empoyerHandleChipTouchEnd}
                open={employerTooltipOpen}
                disableHoverListener
                placement="top"
                // sx={{margin:"1000px"}}
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: "white",
                      padding: "18px", // Adjust the padding value as needed
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      color: "black",
                      borderRadius: "10px",
                      // marginBottom: showTooltip ? "22px" : "0",
                      fontSize: {
                        xs: "100%",
                        sm: "103%",
                        md: "120",
                        lg: "120%",
                        xl: "120%",
                      },
                      fontWeight: "600",
                    },
                  },
                }}
              >
                <Stack
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  alignItems="center"
                  onClick={employerHandleChipTouchStart}
                  divider={
                    <Divider
                      flexItem
                      sx={{
                        marginTop: {
                          xs: "10px 0px !important",
                          sm: "10px 0px !important",
                          md: "16px 0px !important",
                          lg: "16px 0px !important",
                          xl: "16px 0px !important",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="lightgray"
                        sx={{ fontSize: 20 }}
                      >
                        &bull;
                      </Typography>
                    </Divider>
                  }
                  sx={{
                    marginTop: {
                      xs: "0px",
                      sm: "6px",
                      md: "3px",
                      lg: "6px",
                      xl: "0px",
                    },
                  }}
                >
                  {checkObjectLength(data.employer_highlights) &&
                  isMobileView ? (
                    // taking only first key in the object if it is a mobile view
                    <Typography
                      sx={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: {
                          xs: "83%",
                          sm: "83%",
                          md: "90%",
                          lg: "90%",
                          xl: "90%",
                        },
                        marginTop:"20px",

                      }}
                    >
                      {
                        data?.employer_highlights?.[
                          Object.keys(data?.employer_highlights)?.[0]
                        ]
                      }
                      ...
                    </Typography>
                  ) : (
                    Object.entries(data.employer_highlights).map(
                      ([key, value]) => {
                        // console.log(
                        //   "data.employer_highlightsdata.employer_highlights",
                        //   value
                        // );
                        let keys = Object.keys(data?.employer_highlights);
                        // console.log("objectentrieskey", keys);
                        let keyTooltip = data?.employer_highlights?.[keys[0]];
                        // console.log("keyTooltipkeyTooltip", keyTooltip);
                        return (
                          <Typography
                            key={key}
                            sx={{
                              color: "#888888",
                              fontWeight: "400",
                              fontSize: {
                                xs: "77%",
                                sm: "83%",
                                md: "90%",
                                lg: "90%",
                                xl: "90%",
                              },
                            }}
                          >
                            {/* {`${[value].slice(0, 10)}...`}         */}
                            {/* {console.log("value,value",value[0])}    */}
                            {/* {isMobileView && value != null
                              ? `${keyTooltip}...`
                              : value} */}

                            {value != null && value}
                          </Typography>
                        );
                      }
                    )
                  )}

                  {/* {console.log("keyTooltip",keyTooltip)} */}
                  {/* {isMobileView && value != null? `${keyTooltip}...`:value} */}
                </Stack>
              </Tooltip>
            </ClickAwayListener>

            {/* <Stack
              direction="row"
              useFlexGap
              flexWrap="wrap"
              alignItems="center"
              divider={
                <Divider
                  flexItem
                  sx={{
                    marginTop: {
                      xs: "10px 0px !important",
                      sm: "10px 0px !important",
                      md: "16px 0px !important",
                      lg: "16px 0px !important",
                      xl: "16px 0px !important",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    color="lightgray"
                    sx={{ fontSize: 20 }}
                  >
                    &bull;
                  </Typography>
                </Divider>
              }
              sx={{
                marginTop: {
                  xs: "0px",
                  sm: "6px",
                  md: "3px",
                  lg: "6px",
                  xl: "0px",
                },
              }}
            >
              {checkObjectLength(data.employer_highlights) &&
                Object.entries(data.employer_highlights).map(([key, value]) => {
                  return (
                    <Typography
                      key={key}
                      sx={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: {
                          xs: "77%",
                          sm: "83%",
                          md: "90%",
                          lg: "90%",
                          xl: "90%",
                        },
                      }}
                    >
                      {value != null && value}
                    </Typography>
                  );
                })}
            </Stack> */}
          </Grid>
          <Grid item xs={3} sm={2} md={3} lg={2} xl={2}>
            <Button
              variant="text"
              endIcon={<EastIcon />}
              sx={{
                color: isCardHover === data.id ? "#FFF" : "black",
                backgroundColor: isCardHover === data.id ? "black" : "#FFF",
                marginTop: { xs: "12px", sm: "0px" },
                marginLeft: { xs: -0.6, sm: 10, md:4, xl: 5 },
                marginRight: { xs: "100px", sm: 0 },
                width: { xs: "5%", sm: "80%" },
                fontWeight: "500",
                padding: { xs: "4px 45px", sm: "8px 2px", md: "8px 18px" },
                "&:hover": {
                  backgroundColor: "#0D0E10",
                  color: "white",
                },
                textTransform: "none",
              }}
              onClick={() => {
                applyJob(data?.application_link?.[0]);
              }}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Card>
       {/* )}  */}

      {isEmpModel && (
        <EmployerInfoModle
          isModelOpen={isEmpModel}
          setIsModelOpen={setIsEmpModel}
          empInfo={empInfo}
          setEmpInfo={setEmpInfo}
        />
      )}
    </>
  );
}

export default JobCard1;
