// import { Chip, Stack, Tooltip, Box } from "@mui/material";
// import React, { useContext, useEffect, useState } from "react";
// import api from "../../utils/httpCommons";
// import { checkArrayLength} from "../GlobalFunction";
// import { MyContext } from "../ContextProvider";

// function SkillViews({ skills }) {
//   const { globalState } = useContext(MyContext);
//   const [tooltipOpen, setTooltipOpen] = useState(false);

//   let list = skills;

//   const handleChipMouseEnter = () => {
//     if (list.length >= 7) {
//       setTooltipOpen(true);
//     }
//   };

//   const handleChipMouseLeave = () => {
//     setTooltipOpen(false);
//   };

//   return (
//     <div>
//       <Tooltip
//         title={
//           <Box>
//             {list != undefined &&
//               checkArrayLength(list) &&
//               list.map((skill, index) => (
//                 <Chip
//                   key={index}
//                   label={skill}
//                   sx={{
//                     borderRadius: "8px",
//                     background: "rgba(242, 242, 242, 1)",
//                     margin: "2px", // Adjust the margin value as needed
//                   }}
//                 />
//               ))}
//           </Box>
//         }
//         open={tooltipOpen}
//         disableHoverListener
//         placement="top"
//         PopperProps={{
//           sx: {
//             "& .MuiTooltip-tooltip": {
//               backgroundColor: "white",
//               padding: "18px", // Adjust the padding value as needed
//               boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//               color: "black",
//               borderRadius:"10px",

//             },
//           },
//         }}
//       >
//         <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
//           {list != undefined &&
//             checkArrayLength(list) &&
//             list.slice(0, 1).map((skill, index) => {
//               return (
//                 <Chip
//                   key={index}
//                   label={skill}
//                   sx={{
//                     borderRadius: {xs:"6px", sm:"8px"},
//                     background: "rgba(242, 242, 242, 1)",
//                     height:{xs:"24px", sm:"32px"},
//                   }}
//                   onMouseEnter={handleChipMouseEnter}
//                   onMouseLeave={handleChipMouseLeave}
//                 />
//               );
//             })}
//           {list != undefined && checkArrayLength(list) && list.length > 6 && (
//             <Chip
//               label={`+${list.length - 0}`}
//               sx={{
//                 borderRadius: "8px",
//                 background: "rgba(242, 242, 242, 1)",
//               }}
//               onMouseEnter={handleChipMouseEnter}
//               onMouseLeave={handleChipMouseLeave}
//             />
//           )}
//         </Stack>
//       </Tooltip>
//     </div>
//   );
// }

// export default SkillViews;


// {/* <Stack direction="row" spacing={0.8}>
//         {intialArray?.length > 0 &&
//           intialArray?.map((data, idx) => {
//             return (
//               <>
//                 {typeof data === "object" && (
//                   <>
//                     <Typography>{getFlagEmoji(data?.country_flag)}</Typography>
//                     <CityData citys={data?.city} />
//                   </>
//                 )}
//               </>
//             );
//           })}
//       </Stack> */}






//       {/* <Typography sx={{
//                   fontSize: {
//                     xs: "100%",
//                     sm: "103%",
//                     md: "120",
//                     lg: "120%",
//                     xl: "120%",
//                   },
//                   fontWeight: "600",
//                   color: "#444444",
//                 }}>
//             {data?.role_name}
//             </Typography> */}












