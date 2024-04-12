import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  createTheme,
  ThemeProvider,
  Divider,
  Card,
  CardContent,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { checkArrayLength } from "../GlobalFunction";
import api from "../../utils/httpCommons";

// TabScrollButton,

// TabScrollButtonComponent={TabScrollButton}

function CarouselTab(props) {
  const {
    tabsData,
    setSelectedFiltersList,
    selected,
    setSelected,
    intailSelectedFilterList,
    handleSearchClick,
    setIsWhichFilterActive,
    checkedChip,
    setCheckedChip
  } = props;

  // console.log("hgj  tabs data ", tabsData);
  const containerRef = useRef(null);
  const [value, setValue] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [selected, setSelected] = useState(null);
  const [isHover, setIsHover] = useState(null);
  // const [tabsData, setTabsData] = useState(tabData);
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabView = useMediaQuery("(max-width: 1300px)");

  // const

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    // console.log(selected, "check value in images");
  }, [selected]);

  const handleImageClick = (val) => {
    setCheckedChip([]);
    // console.log("asd check image value ===",val);
    setIsWhichFilterActive({filterName : "quick_filter" ,isReset:true})
    let key = tabsData?.[value]?.value;

    setSelectedFiltersList(intailSelectedFilterList);

    if (selected === val) {
      setSelected(null);
      setSelectedFiltersList((prev) => {
        return {
          ...prev,
          [key]: [],
        };
      });
    } else {
      setSelected(val);

      // console.log("vbnx ===", key);

      setSelectedFiltersList((prev) => {
        return {
          ...prev,
          [key]: [val],
        };
      });
    }
  };

  // console.log("vbn selected imags ===", tabsData?.[value]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0D0E10",
      },
    },
  });

  const carousel = {
    position: "relative",
    width: "100%",
    height: "400px",
    overflow: "hidden",
  };

  const carouselslide = {
    display: "none",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    opacity: "0",
    transition: "opacity 0.5s ease-in-out",
  };

  const carouselslideactive = {
    display: "block",
    opacity: "1",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: { xs: 350, sm: 590 },
            width: { xs: "100%", sm: "85%", md: "85%", lg: "85%", xl: "85%" },
            margin: {
              xs: "-4rem auto 0rem auto",
              sm: "-4rem auto",
              md: "-4rem auto",
              lg: "-4rem auto",
              xl: "-4rem auto",
            },
          }}
        >
          <Card
            sx={{
              borderRadius: "20px",
              background: "#fff",
              paddingBottom: "0px",
              width: "100%",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
          >
            <CardContent>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                // allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                TabIndicatorProps={{
                  style: {
                    width: "3%",
                    marginLeft: isMobileView ? "9%" : "8%",
                  },
                }}
                sx={{ padding: "0px" }}
              >
                {tabsData?.map((tab, index) => (
                  <Tab
                    key={index}
                    label={
                      <div
                        onMouseEnter={() => {
                          setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          setHoveredIndex(null);
                        }}
                      >
                        <div>
                          <img
                            src={tab.image.active}
                            alt={tab.label}
                            style={{
                              // marginRight: "1px",
                              height: "auto",
                              width: isMobileView ? "30px" : "40px",
                              filter:
                                value === index || hoveredIndex === index
                                  ? "grayscale(0%)"
                                  : "grayscale(100%)",
                            }}
                            // sx={{height: "20px"}}
                          />
                        </div>

                        <Typography
                          variant="body1"
                          sx={{
                            textTransform: "none",
                            fontSize: {
                              xs: "0.7rem",
                              sm: "1rem",
                              md: "1rem",
                              lg: "1rem",
                              xl: "1rem",
                            },
                          }}
                          component="span"
                        >
                          {tab.label}
                        </Typography>
                      </div>
                    }
                    sx={{
                      color: hoveredIndex === index ? "black" : "gray",
                      padding: {
                        xs: "2px 0px 6px 0px",
                        sm: "12px 16px",
                        md: "12px 16px",
                        lg: "12px 16px",
                        xl: "12px 16px",
                      },
                      maxWidth: {
                        xs: "200px",
                        sm: "360px",
                        md: "360px",
                        lg: "360px",
                        xl: "360px",
                      },
                      minWidth: {
                        xs: "65px",
                        sm: "90px",
                        md: "90px",
                        lg: "90px",
                        xl: "90px",
                      },
                    }}
                  />
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
            },
          }}
        >
          <Box
            sx={{
              marginTop: "7.5rem",
              // flexWrap: "wrap",
              display: "flex",
              columnGap: "5rem",

              "@media (max-width: 1920px)": {
                columnGap: "4rem", // Gap value for desktop devices (vertical spacing)
              },
              "@media (max-width: 1024px)": {
                columnGap: "4rem", // Gap value for desktop devices (vertical spacing)
              },

              justifyContent: "center",
            }}
          >
            {checkArrayLength(tabsData?.[value]?.content) &&
              tabsData[value]?.content?.map((data) => {
                return (
                  <Box
                    key={data.id}
                    onMouseEnter={() => {
                      setIsHover(data.value);
                    }}
                    onMouseLeave={() => {
                      setIsHover(null);
                    }}
                    sx={{ marginBottom: "10px", cursor: "pointer" }}
                    onClick={() =>{handleImageClick(data.value),handleSearchClick()}}
                  >
                    <Card
                      sx={{
                        padding: 0,
                        margin: 0,
                        width: "85px",
                        height: "94px",
                        borderRadius: "10px",
                        background: "#FFF",
                        // boxShadow: "0px 4px 8px 0px rgba(47, 43, 67, 0.10)",
                        boxShadow:
                          selected == data.value || isHover == data.value
                            ? "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
                            : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={data.image.active}
                        alt={data.label}
                        className="tabImage"
                        // onClick={() => handleImageClick(data.value)}
                        style={{
                          filter:
                            selected == data.value || isHover == data.value
                              ? "grayscale(0%)"
                              : "grayscale(30%)",
                        }}
                      />
                    </Card>

                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "1rem",
                        marginTop: ".5rem",
                      }}
                    >
                      {data.label}
                    </Typography>

                    {selected == data.value && (
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Divider
                          sx={{
                            borderBottom: "2px solid #000",
                            margin: ".5rem 0",
                            width: "20px",
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                );
              })}
          </Box>
        </Box>
        {/* {checkArrayLength(tabsData?.[value]?.content) &&
            tabsData[value]?.content?.map((data) => {
              return (
                <Box
                  key={data.id}
                  onMouseEnter={() => {
                    setIsHover(data.value);
                  }}
                  onMouseLeave={() => {
                    setIsHover(null);
                  }}
                  sx={{ marginBottom: "30px", cursor: "pointer" }}
                >
                  <Card
                    sx={{
                      padding: 0,
                      margin: 0,
                      width: "85px",
                      height: "94px",
                      borderRadius: "10px",
                      background: "#FFF",
                      boxShadow: "0px 4px 8px 0px rgba(47, 43, 67, 0.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={data.image.active}
                      alt={data.label}
                      onClick={() => handleImageClick(data.value)}
                      style={{
                        filter:
                          selected == data.value || isHover == data.value
                            ? "grayscale(0%)"
                            : "grayscale(70%)",
                      }}
                    />
                  </Card>

                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "1rem",
                      marginTop: ".5rem",
                    }}
                  >
                    {data.label}
                  </Typography>
                </Box>
              );
            })} */}
        <Box>
          {/* <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        TabIndicatorProps={{
          style: {
            width: "3%",

            marginLeft: isMobileView?"22%":"8%",
          },
        }}
        // sx={{
        //   "& .MuiTabs-flexContainer": {
        //     display: "flex",
        //   },
        // }}
      >
        {tabsData?.map((tab, index) => (
          <Tab
            key={index}
            label={
              <div
                onMouseEnter={() => {
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
                // sx={{
                //   display: "flex",
                //   flexDirection: "column",
                //   alignItems: "center",
                //   py: 1,
                //   minWidth: "unset",
                //   mx: 1,
                //   cursor: "pointer",
                // }}
              >
                <div>
                <img
                  src={
                    value === index || hoveredIndex === index
                      ? tab.image.active
                      : tab.image.inActive
                  }
                  alt={tab.label}
                  style={{
                    marginRight: "1px",
                    height: "40px",
                  }}
                />
                </div>
                <Typography variant="body1" sx={{ textTransform: "none" }}
                component="span"
                >
                  {tab.label}
                </Typography>
              </div>
            }
            sx={{
              color: hoveredIndex === index ? "black" : "gray",
              // minWidth: "unset",
            }}
          />
        ))}
      </Tabs> */}

          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                overflowX: "auto",

                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                  // width: "1px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "transparent",
                },
                whiteSpace: "nowrap",
                marginTop: { xs: "0rem", sm: "6rem" },
                paddingTop: { xs: "23px", sm: "0px" },
              }}
            >
              <Box
                elevation={3}
                style={{
                  padding: isMobileView ? "0px 14px" : "16px 16px 16px 16px",
                  display: "flex",
                  gap: isMobileView ? "25px" : "65px",
                  backgroundColor: "transparent",
                  paddingBottom:isMobileView?"2.3rem":"3rem",
                }}
               
              >
                {checkArrayLength(tabsData?.[value]?.content) &&
                  tabsData[value]?.content?.map((data) => {
                    return (
                      <Box
                        key={data.id}
                        onMouseEnter={() => {
                          setIsHover(data.value);
                        }}
                        onMouseLeave={() => {
                          setIsHover(null);
                        }}
                        sx={{ marginBottom: "px", cursor: "pointer" }}
                        onClick={() => {handleImageClick(data.value),handleSearchClick()}}
                      >
                        <Card
                          sx={{
                            padding: "0 4px",
                            margin: 0,
                            // width: "85px",
                            height: {
                              xs: "52px",
                              sm: "80px",
                              md: "80px",
                              lg: "80px",
                            },
                            width: {
                              xs: "48px",
                              sm: "75px",
                              md: "75px",
                              lg: "75px",
                            },
                            // height:"50%",
                            borderRadius: "10px",
                            background: "#FFF",
                            boxShadow:
                              selected == data.value
                                ? "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
                                : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={data.image.active}
                            alt={data.label}
                            className="tabImage"
                            // onClick={() => handleImageClick(data.value)}
                            style={{
                              filter:
                                selected === data.value
                                  ? "grayscale(0%)"
                                  : "grayscale(30%)",
                            }}
                            s
                          />
                        </Card>

                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: { xs: "0.7rem", sm: "0.8rem" },
                            marginTop: ".5rem",
                          }}
                        >
                          {data.label}
                        </Typography>
                        {selected == data.value && (
                          <Box
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Divider
                              sx={{
                                borderBottom: "2px solid #000",
                                margin: ".5rem 0",
                                width: "20px",
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default CarouselTab;
