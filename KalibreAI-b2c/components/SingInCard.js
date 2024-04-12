import { CheckBox } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControlLabel,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { isExistPhoneNumber, sendPhoneNumber } from "./ApiCalls";
import { MyContext } from "./ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

function SingInCard(props) {
  const { phone, setPhone, isModel, handleClose, setShowCheckBox } = props;
  const { setGlobalState } = useContext(MyContext);

  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (newPhone) => {


    const cleanPhoneNumber = newPhone.replace(/\D/g, '');
    if(cleanPhoneNumber.length <=12){
      setPhone(newPhone);
      setIsValidPhoneNumber(matchIsValidTel(newPhone));

    }

  };

  const sendBackend = async (number) => {
    const phoneNum = {
      phoneNumber: number,
    };
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
  };

  const submit = useCallback(async () => {
    setIsValidPhoneNumber(matchIsValidTel(phone));
    if (phone != "") {
      setLoading(true);
      const phoneNumberWithoutSpaces = phone.replace(/\s/g, "");

      try {
        const response = await isExistPhoneNumber(phoneNumberWithoutSpaces);
        setShowCheckBox(response.exists);
        sendBackend(phoneNumberWithoutSpaces);
        setGlobalState((prev) => {
          return {
            ...prev,
            ["showCard"]: "otpCard",
          };
        });
      } catch (erorr) {
        console.log(erorr);
      }
    }
  }, [phone]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            position: "relative",
            width: isModel
              ? { sm: "22em", md: "22em", lg: "22em", xl: "28em" }
              : { xs: "100%", sm: "50%", md: "35%", lg: "30%", xl: "30%" },
            // height: isModel ? '20rem' : '17rem',
            backgroundColor: "#FFF",
            boxShadow: "0px 8px 25px 0px rgba(13, 10, 44, 0.06)",
            borderRadius: "20px",
            padding: "20px 40px",
            marginTop: {
              xs: "10px",
              sm: "1px",
              md: "0px",
              lg: "0px",
              xl: "0px",
            },
            border: "none !important",
            outline: "none !important",
          }}
        >
          {isModel && (
            <IconButton
              sx={{
                position: "absolute",
                top: "8px",
                right: "5px",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          )}
          <CardContent>
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "18px",
                  md: "16px",
                  lg: "20px",
                  xl: "20px",
                },
                fontWeight: "bold",
                marginBottom: ".5em",
              }}
            >
              Login or SignUp
            </Typography>
            <MuiTelInput
              value={phone}
              onChange={handleChange}
              defaultCountry="IN"
              inputProps={{
                placeholder: 'Phone',
              }}
              sx={{
                width: "100%",
              }}
            />
            
            {!isValidPhoneNumber && (
              <Typography sx={{ color: "red", position: "absolute" }}>
                Please enter a valid phone number.
              </Typography>
            )}

            {/* <Box sx={{ marginTop: "1em" }}>
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
                />
              }
              checked={true}
              label="I would like to get latest job updates on Whatsapp"
            />
          </Box> */}

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
                marginTop: "3em",
              }}
              disabled={!isValidPhoneNumber}
              onClick={submit}
            >
              {loading ? (
                <CircularProgress color="inherit" size={25} />
              ) : (
                "Next"
              )}
            </Button>

            {/* <Box sx={{ marginTop: "1rem", display: "flex", gap: "3px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "14px" },
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Don't have an account?
              </Typography>

              <a
                onClick={() => {
                  setGlobalState((prev) => {
                    return {
                      ...prev,
                      ["showCard"]: "signUpCard",
                    };
                  });
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "13px", sm: "14px" },
                    fontWeight: "bolder",
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Sign up now
                </Typography>
              </a>
            </Box> */}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default SingInCard;
