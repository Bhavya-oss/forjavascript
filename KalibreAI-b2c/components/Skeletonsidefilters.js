import React from 'react'
import { Skeleton, Box, Card } from '@mui/material'

function Skeletonsidefilters() {
  const skeletonArray = Array.from({ length: 11 });
  const smallArray = Array.from({ length: 3 });

  return (
    <>
    <Card sx={{
          width: {xs:"91.4%",sm:"92%", md:"97%", lg:"100%", xl:"90%"},
          border: "0.05rem solid rgba(0, 0, 0,0.05)",
          borderRadius: "20px",
          padding: {
            xs: "15px 15px 15px 15px",
            sm: "30px 30px 12px 30px",
            md: "20px",
            lg: "16px",
            xl: "16px",
          },
          // boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          boxShadow:"0px 4px 14px 0px #DCE3FF",
          marginTop: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "30px",
            xl: "30px",
          },
          marginRight:"100px",
          marginBottom:"150px",
        }}>
    {/* <div>Skeleton</div> */}
    <Skeleton sx={{ width:"230px", height:"40px" , marginTop:"30px", }}></Skeleton>
    <Box sx={{ marginBottom:"30px"}}>
    {smallArray.map((_, index) => (
        <Skeleton key={index} variant="text" sx={{ width: "130px", height: "30px", }} />
      ))} 
      </Box>
      <Skeleton sx={{ width:"230px", height:"40px", marginTop:"30px" }}></Skeleton>
      <Box sx={{ marginBottom:"30px"}}>
    {skeletonArray.map((_, index) => (
        <Skeleton key={index} variant="text" sx={{ width: "130px", height: "30px", }} />
      ))} 
      </Box>

      <Skeleton sx={{ width:"230px", height:"40px",marginTop:"30px" }}></Skeleton>
      <Box sx={{ marginBottom:"30px"}}>

    {skeletonArray.map((_, index) => (
        <Skeleton key={index} variant="text" sx={{ width: "130px", height: "30px",  }} />
      ))} 
      </Box>
      <Skeleton sx={{ width:"230px", height:"40px" }}></Skeleton>

      <Box sx={{ marginBottom:"30px"}}>

{skeletonArray.map((_, index) => (
    <Skeleton key={index} variant="text" sx={{ width: "130px", height: "30px",  }} />
  ))} 
  </Box>
      </Card>
         </>
  )
}

export default Skeletonsidefilters