import { Chip, Stack, Tooltip, Box, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import api from "../../utils/httpCommons";
import { checkArrayLength, getSkillName } from "../GlobalFunction";
import { MyContext } from "../ContextProvider";

function SkillViews({ skills }) {
  const { globalState } = useContext(MyContext);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  // const isMobileView = useMediaQuery("(max-width: 500px)");
  // const isBeforeMobileView = useMediaQuery('(max-width: 392px)'); // Adjust the breakpoint as needed for mobile view

  const isMobileView = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed for mobile view
  const isDesktopView = useMediaQuery('(min-width: 1280px)'); // Adjust the breakpoint as needed for desktop view
 
  let list = skills;

  let skillsStore =  () => {
    if(isMobileView){
      return 1;
    }
    else if(isDesktopView){
      return 4;
    }
    else{
      return 2;
    }
  }

  // if (globalState?.skills != null) {
  //   list = getSkillName(globalState.skills, skills);
  // }

  const handleChipMouseEnter = () => {
    if (isMobileView && list.length >= 1) {
      setTooltipOpen(true);
    }
    else if (list.length >= 4){
      setTooltipOpen(true);

    }
  };

  const handleChipMouseLeave = () => {
    setTooltipOpen(false);
  };

  const handleChipTouchStart =() => {
    if(list.length >=7){
      setTooltipOpen(true);
    }
  }

const handleChipTouchEnd = () => {
  setTooltipOpen(false);
}


  const numSkillsToShow = skillsStore();

  return (
    <div>
      <Tooltip
        title={
          <Box>
            {list != undefined &&
              checkArrayLength(list) &&
              list.map((skill, index) => (
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
        placement="top"
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
              padding: "18px", // Adjust the padding value as needed
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              color: "black",
              borderRadius:"10px"
            },
          },
        }}
      >
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          {list != undefined &&
            checkArrayLength(list) &&
            list.slice(0, numSkillsToShow).map((skill, index) => {
              return (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    borderRadius: "8px",
                    background: "rgba(242, 242, 242, 1)",
                  }}
                  onMouseEnter={handleChipMouseEnter}
                  onMouseLeave={handleChipMouseLeave}
                  onTouchStart={handleChipTouchStart}
                  onTouchEnd={handleChipTouchEnd}
                />
              );
            })}
          {list != undefined && checkArrayLength(list) && list.length > numSkillsToShow && (
            <Chip
              label={`+${list.length - numSkillsToShow}`}
              sx={{
                borderRadius: "8px",
                background: "rgba(242, 242, 242, 1)",
              }}
              onMouseEnter={handleChipMouseEnter}
              onMouseLeave={handleChipMouseLeave}
              onTouchStart={handleChipTouchStart}
              onTouchEnd={handleChipTouchEnd}
            />
          )}
        </Stack>
      </Tooltip>
    </div>
  );
}

export default SkillViews;



// import React, { useRef, useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
// import Tooltip from '@mui/material/Tooltip';



// const YourComponent = ({ list }) => {
//   const skillChipsRef = useRef(null);
//   const [numSkillsToShow, setNumSkillsToShow] = useState(list.length);

//   useEffect(() => {
//     const updateNumSkillsToShow = () => {
//       if (skillChipsRef.current) {
//         const availableWidth = skillChipsRef.current.getBoundingClientRect().width;
//         const skillChips = skillChipsRef.current.querySelectorAll('.MuiChip-root');
//         let totalWidth = 0;
//         let newNumSkillsToShow = 0;

//         skillChips.forEach((chip) => {
//           totalWidth += chip.getBoundingClientRect().width;
//           if (totalWidth <= availableWidth) {
//             newNumSkillsToShow++;
//           }
//         });

//         setNumSkillsToShow(newNumSkillsToShow);
//       }
//     };

//     updateNumSkillsToShow();
//     window.addEventListener('resize', updateNumSkillsToShow);
//     return () => {
//       window.removeEventListener('resize', updateNumSkillsToShow);
//     };
//   }, []);

//   return (
//     <Box className={classes.card}>
//       <Box className={classes.skillChips} ref={skillChipsRef}>
//         {list.slice(0, numSkillsToShow).map((skill, index) => (
//           <Tooltip key={index} title={skill}>
//             <Chip
//               label={skill}
//               sx={{
//                 borderRadius: '8px',
//                 background: 'rgba(242, 242, 242, 1)',
//               }}
//               onMouseEnter={handleChipMouseEnter}
//               onMouseLeave={handleChipMouseLeave}
//             />
//           </Tooltip>
//         ))}
//       </Box>
//       {numSkillsToShow < list.length && (
//         <Tooltip
//           title={
//             <>
//               {list.slice(numSkillsToShow).map((skill, index) => (
//                 <div key={index}>{skill}</div>
//               ))}
//             </>
//           }
//         >
//           <Chip
//             label={`+${list.length - numSkillsToShow}`}
//             sx={{
//               borderRadius: '8px',
//               background: 'rgba(242, 242, 242, 1)',
//             }}
//           />
//         </Tooltip>
//       )}
//     </Box>
//   );
// };

// export default YourComponent;