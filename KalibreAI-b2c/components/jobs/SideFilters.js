import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import FilterView from "./FilterView";
import FilterSlider from "../FilterSlider";
import { checkArrayLength } from "../GlobalFunction";

function SideFilters(props) {
  const {
    setSliderstatus,
    setSelectedFiltersList,
    setSelected,
    sideFilterList,
    intailSelectedFilterList,
    selectedFiltersList,
    sliderStatus,
    showButton,
    setIsWhichFilterActive,
    isWhichFilterActive,
  } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to display the skeleton for a short time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);
  // console.log("sideFilterList",sideFilterList)
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "20px",
          paddingLeft: "30px",
          marginTop: {xs:"30px", md:"50px"},
          marginBottom: "40px",
          // boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          boxShadow: "0px 4px 14px 0px #DCE3FF"

        }}
      >
        <Box
          sx={{
            marginTop: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "1em",
          }}
        >
         {!loading && (
  <Typography
    sx={{
      fontSize: "18px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "27px",
    }}
  >
    {`Filters`}
  </Typography>
)}
          {showButton && (
            <Button
              variant="text"
              onClick={() => {
                setSliderstatus(true);
                setSelectedFiltersList(intailSelectedFilterList);
                setSelected(null);
              }}
            >
              clear
            </Button>
          )}
        </Box>

        {checkArrayLength(sideFilterList) &&
          sideFilterList?.map((data) => {
            if (data?.type != "slider") {
              return (
                <Box sx={{ margin: "7% 0" }} key={data.id}>
                  <FilterView
                    {...data}
                    sideFilterList = {sideFilterList}
                    selectedFilterList={selectedFiltersList?.[data?.value]}
                    setSelectedFiltersList={setSelectedFiltersList}
                    setIsWhichFilterActive={setIsWhichFilterActive}
                    isWhichFilterActive={isWhichFilterActive}
                    intailSelectedFilterList={intailSelectedFilterList}
                    setSelected={setSelected}
                  />
                </Box>
              );
            } else {
              return (
                <Box sx={{ margin: "7% 0" }} key={data.id}>
                  <FilterSlider
                    {...data?.slider_data}
                    setSelectedFiltersList={setSelectedFiltersList}
                    sliderStatus={sliderStatus}
                    setSliderstatus={setSliderstatus}
                  />
                </Box>
              );
            }
          })}
      </Card>
    </>
  );
}

export default SideFilters;
