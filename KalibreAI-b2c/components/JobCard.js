import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Stack, IconButton, Avatar, Typography, Tooltip, Divider, Chip, Link } from '@mui/material';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import { tooltipClasses } from '@mui/material/Tooltip';
import ToolTip from './views/ToolTip';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.75)',
    maxWidth: 240,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function JobCard() {

  return (
    <Card variant="outlined">
      <CardContent sx={{ paddingBottom: "16px !important" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="/images/flipkart.png"
            sx={{ width: 56, height: 56 }}
          />
          <Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="h6">
                Software Development Engineer
              </Typography>
              <Divider orientation="vertical" sx={{ height: "16px", marginTop: "8px !important" }} />
              <Typography variant="h6">
                React Frontend
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <HtmlTooltip title="Flipkart operates an online shopping website with a registered customer base of over 100 million." arrow>
                <Typography variant="subtitle2" sx={{ fontWeight: "semi-bold", textDecoration: "underline", textDecorationStyle: "dotted" }}>
                  Flipkart
                </Typography>
              </HtmlTooltip>
              <Divider orientation="vertical" sx={{ height: "12px", marginTop: "4px !important" }} />
              <Typography variant="subtitle2">
                Bengaluru, IN
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={0.5} sx={{ marginTop: "16px" }}>
          <ToolTip title={
            <React.Fragment>
            • 2-4 yrs of Total experience <br /> • 2+ years of experience in React Frontend
            </React.Fragment>} 
            
            
            
            arrow>
            <Chip variant="outlined" color="primary" size="small" icon={<WorkHistoryOutlinedIcon />} label="2-4 yrs • React Frontend (2+ yrs)" />
          </ToolTip>

          
          <Divider orientation="vertical" sx={{ height: "16px", marginTop: "4px !important" }} />
          <Chip variant="outlined" size="small" label="React" />
          <Chip variant="outlined" size="small" label="Javascript" />
          <Chip variant="outlined" size="small" label="Redux" />
          <Chip variant="outlined" size="small" label="Typescript" />
          <Chip variant="outlined" size="small" label="React Hooks" />
        </Stack>
        <Divider sx={{ marginTop: "16px" }} />
        <Stack direction="row" spacing={0.5} sx={{ marginTop: "16px" }}>
          <Typography variant="caption">
            Unicorn • Decacorn • Ecommerce • Funding $12.9B • Valuation $37.6B • Employees 30,000 • Founded 2007(16 yrs) •
          </Typography>
          <Link variant="caption" sx={{ cursor: "pointer" }}>
            56 open jobs↗
          </Link>
        </Stack>
      </CardContent>
      {/* <CardActions>
        <IconButton aria-label="add to favorites">
          <BookmarkIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}