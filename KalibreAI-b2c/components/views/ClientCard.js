import { Card, CardContent, Stack, Typography, Box } from '@mui/material'
import React from 'react'
// import image from '../../public/images/spritesheet.png'
function ClientCard(props) {
    const {data,} = props;
    // console.log("datadatadatadatadatadatadata",data)
  return (
<Card sx={{width:{xs:"200px", sm:"200px", md:"230px"}, borderRadius:"20px",  boxShadow:"0px 4px 8px 0px rgba(47, 43, 67, 0.10)", padding:{xs:"12px", sm:"14px", md:"20px"}}} >
    <CardContent sx={{paddingBottom:"0px", paddingTop:"0px"}} style={{ paddingBottom: 0,paddingTop: 0 }}>
        <Stack direction="row" spacing={4}>
            <Box >
            {/* <img src="../../public/images/spritesheet.png" alt=""/> */}

                <img className='image-responsive' src={data.image} alt=""/>
            </Box>
            <Box sx={{}}>
                <Box sx={{marginBottom:"6px"}}>
                <Typography>{data.skill}</Typography>
                </Box>
                <Box sx={{display:"flex", gap:0.7}}>
                <Typography variant='client_carousel_count'>{data.job_count}</Typography>
                <Typography variant='client_carousel_count_text'>added</Typography>
                </Box>
            </Box>
        </Stack>
    </CardContent>
</Card>    
  )
}

export default ClientCard