import React, { useCallback, useEffect, useState } from "react";
import { Box, Chip, Tooltip } from "@mui/material";
import { checkArrayLength } from "./GlobalFunction";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Chipsrendering = ({ arr }) => {
  // console.log("arrrrr", arr);
 

  const [resultantArr, setResultantArr] = useState([]);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleContainerResize = useCallback(() => {
    const bigContainer = document.querySelector(".big-container");
    const containerWidth = bigContainer.offsetWidth;

    let totalDivWidth = 0;
    let resultArr = [];

    arr.forEach((div) => {
      let wdth = (div?.length + 4) * 5.8;
      totalDivWidth += wdth;
      if (totalDivWidth < containerWidth) {
        resultArr.push(div);
      }
    });
    setResultantArr(resultArr);
  }, [arr, resultantArr]);

  useEffect(() => {
    // Call the handleContainerResize function on window resize
    window.addEventListener("resize", handleContainerResize);

    // Initial call to handleContainerResize to set the initial state
    handleContainerResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleContainerResize);
    };
  }, []);

  const handleChipMouseEnter = () => {
   
      setTooltipOpen(true);

    
  };

  const handleChipMouseLeave = () => {
    setTooltipOpen(false);
  };

  const handleChipTouchStart =() => {
    
      setTooltipOpen(true);
    
  }

const handleChipTouchEnd = () => {
  setTooltipOpen(false);
}
  return (
    <div
      className="big-container"
      style={{ width: "80%", whiteSpace: "nowrap",  }}
    >
      {resultantArr?.map((item, index) => {
        // console.log("element", item);
        return (
          <Chip key={index} sx={{ margin: "1px", borderRadius: "8px",
          background: "rgba(242, 242, 242, 1)", }} label={item}  
          onMouseEnter={handleChipMouseEnter}
          onMouseLeave={handleChipMouseLeave}
          onTouchStart={handleChipTouchStart}
          onTouchEnd={handleChipTouchEnd}/>
          //   {item}
          // </Chip>
          
        );
      })}
      {arr?.length - resultantArr?.length > 0 && (
                        <ClickAwayListener onClickAway={handleChipTouchEnd}>

        <Tooltip
        
          title={
            <Box>
              {arr != undefined &&
                checkArrayLength(arr) &&
                arr?.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      borderRadius: "8px",
                      background: "rgba(242, 242, 242, 1)",
                      margin: "2px", // Adjust the margin value as needed
                    }}
                  />
                ))}
            </Box>
          }
          open={tooltipOpen}

          disableHoverListener
        disableTouchListener
        placement="top-start"        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
              padding: "18px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              color: "black",
              borderRadius: "10px",
            },
          },
        }}
        >
          <Chip
            sx={{ margin: "1px" }}
            label={`+${arr?.length - resultantArr?.length}`}
            onMouseEnter={handleChipMouseEnter}
            onMouseLeave={handleChipMouseLeave}
            onTouchStart={handleChipTouchStart}
            onTouchEnd={handleChipTouchEnd}
          />
        </Tooltip>
        </ClickAwayListener>

      )}
    </div>
  );
};

export default Chipsrendering;
