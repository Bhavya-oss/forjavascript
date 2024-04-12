import { Avatar, Box, Card, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

function CardSkeleton() {
  return (
    <Card
      sx={{
        width: { xs: "91.4%", sm: "92%", md: "97%", lg: "100%", xl: "98%" },
        borderRadius: "20px",
        height: "13rem",
        background: "#fff",
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
          lg: "30px",
          xl: "30px",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Skeleton
          variant="squre"
          width={70}
          height={70}
          sx={{ borderRadius: "10px" }}
        />
        <Typography variant="h3" sx={{ width: "60%", marginTop: "-8px" }}>
          <Skeleton />
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "5.5rem", marginTop: "-20px" }}>
        <Typography variant="h6" sx={{ width: "40%" }}>
          <Skeleton />
        </Typography>
        <Typography variant="h6" sx={{ width: "40%" }}>
          <Skeleton />
        </Typography>
        <Typography variant="h6" sx={{ width: "40%" }}>
          <Skeleton />
        </Typography>
      </Box>
    </Card>
  );
}

export default CardSkeleton;
