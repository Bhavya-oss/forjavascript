import React, { useCallback, useContext, useState, useEffect } from "react";
import { MyContext } from "./ContextProvider";
import {
  Modal,
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OtpSuccesCard from "./OtpSuccesCard";
import SingInCard from "./SingInCard";
import OtpCard from "./OtpCard";
import SingUpCard from "./SingUpCard";
import { Padding } from "@mui/icons-material";

function AuthenticationModel() {
  const { globalState, setGlobalState } = useContext(MyContext);

  //phone number state
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [showCheckBox, setShowCheckBox] = useState(false);


  useEffect(() => {
    setGlobalState((prev) => {
      return {
        ...prev,
        ["showCard"]: "signInCard",
      };
    });


    // console.log("calling authentication model")
    setPhone("")

  }, [globalState.authModel]);

  const handleClose = useCallback(() => {
    setGlobalState((prev) => {
      return {
        ...prev,
        ["authModel"]: !globalState.authModel,
      };
    });
  }, [globalState]);

  return (
    <>
      <Modal open={globalState.authModel} onClose={handleClose} sx={{ }}
>
        <Box
          sx={{
            position: "absolute",
            left: {xs:"1.3rem", sm:'0rem', md:"16.5rem", lg:"28rem", xl:"38rem"},
            top: {xs:"15rem", sm:"15rem", md:"20rem", lg:"18rem", xl:"18rem"},
            // boxShadow: "0px 8px 25px 0px rgba(13, 10, 44, 0.10)",
            borderRadius: "20px",
            height: "20rem",
            width:{xs:"90%",sm:"100%", md:"50%"},
            '&:focus': {
              outline: 'none', // Remove outline when focused
            },
            '&:active': {
              outline: 'none', // Remove outline when active (clicking)
            },

          }}
        >
          {/* <IconButton
            sx={{
              position: "absolute",
              top: "8px",
              right:  {xs:"8px", sm:"154px",md:"16px",lg:"190px", xl:"407px"},

            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton> */}

          {globalState.showCard == "signInCard" ? (
            <SingInCard phone={phone} setPhone={setPhone} 
            isModel={true} handleClose={handleClose}
            setShowCheckBox={setShowCheckBox}
            />
          ) : globalState.showCard == "otpCard" ? (
            <OtpCard phone={phone} 
            setPhone={setPhone} isModel={true} 
            handleClose={handleClose}
            isChecked={isChecked}
              setIsChecked={setIsChecked}
              showCheckBox={showCheckBox}
            />
          ) : globalState.showCard == "successCard" ? (
            <OtpSuccesCard 
            whatsappStatus={isChecked}
            isModel={true} />
          ) : globalState.showCard == "signUpCard" ? (
            <SingUpCard 
            phone={phone} 
            setPhone={setPhone} 
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            isModel={true}
            handleClose={handleClose}
            />
          ) : null}
        </Box>
      </Modal>
    </>
  );
}

export default AuthenticationModel;
