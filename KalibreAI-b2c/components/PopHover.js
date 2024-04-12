import { Box, Button, Popover, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function PopHover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPopover, setShowPopover] = useState(false);

  const openPopover = (e) => {
    setAnchorEl(e.currentTarget);
    setShowPopover(true);
  };

  const closePopover = () => {
    setShowPopover(false);
  };

  return (
    <div>
      <HelpOutlineOutlinedIcon
        sx={{ color: "lightgray", fontSize: 20, cursor:"text" }}
        onMouseEnter={openPopover} // Trigger popover on mouse enter
        onMouseLeave={closePopover}
      />

      {showPopover && (
        <Popover
          open={showPopover}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          onClose={closePopover}
        >
          <Typography variant="h4">I am pop hover</Typography>
        </Popover>
      )}
    </div>
  );
}

export default PopHover;
