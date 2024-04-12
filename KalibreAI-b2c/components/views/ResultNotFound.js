import { Card, CardContent, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { NOT_FOUND_IMAGE } from '../constants/ImagesLink'

function ResultNotFound() {
  const isMobileView = useMediaQuery("(max-width: 600px)");

  return (
    <>
    <Card
      sx={{padding:isMobileView?"25px 25px 25px 25px":"50px",width:{xs:"250px", sm:"350px",md:"500px"},textAlign:"center",borderRadius:"20px",marginTop:"27px",border:".5px solid #EAEAEC",boxShadow:"none", marginBottom:{xs:"15px", sm:"20px", xl:"10px"}}}
     >
      <CardContent>
          <Typography sx={{fontSize:{xs:"17px",sm:"20px", md:"20px"},fontWeight:"500",lineHeight:"32px",fontStyle:"normal"}}>No results found</Typography>
          <img src={NOT_FOUND_IMAGE} style={{padding:isMobileView?"15px 10px 15px 0px":"50px"}} className='responsive'/>
          <Typography sx={{fontSize:{xs:"20px", sm:"24px"},fontWeight:"500",lineHeight:"32px",fontStyle:"normal"}}>No matching  jobs found</Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default ResultNotFound