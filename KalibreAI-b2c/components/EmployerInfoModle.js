import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Modal,
  Skeleton,
  Stack,
  Typography,
  CardHeader,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AvatarImage from "./views/AvatarImage";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";

function EmployerInfoModle(props) {
  const { isModelOpen, setIsModelOpen, empInfo, setEmpInfo } = props;

  const [showMore, setShowMore] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // const textContent =
  //   "Swiggy is an Indian-based company that provides a food & grocery ordering and delivery solution from the neighbourhood restaurants & stores to the urban foodie. Its smartphone-equipped delivery personnel provides deliveries to customers through an app powered by routing algorithms. Customers can also track their food orders in real time.";
console.log("empInfoempInfo",empInfo?.city)
  const textContent = empInfo?.description;

  const truncatedContent =
    textContent != undefined && textContent.split(" ").slice(0, 25)?.join(" ");
  const displayContent = showMore ? textContent : truncatedContent;

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  // console.log("emp info =======", empInfo);

  const maxSkills = 3;
  // let empInfo = null

  // const chipData = ["Food and Grocery delivery", "Instant grocery delivery ", "Online fod ordering app", "Online fod ordering app", "Online fod ordering app"]
  const chipData = empInfo?.b2c_specialities;
  const check = ["mnc","service","public"]
  const status = empInfo?.company_type?.some(item => check?.includes(item));

  const handleModleColose = () => {
    setIsModelOpen(false);
    setEmpInfo(null);
  };

  console.log("checking status =====",status);
  console.log("checking array =====",empInfo?.company_type);

  const specelitis = [];

  return (
    <>
      <Modal open={isModelOpen} onClose={handleModleColose} >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: "0px 8px 25px 0px rgba(13, 10, 44, 0.10)",
            width: {xs:"90%", sm:"60%", md:"50%", lg:"38%", xl:"30%"},
            border: null,
            borderRadius: "20px",
            outline: "none",
            maxHeight: {xs:"90%", sm:'90%', md:"80%"}, // Set the maximum height for the modal
          }}
          // sx={{
          //   position: "absolute",
          //   left: {xs:"18rem", sm:"10.5rem", md:"38rem", lg:"38rem", xl:"38rem"},
          //   top: {xs:"3.5rem", sm:"6rem", md:"3rem", lg:"3rem", xl:"3rem"},
          //   boxShadow: "0px 8px 25px 0px rgba(13, 10, 44, 0.10)",
          //   width: {xs:"50%", sm:"60%", md:"30%", lg:"38%", xl:"30%"},
          //   border: null,
          //   borderRadius: "20px",}}
        >
          <Card
            sx={{
              width: "100%",
              // height:{xs:"700px", sm:"800px", md:"730px"},
              // paddingRight: "1rem",
              // paddingLeft: "1rem",
              paddingBottom: "2rem",
              borderRadius: "20px",
              // overflow: "hidden", // Hide content that overflows vertically
              position: "relative", // Establish positioning context

              
            }}
          >
             <Box
    // style={{

    //   borderRadius: "20px",
    //   overflowY: "auto", // Enable vertical scrolling if content overflows
    //   maxHeight: "100%", // Ensure the inner container doesn't exceed the Card's height
    //   position: "relative", // Establish positioning context
    // }}
    sx={{
      maxHeight:{xs:"700px", sm:"800px", md:"730px"},
      overflow:"auto",
      position:"relative",
    }}
  >
          <CardHeader sx={{padding:"8px 12px 4px 16px"}}
              action={
                <IconButton onClick={handleModleColose}>
                  <CloseIcon />
                </IconButton>
              }
              // Add other card header props like title, subheader, etc. if needed
            />

            <CardContent
              sx={{
                padding: {
                  xs: "0rem 2.6rem 1rem 2.6rem",
                  sm: "1rem 3rem 4rem 3rem",
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: "10px",
                  border: "2px solid #EAEAEC",
                  padding: { xs: "16px 26px", sm: "20px 30px" },
                  display: "flex",
                  gap: "20px",
                }}
              >
                {empInfo == null ? (
                  <Skeleton variant="rounded" width={80} height={80} />
                ) : (
                  <Box sx={{minHeight:"20px", maxWidth:{xs:"26%", sm:"61px", md:"65px"}, marginTop:{xs:"7px", xl:"5px"}}}>
                  <AvatarImage
                    altName={empInfo.name}
                    url={empInfo?.logo}
                    shape="square"
                    // width="100%"
                    // height="auto"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit:"cover",
                      margin: 0,
                      padding: 0,
                      borderRadius: "6px",
                      boxShadow:
                        "rgba(17, 17, 26, 0.03) 0px 4px 16px, rgba(17, 17, 26, 0.03) 0px 8px 32px",
                    }}
                  />
                  </Box>
                )}

                <Box>
                  {empInfo == null ? (
                    <>
                      <Skeleton
                        variant="h1"
                        sx={{ width: { xs: "8rem", sm: "15.5rem" } }}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ width: { xs: "8rem", sm: "15.5rem" } }}
                      />
                    </>
                  ) : (
                    <>
                      <Typography
                        sx={{
                          fontSize: {xs:"15px", sm:"18px", xl:"22px"},
                          fontStyle: "normal",
                          fontWeight: "800",
                          lineHeight: "28px",
                        }}
                      >
                        {empInfo?.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "24px",
                        }}
                      >
                        {empInfo?.business_entity}
                      </Typography>
                    </>
                  )}

                  {empInfo?.attribute_valuation != null && (
                    <Chip
                      label={empInfo?.attribute_valuation}
                      size="small"
                      sx={{
                        background: "#FFECD9",
                        borderRadius: "3px",
                        width: "100px",
                        marginTop: "16px",
                      }}
                    />
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  marginTop: { xs: "1.4rem", sm: "2rem" },
                }}
              >
                <Stack direction="column" spacing={2}>
                  {empInfo == null?(<Skeleton variant="text" width={190} sx={{fontSize:"1.5rem"}}/>):
                  empInfo?.city != null ? (
                    <Stack direction="row" spacing={1.5}>
                      <LocationOnOutlinedIcon
                        sx={{
                          color: "#BDC1C5",
                          fontSize: { xs: "1.38rem", sm: "1.5rem" },
                        }}
                      />
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "400px" }}
                      >
                        {empInfo?.city}
                      </Typography>
                    </Stack>
                  ):""}

