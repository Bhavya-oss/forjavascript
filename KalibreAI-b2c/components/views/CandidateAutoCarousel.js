import React from "react";
import { Box } from "@mui/material";

function CandidateAutoCarousel(props) {
  const { skillLogos } = props;

  return (
    <div>
      <Box
        sx={{
          background: "#E4FBFB",
          padding: "22px 0px",
          transform: "skewY(-3.66deg)",
        }}
        className="carousel_container"
      >
        <Box className="slide_container_left">
          {skillLogos?.length > 0 &&
            [...skillLogos, ...skillLogos].map((logo, index) => {
              return (
                <Box key={index} className="content">
                  <img
                    
                    src={logo}
                    alt=""
                    loading="lazy"
                  />
                </Box>
              );
            })}
        </Box>
      </Box>
    </div>
  );
}

export default CandidateAutoCarousel;
