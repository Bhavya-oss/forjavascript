import React, { useState } from "react";
import {
  Stack,
  Typography,
  Divider,
  Box,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { getFlagEmoji } from "../ApiCalls";
import { checkArrayLength } from "../GlobalFunction";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const JobType = ({ data }) => {
  // console.log("test kind ====", data);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div>
      {data?.length > 0 &&
        data?.map((info,idx) => {
          return (
            <div style={{ display: "inline-block" }} key={idx}>
              <span style={{ margin: "0px 1px" }}>{info.emoji}</span>
              <span
                style={{
                  margin: "0px 1px",
                  fontSize: isDesktop ? "1rem" : "0.813rem",
                }}
              >
                {info.type}
              </span>
            </div>
          );
        })}
    </div>
  );
};

const CityData = ({ citys }) => {
  // console.log("city list ====", citys);

  return (
    <Stack
      direction="row"
      spacing={0.4}
      divider={
        <Divider flexItem>
          <Typography variant="body2" color="lightgray" sx={{ fontSize: 20 }}>
            &bull;
          </Typography>
        </Divider>
      }
    >
      {citys?.length > 0 &&
        citys?.map((info,idx) => {
          return (
            <div style={{ display: "flex", alignItems: "center" }} key={idx}>
              <Typography sx={{ marginRight: ".2rem", marginTop: "0px", fontSize:{xs:"0.813rem", sm:"1rem"} }}>
                {typeof info?.city_name != "object" && info?.city_name}
              </Typography>
              <Box
                sx={{
                  width: "1px",
                  height: "60%",
                  backgroundColor: "#ccc6c6",
                  margin: "0 .2rem",
                }}
              />
              <JobType data={info?.kind} />
            </div>
          );
        })}
    </Stack>
  );
};

function LocationViews({ list }) {
  if (typeof list[0] != "object") {
    return;
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const isMobileView = useMediaQuery("(max-width: 500px)");
  const numSkillsToShow = isMobileView ? 1 : 2;

  let firstCity = list?.[0]?.city[0];
  let firstFlag = list?.[0]?.country_flag;
  const handleChipMouseEnter = () => {
    if (list.length > 1) {
      setTooltipOpen(true);
    }
  };

  const handleChipMouseLeave = () => {
    setTooltipOpen(false);
  };

  let intialArray = [{ country_flag: firstFlag, city: [firstCity] }];

  // console.log("list ===", list);

  return (
    <div>
      {/* {list?.length > 0 &&
          list?.map((data, idx) => {
            return (
              <>
                {typeof data === "object" && (
                  <Box sx={{display:'flex', gap:{xs:0.8, sm:1}}} key={idx}>
                    <Typography>{getFlagEmoji(data?.country_flag)}</Typography>
                    <CityData citys={data?.city} />
                  </Box>
                )}
              </>
            );
          })} */}

      <ClickAwayListener onClickAway={handleChipMouseLeave}>
        <Tooltip
          title={
            <Box
              sx={{
                borderRadius: "8px",
                maxWidth: "600px",
                // background: "rgba(242, 242, 242, 1)",
                // margin: "2px", // Adjust the margin value as needed
              }}
            >
              {list?.length > 0 &&
                list?.map((data, idx) => {
                  return (
                    <div key={idx}>
                      {typeof data === "object" && (
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <Typography>
                            {getFlagEmoji(data?.country_flag)}
                          </Typography>
                          <CityData citys={data?.city} />
                        </Box>
                      )}
                    </div>
                  );
                })}
            </Box>
          }
          onClose={handleChipMouseLeave}
          open={tooltipOpen}
          disableHoverListener
          placement="top"
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                backgroundColor: "white",
                padding: "18px", // Adjust the padding value as needed
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                color: "black",
                borderRadius: "10px",
                maxWidth: "600px",
                marginLeft: "35px",
              },
            },
          }}
        >
          <Stack direction="row" spacing={0.8}>
            {intialArray?.length > 0 &&
              intialArray?.map((data, idx) => {
                return (
                  <div key={idx}>
                    {typeof data === "object" && (
                      <Box
                        sx={{ display: "flex", gap: 1 }}
                        onMouseEnter={handleChipMouseEnter}
                        onMouseLeave={handleChipMouseLeave}
                        onClick={handleChipMouseEnter}
                      >
                        <Typography>
                          {getFlagEmoji(data?.country_flag)}
                        </Typography>
                        <CityData citys={data?.city} />
                      </Box>
                    )}
                  </div>
                );
              })}
            {list != undefined && checkArrayLength(list) && list.length > 0 && (
              <Box
                sx={{
                  // borderRadius: "8px",
                  // background: "rgba(242, 242, 242, 1)",
                  display: "inline-block", // To make it behave like a Chip
                  // padding: "4px 8px", // Adjust padding as needed
                  fontSize: "14px", // Adjust font size as needed
                }}
                onMouseEnter={handleChipMouseEnter}
                onMouseLeave={handleChipMouseLeave}
              >
                {/* +{(list.length - numSkillsToShow)} */}
                {list.length - numSkillsToShow > 0
                  ? `+${list.length - numSkillsToShow}`
                  : ""}
              </Box>
            )}
          </Stack>
        </Tooltip>
      </ClickAwayListener>
    </div>
  );
}

export default LocationViews;
