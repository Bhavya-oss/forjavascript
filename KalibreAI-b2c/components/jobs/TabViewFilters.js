import {
  Card,
  Box,
  Button,
  Chip,
  useMediaQuery,
  IconButton,
  Typography,
  Badge,
  
} from "@mui/material";
import React, { useCallback, useState, useRef } from "react";
import TabViewModel from "./TabViewModel";
import TuneIcon from "@mui/icons-material/Tune";
import MailIcon from '@mui/icons-material/Mail';
import FilterListIcon from "@mui/icons-material/FilterList";

function TabViewFilters(props) {
  const {
    filters,
    selectedFiltersList,
    setSelectedFiltersList,
    showButton,
    sliderStatus,
    intailSelectedFilterList,
    setSliderstatus,
    setSelected,
    setIsWhichFilterActive,
    isWhichFilterActive,
    checkedChip,
    setCheckedChip
  } = props;

  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [value, setValue] = useState(null);

  const scrollContainerRef = React.useRef(null);
  const [showBackward, setShowBackward] = React.useState(false);
  const [showForward, setShowForward] = React.useState(true);
  const modelContentShow = useRef([]);

  const handleButtonClick = (id) => {
    // console.log("awd  checking getting id ===",id);

    const selectedContentRef = modelContentShow.current[id];
    if (selectedContentRef) {
      selectedContentRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      setShowBackward(scrollContainer.scrollLeft > 0);
      setShowForward(
        scrollContainer.scrollLeft <
          scrollContainer.scrollWidth - scrollContainer.clientWidth
      );
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    // setList([]);
    setValue(null);
  };

  const addNonBreakingSpaces = (text) => {
    const spaceSeparatedText = text?.replace(/ /g, "\u00a0");
    return spaceSeparatedText;
  };

  const openModel = () => {
    setOpenModal(true);
    // fetchList(data.endpoint);
    // setValue(data.value);
  };
console.log("checkedChipcheckedChip",checkedChip)
  return (
    <>
      <Box sx={{ height: { xs: "56px", sm: "126px", md:"125px", lg:"105px" } }}>
        <Card
          sx={{
            display: "flex",
            padding: {
              xs: "14px 0px 14px 14px",
              sm: "28px 2px 28px 28px",
              md: "28px 2px 30px 20px",
              lg: "28px 2px 30px 20px",
            },
            // margin: {xs:"22px 17px 22px 17px",sm:"30px 38px 0px 39px", md:"40px 38px 0px 39px", lg:"40px 38px 0px 39px"},
            borderRadius: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
            border: "1.92px solid #EAEAEC",
            boxShadow: "none",
          }}
        >
          {/* <Chip
            sx={{
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              fontWeight: "500",
              marginRight: { xs: "14px", sm: "20px" },
              border: "1px solid #EAEAEC",
            }}
            onClick={() => {
              openModel();
            }}
            label={ */}
            <Box sx={{
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              fontWeight: "500",
              marginRight: { xs: "14px", sm: "20px" },
              border: "1px solid #EAEAEC",
              padding:"2px 10px"
            }}
            onClick={() => {
              openModel();
            }}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  fontSize: { xs: "13px", sm: "15px" },
                  color: "#0D0E10",
                  fontWeight: "550",
                }}
              >
               
                <TuneIcon sx={{ fontSize: { xs: "18px", sm: "24px",} }} />
                {checkedChip.length > 0 ?<Badge sx={{marginLeft:"14px", marginRight:"6px",  backgroundColor: "blue", // Replace with your custom color
        color: "black", // Text color of the badge content
        "& .MuiBadge-badge": {
          fontSize: "12px", // Adjust the font size as needed
          minWidth: "20px", // Adjust the width as needed
          height: "20px",   // Adjust the height as needed
        },}} color="secondary" badgeContent={checkedChip.length} >
        {/* <FilterListIcon sx={{fontSize:"30px"}}/> */}
      </Badge>:""
            }
                {/* <img src="https://res.cloudinary.com/kalibre-ai/image/upload/v1689838520/Group_10_ady7sq.png" alt=""/> */}
              </Box>
              </Box>
            {/* }
            variant="outlined"
          /> */}
          <Box sx={{ position: "relative" }}></Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
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
              position: "relative",
              //  flexWrap:'wrap'
            }}
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {filters?.map((data) => {
              console.log(checkedChip, "isWhichFilterActiveisWhichFilter");

              return (
                <Box key={data.id} sx={{ height: "34px" }}>
                  <Chip
                    sx={{
                      borderRadius: "4px",
                      fontSize: { xs: "12px", sm: "14px" },
                      fontWeight: "350",
                      backgroundColor: checkedChip.includes(data.value) ?'rgba(242, 242, 242, 1)':null,

                      color: "#0D0E10",
                      border: "1px solid #EAEAEC",
                    }}
                    variant="outlined"
                    label={data.name}
                    onClick={() => {
                      openModel();
                      setTimeout(() => {
                        handleButtonClick(data.id);
                      }, 100);
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Card>
      </Box>

      <TabViewModel
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        // searchQuery={searchQuery}
        // setSearchQuery={setSearchQuery}
        filters={filters}
        selectedFiltersList={selectedFiltersList}
        // addNonBreakingSpaces={addNonBreakingSpaces}
        setSelectedFiltersList={setSelectedFiltersList}
        modelContentShow={modelContentShow}
        showButton={showButton}
        setSliderstatus={setSliderstatus}
        sliderStatus={sliderStatus}
        intailSelectedFilterList={intailSelectedFilterList}
        setSelected={setSelected}
        setIsWhichFilterActive={setIsWhichFilterActive}
        isWhichFilterActive={isWhichFilterActive}
        checkedChip={checkedChip}
        setCheckedChip={setCheckedChip}
      />
    </>
  );
}

export default TabViewFilters;
