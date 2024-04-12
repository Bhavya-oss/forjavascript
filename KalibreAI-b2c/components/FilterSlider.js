import { Box, Slider, Typography, Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

// function valuetext(value) {
//     const formatter = new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       minimumFractionDigits: 0,
//     });
//     return formatter.format(value).replace("INR", "").trim();
//   }

function FilterSlider(props) {
  const {
    min,
    max,
    step,
    formate,
    setSelectedFiltersList,
    sliderStatus,
    setSliderstatus,
    intial,
    listName,
    min_key,
    max_key,
    id,
    modelContentShow
  } = props;

  const [value, setValue] = useState(intial);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCommitted = (event, newValue) => {



    setSelectedFiltersList((prev) => {
      return {
        ...prev,
        [min_key] : formate != "yrs" ? newValue[0]*100000 : newValue[0],
        [max_key] : formate != "yrs" ? newValue[1]*100000 : newValue[1],
      };

    });


  };

  useEffect(() => {
    if (sliderStatus) {
      setValue(intial);
      setSliderstatus(false);
    }
  }, [sliderStatus]);

  return (
    <Box
      id={id != null ? id : null}
      ref={(ref) =>(modelContentShow!=undefined?modelContentShow.current[id] = ref : "")}
    >
      {listName == null?( <Skeleton variant="rounded" />):


    
(
      <Typography sx={{ fontWeight: {xs:"550", sm:"600", md:"900"}, fontSize:{xs:"1.2rem",sm:"1.5rem", md:"16px"}, }}
       variant="h6 "
       >
        {listName}
      </Typography>)
}
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: ".5em",
            marginRight: "2em",
          }}
        >
          <Typography
            sx={{ fontSize: {xs:"17px", sm:"18px"} }}
          >{`${value[0]} ${formate}`}</Typography>
          <Typography
            sx={{ fontSize: {xs:"17px", sm:"18px"}}}
          >{`${value[1]} ${formate}`}</Typography>
        </Box>
        <Slider
          size="small"
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleCommitted}
          valueLabelDisplay="off"
          // getAriaValueText={valuetext}
          min={min}
          max={max}
          step={step}
          sx={{
            width: "90%",
            color: "black",
            "& .MuiSlider-track": {
              color: "black",
              border: "1px solid black",
            },
            "& .MuiSlider-thumb": {
              color: "white",
              width: 24,
              height: 14,
              borderRadius: 2,
              border: "1px solid black",
            },
            "& .MuiSlider-valueLabel": {
              color: "green",
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1px",
            marginRight: "2em",
            marginTop: "-1em",
            paddingBottom:{xs:"12px", sm:"28px", md:"0px"}
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Min</Typography>
          <Typography sx={{ fontSize: "14px" }}>Max</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FilterSlider;
