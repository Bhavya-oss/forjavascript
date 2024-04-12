import React, { useCallback, useContext, useState } from "react";
import { sendPhoneNumber } from "./ApiCalls";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { MyContext } from "./ContextProvider";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";

function SingUpCard(props) {
  const { phone, setPhone, isModel, isChecked, setIsChecked, handleClose } = props;
  const { setGlobalState } = useContext(MyContext);

  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handleChange = (newPhone) => {
    setIsValidPhoneNumber(matchIsValidTel(newPhone));
    setPhone(newPhone);
  };

  const submit = useCallback(async () => {
    setIsValidPhoneNumber(matchIsValidTel(phone));

    if (phone != "") {
      const phoneNumberWithoutSpaces = phone.replace(/\s/g, "");
      const phoneNum = {
        phoneNumber: phoneNumberWithoutSpaces,
      };
      setGlobalState((prev) => {
        return {
          ...prev,
          ["showCard"]: "otpCard",
        };
      });

      try {
        let data = await sendPhoneNumber(phoneNum);

        setGlobalState((prev) => {
          return {
            ...prev,
            ["userSystemInfo"]: data,
          };
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [phone]);

  return (
    <>
    <Box sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' },
          alignItems: 'center',
          
        }}>
      <Card
        sx={{
          position: "relative",

          width: isModel ? {sm:"22em", md:"22em", lg:"22em", xl:'29em'} : { xs: '100%', sm: '52%', md: '38%', lg: '35%', xl: '30%' },
          // height: isModel ? '20rem' : '17rem',
          backgroundColor: '#FFF',
          boxShadow: '0px 8px 25px 0px rgba(13, 10, 44, 0.06)',
          borderRadius: '20px',
          padding: '20px 40px',
          marginTop: { xs: '10px', sm: '15px', md: '0px', lg: '0px', xl: '0px' },
          border:'none',
        }}
      >
        {isModel && 
        (<IconButton
            sx={{
              position: "absolute",
              top: "8px",
              // right:  {xs:"8px", sm:"154px",md:"16px",lg:"190px", xl:"407px"},
              right:"5px",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>)
}
        <CardContent>
          <Typography
              sx={{ fontSize: { xs: "18px", sm: '18px', md: '16px', lg: '20px', xl: '20px' }, fontWeight: "bold", marginBottom: ".5em", }}
              >
            Enter your Mobile number
          </Typography>
          <MuiTelInput
            value={phone}
            onChange={handleChange}
            defaultCountry="IN"
            sx={{
              width: "100%",
            }}
          />
          {!isValidPhoneNumber && (
            <Typography sx={{ color: "red", fontSize:{xs:"0.8rem", sm:"1rem"} }}>
              Please enter a valid phone number.
            </Typography>
          )}
          <Box sx={{ marginTop: "1em" }}>
          <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                    }}
                    checked={isChecked}
                    style={{
                      color: "#0D0E10",

                    }}
                    sx={{marginBottom:{xs:"20px", sm:"0px", md:"0px", lg:"0px", xl:"0px"}}}
                  />
                }
                checked={true}
                label={
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: '15px', md: '15px', lg: '16px', xl: '16px' }, // Adjust the font size as per your requirement
                    }}
                  >
                    I would like to get latest job updates on Whatsapp
                  </Typography>
                }
              />
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#0D0E10",
              color: "white",
              "&:hover": {
                backgroundColor: "#0D0E10",
                color: "white",
              },
              width: "100%",
            }}
            disabled={!isValidPhoneNumber}
            onClick={submit}
          >
            Next
          </Button>
          {/* <Box sx={{ marginTop: "1rem", display: "flex", gap: "3px" }}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px" }}
            >
              Already have an account?
            </Typography>

            
              <a
                onClick={() => {
                  setGlobalState((prev) => {
                    return {
                      ...prev,
                      ["showCard"]: "signInCard",
                    };
                  });
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bolder",
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Sign in
                </Typography>
              </a>
            
            
            
          </Box> */}
        </CardContent>
      </Card>
      </Box>
    </>
  );
}

export default SingUpCard;
