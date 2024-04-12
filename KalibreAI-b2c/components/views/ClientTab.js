import React from "react";
import {
  Stack,
  Typography,
  Box,
  Grid,
  Button,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import {
  TABPANEL_IMG_ONE,
  SIMPLE_IMAGE,
  SPEEDY_IMAGE,
  SMART_IMAGE,
  SENSIBLE_IMAGE,
  SIMPLE_MOBILE_IMAGE,
  SMART_MOBILE_IMAGE,
  SPEEDY_MOBILE_IMAGE,
  SENSIBLE_MOBILE_IMAGE,
} from "../constants/ImagesLink";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  mdiSimpleIcons,
  mdiLightbulbOnOutline,
  mdiFlashOutline,
  mdiCash100,
  mdiStarFourPoints,
} from "@mdi/js";
import Icon from "@mdi/react";

function ClientTab() {
  const [value, setValue] = React.useState("1");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTab = useMediaQuery("(max-width:900px)");

  const isDeskTop = useMediaQuery("(min-width:1600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          margin: {
            xs: "0% 0% 14% 0%",
            sm: "0% 15% 6% 15%",
            md: "0% 0% 6% 0%",
            xl: "0% 20% 4% 20%",
          },
        }}
      >
        <Typography variant="client_section_three_heading">
          The secret sauce: How we nail the perfect match
        </Typography>
      </Box>
      <Box>
        <TabContext value={value}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // marginBottom: "6%",
            }}
          >
            <Box
              sx={{
                // borderBottom: 1,
                borderColor: "#DEE2E6",
                display: "flex",
                justifyContent: "center",
                width: {xs:"100%", sm:"95%"},
              }}
            >
              <Tabs
                onChange={handleChange}
                value={value}
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "black",
                    // width: "30%", // Adjust the width as needed
                    maxWidth: isDeskTop ? 204 : 90,
                    width: isDeskTop ? "100%" : "",
                  },
                }}
                textColor="inherit"
              >
                <Tab
                  style={{
                    paddingLeft: isDeskTop ? "70px" : "",
                    marginRight: isMobile ? "1px" : isTab ? "28px" : "130px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                  // icon={
                  //   <div style={{ marginRight: '18px' }}> {/* Adjust the margin-right value as needed */}
                  //     <Icon path={mdiFlashOutline} size={1.3} />
                  //   </div>
                  // }
                  // iconPosition="start"
                  label="Speedy"
                  value="1"
                />
                <Tab
                  style={{
                    paddingLeft: isDeskTop ? "80px" : "",
                    marginRight: isMobile ? "1px" : isTab ? "28px" : "130px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                  // icon={
                  //   <div style={{ marginRight: '18px' }}> {/* Adjust the margin-right value as needed */}
                  //     <Icon path={mdiLightbulbOnOutline} size={1.3} />
                  //   </div>
                  // }
                  // iconPosition="start"
                  label="Smart"
                  value="2"
                />
                <Tab
                  style={{
                    paddingLeft: isDeskTop ? "80px" : "",
                    marginRight: isMobile ? "1px" : isTab ? "28px" : "130px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                  // iconPosition="start"
                  // icon={
                  //   <div style={{ marginRight: '18px' }}> {/* Adjust the margin-right value as needed */}
                  //     <Icon path={mdiSimpleIcons} size={1.3} />
                  //   </div>
                  // }

                  label="Simple"
                  value="3"
                />

                <Tab
                  // icon={
                  //   <div style={{ marginRight: '18px',  }}> {/* Adjust the margin-right value as needed */}
                  //     <Icon path={mdiCash100} size={1.3} />
                  //   </div>
                  // }
                  // iconPosition="start"
                  label="Sensible"
                  value="4"
                  style={{
                    paddingLeft: isDeskTop ? "70px" : "",
                    paddingRight: "30px",
                    marginRight: isMobile ? "1px" : isTab ? "28px" : "115px",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                />
              </Tabs>
            </Box>
          </Box>
          <TabPanel  value="1" sx={{padding: {xs:"0px",md:"0px 30px 24px 24px"}}}>
            {" "}
            <Box
            
              sx={{
                backgroundImage: 
                // isMobile?`url(${SPEEDY_MOBILE_IMAGE})`:
                `url(${SPEEDY_IMAGE})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
                height: 350,
                borderRadius: "0px 0px 20px 20px",
                // backgroundAttachment:'fixed'

                // backgroundSize:"100% 100%"
                // width:'80%',
                marginTop: "-2px",
                display: "flex",
                alignItems: {xs:"flex-start", sm:"center"},
                justifyContent: {xs:"flex-start", sm:"center"},
                borderTop: 2,
                borderColor: "#DEE2E6",
                paddingLeft:{xs:"0%", sm:"6%",md:"0%"},

                marginLeft:{xs:"0%", md:'6%'},
                opacity:isMobile?0.6:6,
                            }}
            
            
            >
              <Grid
                container
                justifyContent="left"
                alignItems="flex-start"
                spacing={isDeskTop ? 40 : 0}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  xl={12}
                  sx={{ marginBottom: { xs: "80px", sm: "0px" } }}
                >
                  <Stack spacing={3} sx={{ marginLeft: {xs:"50px", sm:"10px"}, marginTop: {xs:"24px", sm:"0px"} }}>
                    {/* <Box>
                      <Icon path={mdiFlashOutline} size={1.3} />
                    </Box> */}

                    {/* <Box>
                      <Typography variant="client_tab_points_title">
                        Speedy
                      </Typography>
                    </Box> */}
                    <List sx={{ width: "100%", paddingTop: "0px" }}>
                      <ListItem
                        alignItems="flex-start"
                        sx={{ padding: "0px", marginBottom: "8px" }}
                      >
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Expert interviewer network{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem
                        alignItems="flex-start"
                        sx={{ padding: "0px", marginBottom: "8px" }}
                      >
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Interview templates{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem
                        alignItems="flex-start"
                        sx={{ padding: "0px", marginBottom: "8px" }}
                      >
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Smart interview scheduler{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem
                        alignItems="flex-start"
                        sx={{ padding: "0px", marginBottom: "8px" }}
                      >
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Pre vetted candidates{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem
                        alignItems="flex-start"
                        sx={{ padding: "0px", marginBottom: "8px" }}
                      >
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Hyper Sync tables{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem
                        alignItems="flex-start"
                        sx={{ padding: "0px", marginBottom: "8px" }}
                      >
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Automated resume parsing{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem
                        alignItems="flex-start"
                        sx={{ padding: "0px", marginBottom: "8px" }}
                      >
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Automated screening bot{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                    {/* <Box>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "black" }}
                      >
                        Start Exploring
                      </Button>
                    </Box> */}
                  </Stack>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={6} xl={7}>
                  <Box>
                    <img
                      className="image-responsive"
                      src={SPEEDY_IMAGE}
                      alt=""
                    />
                  </Box>
                </Grid> */}
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="2" sx={{padding: {xs:"0px",md:"0px 30px 24px 24px"}}}>
            {" "}
            <Box
              sx={{
                backgroundImage: 
                // isMobile?`url(${SMART_MOBILE_IMAGE})`:
                `url(${SMART_IMAGE})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
                height: 350,
                // backgroundAttachment:'fixed'

                // backgroundSize:"100% 100%"

                borderTop: 2,
                borderColor: "#DEE2E6",
                marginTop: "-2px",
                borderRadius: "0px 0px 20px 20px",
                display: "flex",
                alignItems: {xs:"flex-start", sm:"center"},
                justifyContent: {xs:"flex-start", sm:"center"},
                paddingLeft:{ sm:"6%"},
                opacity:isMobile?0.6:6,

              }}
            >
              <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
                // spacing={isDeskTop ? 40 : 0}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  sx={{ marginBottom: { xs: "80px", sm: "0px" } }}
                >
                  <Stack spacing={2.8} sx={{ marginLeft:  {xs:"50px", sm:"10px"}, marginTop: {xs:"24px", sm:"0px"}}}>
                    {/* <Box>
                      <Icon path={mdiLightbulbOnOutline} size={1.3} />
                    </Box> */}

                   
                    <List sx={{ width: "100%", paddingTop: "0px",  }}>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Ai based auto matching{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Interview templates{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Smart interview scheduler{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Virtual tables{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Candidate pipelines{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Interview platform{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Expert interviewer network{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                    {/* <Box>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "black" }}
                      >
                        Start Exploring
                      </Button>
                    </Box> */}
                  </Stack>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={6} xl={7}>
                      <Box>
                        <img
                          className="image-responsive"
                          src={TABPANEL_IMG_ONE}
                          alt=""
                        />
                      </Box>
                    </Grid> */}
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="3" sx={{padding: {xs:"0px",md:"0px 30px 24px 24px"}}}>
            <Box
              sx={{
                backgroundImage: 
                // isMobile?`url(${SIMPLE_MOBILE_IMAGE})`:
                `url(${SIMPLE_IMAGE})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
                height: 350,
                display: "flex",
                alignItems: {xs:"flex-start", sm:"center"},
                justifyContent: {xs:"flex-start", sm:"center"},
                borderRadius: "0px 0px 20px 20px",
                // backgroundAttachment:'fixed'
                borderTop: 2,
                borderColor: "#DEE2E6",
                // backgroundSize:"100% 100%"
                marginTop: "-2px",
                paddingLeft:{sm:"6%"},
                opacity:isMobile?0.6:6,


              }}
            >
              <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
                spacing={isDeskTop ? 40 : 0}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  sx={{ marginBottom: { xs: "80px", sm: "0px" } }}
                >
                  <Stack spacing={2.8} sx={{marginLeft: {xs:"50px", sm:"10px"}, marginTop: {xs:"24px", sm:"0px"}}}>
                    {/* <Box>
                      <Icon path={mdiSimpleIcons} size={1.3} />
                    </Box>

                    <Box>
                      <Typography variant="client_tab_points_title">
                        Simple
                      </Typography>
                    </Box> */}

                    <List sx={{ width: "100%", paddingTop: "0px" }}>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              One click hire
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Pre vetted Candidates{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px",marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Ai based auto matching{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Multi job board posting{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Interview platform{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>

                    {/* <Box>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "black" }}
                      >
                        Start Exploring
                      </Button>
                    </Box> */}
                  </Stack>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={6} xl={7}>
                  <Box>
                    <img
                      className="image-responsive"
                      src={TABPANEL_IMG_ONE}
                      alt=""
                    />
                  </Box>
                </Grid> */}
              </Grid>
            </Box>
          </TabPanel>

          <TabPanel value="4" sx={{padding: {xs:"0px",md:"0px 30px 24px 24px"}}}>
            <Box
              sx={{
                backgroundImage: 
                // isMobile?`url(${SENSIBLE_MOBILE_IMAGE})`:
                `url(${SENSIBLE_IMAGE})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
                height:350,
                display: "flex",
                alignItems: {xs:"flex-start", sm:"center"},
                justifyContent: {xs:"flex-start", sm:"center"},
                borderRadius: "0px 0px 20px 20px",
                // backgroundAttachment:'fixed'

                // backgroundSize:"100% 100%"
                borderTop: 2,
                borderColor: "#DEE2E6",
                marginTop: "-1px",
                paddingLeft:{sm:"6%"},
                opacity:isMobile?0.6:6,

              }}
            >
              <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
                spacing={isDeskTop ? 40 : 0}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  sx={{ marginBottom: { xs: "80px", sm: "0px" } }}
                >
                  <Stack spacing={2.8} sx={{ marginLeft: {xs:"50px", sm:"10px"}, marginTop: {xs:"24px", sm:"0px"}}}>
                    {/* <Box>
                      <Icon path={mdiCash100} size={1.3} />
                    </Box>

                    <Box>
                      <Typography variant="client_tab_points_title">
                        Sensible
                      </Typography>
                    </Box> */}
                    <List sx={{ width: "100%", paddingTop: "0px" }}>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Freemium{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Pay as you grow{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem alignItems="flex-start" sx={{ padding: "0px", marginBottom: "8px" }}>
                        <ListItemAvatar sx={{ minWidth: "29px" }}>
                          <Icon path={mdiStarFourPoints} size={0.7} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="client_list_item">
                              Customized{" "}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                    {/* <Box>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "black" }}
                      >
                        Start Exploring
                      </Button>
                    </Box> */}
                  </Stack>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={6} xl={7}>
                  <Box>
                    <img
                      className="image-responsive"
                      src={TABPANEL_IMG_ONE}
                      alt=""
                    />
                  </Box>
                </Grid> */}
              </Grid>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default ClientTab;
