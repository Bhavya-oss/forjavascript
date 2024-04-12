import React, { useContext, useEffect } from "react";
// import NavBar from "./NavBar";
import { Container } from "@mui/material";
import Footer from "./Footer";
import { MyContext } from "../ContextProvider";
import NavBar from "./NavBar";
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box
  
} from "@mui/material";
function Layouts({ children, hideNavbar, hideFooter }) {

  const {setGlobalState} = useContext(MyContext)

    useEffect(() => {
      // console.log("qqq main layout calling===");

      if (typeof localStorage !== "undefined") {
        let userInfo = JSON?.parse(localStorage?.getItem("info"));
  
        if(userInfo != undefined){
          setGlobalState((prev) => {
            return {
              ...prev,
              ["isAuthentication"]: userInfo,
            };
          });
        }
        
      }
    },[])



  return (
    <>
    <Box sx={{
      background:"linear-gradient(180deg, #ECF0FF 0.03%, rgba(255, 255, 255, 0.97) 3.51%, rgba(255, 255, 255, 0.88) 10.08%, #FAFEFF 12.64%, #FFF 15.52%, #FFF 25.58%, #F3FCFF 30.07%, #FFF 34.07%, #FFF 91.55%, #DDE2FF 99.96%)"
    }
      }>
      {!hideNavbar && <NavBar/>}

      {children}

      {!hideFooter && <Footer />}
      </Box>
    </>
  );
}

export default Layouts;




