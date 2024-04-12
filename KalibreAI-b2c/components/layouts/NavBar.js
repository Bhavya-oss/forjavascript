import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Link from "next/link";
import { MyContext } from "../ContextProvider";
import { PROFILE_LOGO } from "../constants/ImagesLink";
import { InboxOutlined, Logout, Settings } from "@mui/icons-material";
import { signOut } from "../ApiCalls";
import HideOnScroll from "./HideOnScroll";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const isTabView = useMediaQuery("(max-width: 1200px)");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isRenderd, setIsRenderd] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const { globalState, setGlobalState } = React.useContext(MyContext);
  const router = useRouter();
  const currentPath = router.pathname;

  console.log("currentPathcurrentPath", currentPath)
  console.log("currentPathcurrentPath", currentPath != "/" ? "true" : "false")


  const navItems = [{ label: "Login / SignUp", link: currentPath != "/" ? "/waitlist" : "/signIn" }];


  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY);
      console.log('scrolled123', document)

    };
    console.log('scrolled', window, document)

    // Add the scroll event listener when the component mounts
    document.body.addEventListener("scroll", handleScroll);
    // return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsRenderd(true);
  }, [globalState.isAuthentication]);



  console.log("router path ====", currentPath);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src="/images/Kalibre-logo.png"
        style={{ width: "35%", padding: "5px" }}
      />

      {!globalState?.isAuthentication?.isAuth == true ? (
        <List>
          {navItems.map((item, idx) => (
            <Box key={idx}>
              <Link href={item.link}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    textTransform: "none",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#000000",
                    },

                    
                    marginTop: "30px",
                  }}
                >
                  {console.log(item, "check mcu navitems")}

                  {item.label}
                </Button>
              </Link>
            </Box>
          ))}
        </List>
      ) : (
        <Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "10px" }}
          >
            <Avatar
              variant="solid"
              sx={{ width: "50px", height: "auto" }}
              src={PROFILE_LOGO}
            />
          </Box>
          <Box sx={{ padding: "10px" }}>
            {/* <Typography>Settings</Typography> */}
            <Typography
              onClick={() => {
                signOut({}, setGlobalState);
                handleClose();
              }}
            >
              Logout
            </Typography>
          </Box>
        </Box>
      )}

      {currentPath != "/candidates" &&
        <Link style={{ textDecoration: "none" }} href="candidates/">
          <Typography
            sx={{
              marginTop: "25px",
              marginRight: "25px",
              color: "black",
              fontWeight: 600,
            }}
          >
            For Companies
          </Typography>
        </Link>
      }


    </Box>
  );



  {
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      {currentPath != "/companies" &&
        <Link style={{ textDecoration: "none" }} href="companies/">
          <Typography
            sx={{ marginRight: "25px", color: "black", fontWeight: 600 }}
          >
            For Companies
          </Typography>
        </Link>
      }
    </Box>
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {isRenderd && (
        <Box sx={{ display: "flex" }}>
          {/* <HideOnScroll {...props}> */}
          <AppBar
            // component="nav"
            position="fixed"
            sx={{
              backgroundColor: "hsla(0,0%,100%,.05)",
              // backdropFilter: 'blur(500px)',
              backdropFilter: "blur(6px)",
              // content:'"',
              // background: "linear-gradient(90deg, #F1E9FE 17.79%, #F1EAFF 100%)",
              boxShadow: "none",
            }}
          >
            <Container sx={{ minWidth: scrollY ? "85%" : "100%" }}>
              <Toolbar sx={{}}>
                <Box>
                  <Box
                    sx={{
                      width: { xs: "38%", sm: "18%", md: "15%" },
                      paddingTop: { xs: "13px", sm: "0px" },
                      display: { xs: "block", sm: "none" },
                    }}
                  >
                    <Link href="/">
                      <img
                        src="/images/Kalibre-logo.png"
                        alt="KalibreAI logo"
                        // height={40}
                        className="responsive"
                      />
                    </Link>
                  </Box>
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  {/* <img src={imageadd} width={80} /> */}
                </IconButton>

                <Box
                style={{width:'40%'}}
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "block" },
                    padding: "20px 0",
                  }}
                >
                  <Link href="/">
                    <img
                      src="/images/Kalibre-logo.png"
                      style={{
                        width: isTabView ? "24%" : "14%",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </Box>

                <Box sx={{ display: { xs: "none", sm: "block" },width:{sm:'20%', md:"15%", lg:"12%", xl:"10%"} }}>
                  {currentPath != "/companies" &&
                    <Link style={{ textDecoration: "none" }} href="candidates/">
                      <Typography
                        sx={{
                          marginRight: "25px",
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        For Candidates
                      </Typography>
                    </Link>
                  }
                </Box>

                <Box sx={{ display: { xs: "none", sm: "block" },width:{sm:'20%', md:"15%", lg:"12%", xl:"10%"} }}>
                  {currentPath != "/companies" &&
                    <Link style={{ textDecoration: "none" }} href="companies/">
                      <Typography
                        sx={{
                          marginRight: "25px",
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        For Companies
                      </Typography>
                    </Link>
                  }
                </Box>

                {globalState?.isAuthentication?.isAuth == true ? (
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <IconButton
                      aria-label="user-avatar"
                      size="large"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Avatar
                        variant="solid"
                        sx={{ width: "50px", height: "50px" }}
                        src={PROFILE_LOGO}
                      />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {/* <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem> */}
                      <MenuItem
                        onClick={() => {
                          signOut({}, setGlobalState);
                          handleClose();
                        }}
                      >
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </Box>
                ) : (
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems?.map((item, idx) => (
                      <Link href={item.link} key={idx}>
                        <Button
                          variant="contained"
                          key={item}
                          sx={{
                            backgroundColor: "#000000",
                            textTransform: "none",
                            color: "#FFFFFF",
                            "&:hover": {
                              backgroundColor: "#000000",
                            },
                          }}
                        >
                          {item.label}
                        </Button>
                      </Link>
                    ))}
                  </Box>
                )}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: "none" }, color: "black" }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>
          {/* </HideOnScroll> */}

          <Box component="nav">
            <Drawer
              anchor="right"
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      )}
    </>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