{empInfo == null?(<Skeleton variant="text" width={190} sx={{fontSize:"1.5rem"}}/>):
                  empInfo?.b2c_year_founded != null? (
                    <Stack direction="row" spacing={1.5}>
                      <CalendarTodayIcon
                        sx={{
                          color: "#BDC1C5",
                          fontSize: { xs: "1.38rem", sm: "1.3rem" },
                        }}
                      />
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "400px" }}
                      >
                        {empInfo?.b2c_year_founded}
                      </Typography>
                    </Stack>
                  ):""}
                  {empInfo == null?(<Skeleton variant="text" width={190} sx={{fontSize:"1.5rem"}}/>):
                  empInfo?.b2c_total_fund != null && empInfo?.b2c_total_fund !="" && !status ?(
                    <Stack direction="row" spacing={1.5}>
                      <LocalAtmOutlinedIcon
                        sx={{
                          color: "#BDC1C5",
                          fontSize: { xs: "1.38rem", sm: "1.5rem" },
                        }}
                      />
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "400px" }}
                      >
                        {empInfo?.b2c_total_fund}
                      </Typography>
                    </Stack>
                  ):""}

                  {/* {empInfo?.b2c_last_fund != null && (
                    <Stack direction="row" spacing={1.5}>
                      <CurrencyExchangeOutlinedIcon
                        sx={{
                          color: "#BDC1C5",
                          fontSize: { xs: "1.38rem", sm: "1.5rem" },
                        }}
                      />
                    </Stack>
                  )} */}

{empInfo == null?(<Skeleton variant="text" width={190} sx={{fontSize:"1.5rem"}}/>):
                  empInfo?.company_size != null ? (
                    <Stack direction="row" spacing={1.5}>
                      <PeopleAltOutlinedIcon
                        sx={{
                          color: "#BDC1C5",
                          fontSize: { xs: "1.38rem", sm: "1.5rem" },
                        }}
                      />
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "400px" }}
                      >
                        {empInfo?.company_size}
                      </Typography>
                    </Stack>
                  ):""}
                </Stack>
              </Box>

              {empInfo?.description != null && (
                <Box
                  sx={{
                    marginTop: {
                      xs: "1.5rem",
                      sm: "1.5rem",
                      md: "2rem",
                      lg: "2rem",
                      xl: "2rem",
                    },
                  }}
                >
                  <Typography variant="body1">
  {displayContent}
  <Box
    sx={{
      textDecoration: "underline",
      marginTop: "2rem",
      textAlign: "right",
      cursor: "pointer",
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    <span onClick={handleToggleShowMore}>
      {showMore ? "less" : "more"} {/* Clicking here will trigger the onClick */}
    </span>
    <ChevronRightIcon />
  </Box>
</Typography>
                </Box>
              )}
              <Divider sx={{ margin: "1rem 0" }} />

              <Box>
                {/* <Typography variant="h6">Main target</Typography> */}
                <Box
                // style={{
                //   overflowY: isExpanded ? "auto",
                //   maxHeight: isExpanded ? "200px" : "none",
                // }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      flexWrap: "wrap",
                      gap: 2,
                      width: { xs: "295px", sm: "400px" },
                      marginTop: "1.3rem",
                      // maxHeight: isExpanded ? "200px" : "none",
                      // overflowY: isExpanded ? "auto" : "visible",
                    }}
                  >
                    {(isExpanded
                      ? chipData
                      : chipData?.slice(0, maxSkills)
                    )?.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        sx={{
                          borderRadius: 2,
                        }}
                      />
                    ))}

                  {chipData?.length > maxSkills && (
                    <Chip
                      label={
                        isExpanded
                          ? `-${chipData?.length - maxSkills} Less`
                          : `+${chipData?.length - maxSkills} More`
                      }
                      onClick={handleClick}
                      sx={{
                        borderRadius: 2,
                        cursor: "pointer",
                      }}
                    />
                  )}
                </Stack>
                </Box>
              </Box>
            </CardContent>
            </Box>
          </Card>
        </Box>
      </Modal>
    </>
  );
}

export default EmployerInfoModle;
