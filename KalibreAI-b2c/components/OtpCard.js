import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  useMediaQuery,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import TimeCounter from "./TimeCounter";
import { checkArrayLength } from "./GlobalFunction";
import { MyContext } from "./ContextProvider";
import { otpSubmit, otpValidation, resendPhoneNumber } from "./ApiCalls";

function OtpCard(props) {
  const { phone, setPhone, isModel, isChecked, setIsChecked, showCheckBox } =
    props;

  const { globalState, setGlobalState } = useContext(MyContext);

  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 600px)");

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (index, value) => {
  // Validate that the input value is a single digit number
  const sanitizedValue = value.replace(/[^0-9]/g, "");
  const newOtp = otp.split(""); // Updated to use the current value of 'otp' state
  newOtp[index] = sanitizedValue;
  setOtp(newOtp.join(""));

  // Move focus to the next box if the current box is not the last one and the input value is not empty
  if (value !== "" && index < inputRefs.current.length - 1) {
    inputRefs.current[index + 1].focus();
  } else if (value === "" && index > 0) {
    // Move focus to the previous box if the current box is not the first one and the input value is empty
    inputRefs.current[index - 1].focus();
  }
};

const handleKeyDown = (event, index) => {
  if (event.key === "Backspace" && otp[index] === "") {
    // If the Backspace key is pressed and the current box is empty, move focus to the previous box
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }
};

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text/plain").slice(0, 6);
    const otpArray = pastedData.split("");
    otpArray.forEach((value, index) => {
      if (index < inputRefs.current.length) {
        handleChange(index, value);
      }
    });
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  // resend button enabling purpuse
  const endTime = (info) => {
    if (info) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  //resend the phone number again
  const reSendOtp = useCallback(() => {
    if (globalState.userSystemInfo != null) {
      let data = {
        deviceId: globalState.userSystemInfo.deviceId,
        preAuthSessionId: globalState.userSystemInfo.preAuthSessionId,
      };
      resendPhoneNumber(data);
      setGlobalState((prev) => {
        return {
          ...prev,
          ["otpErrosMessage"]: null,
        };
      });
      setStatus(false);
    }
  }, [globalState]);

  const handleEditClick = () => {
    setPhone("");
    setGlobalState((prev) => {
      return {
        ...prev,
        ["showCard"]: "signInCard",
        ["otpErrosMessage"]:null
      };
    });
  };

  const submit = useCallback(async () => {
    // console.log("dddd submit otp calling .......")

    if (otp != "" && globalState.userSystemInfo != null) {
      const result = {
        deviceId: globalState.userSystemInfo.deviceId,
        preAuthSessionId: globalState.userSystemInfo.preAuthSessionId,
        userInputCode: otp,
        role: "candidate",
      };

      try {
        const data = await otpSubmit(result);

        otpValidation(data, setGlobalState);
      } catch (erorr) {
        console.log(erorr);
      }
    }
  }, [otp, globalState.userSystemInfo]);

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
            width: isModel
              ? { sm: "22em", md: "22em", lg: "22em", xl: "28em" }
              : { xs: "100%", sm: "50%", md: "35%", lg: "30%", xl: "30%" },
            // height: isModel ? '20rem' : '17rem',
            backgroundColor: "#FFF",
            boxShadow: "0px 8px 25px 0px rgba(13, 10, 44, 0.06)",
            borderRadius: "20px",
            padding: { xs: "10px 30px 20px 30px", sm: "20px 40px" },
            marginTop: {
              xs: "10px",
              sm: "40px",
              md: "0px",
              lg: "0px",
              xl: "0px",
            },
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: ".5em",
              }}
            >
              Enter OTP
            </Typography>

            <Box
              sx={{
                marginBottom: ".1em",
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                gap: ".2em",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ fontSize: {xs:"17px", sm:"15px"} }}>
                We have sent an OTP on :
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "15px",
                  },
                }}
              >
                {phone != undefined && phone}
              </Typography>
              <EditIcon
                fontSize="small"
                color="gray"
                onClick={handleEditClick}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", paddingTop:{sm:"1.5px",lg:"", xl:"0px"} }}>
              <>
                {!status ? (
                  <TimeCounter endTime={endTime} min={0} sec={45} />
                ) : (
                  <h3>00:00</h3>
                )}
              </>
            </Box>

            <Box sx={{ marginTop: ".5em", display: "flex", gap: "1rem" }}>
              {Array.from({ length: 6 }).map((_, index) => {
                return (
                  <TextField
                    key={index}
                    inputProps={{
                      maxLength: 1,
                      inputMode: "numeric",
                      style: {
                        textAlign: "center",
                        fontSize: { sm: "20px" },
                        lineHeight: "24px",
                        padding: isMobileView ? "0px" : undefined,
                        height: isMobileView ? "32px" : "",
                      },
                    }}
                    type="text"
                    variant="outlined"
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    onFocus={() => handleFocus(index)}
                    inputRef={(el) => (inputRefs.current[index] = el)}
          
                  />
                );
              })}
            </Box>
            {globalState?.otpErrosMessage != null && (
              <Box sx={{ marginTop: "0.6em",paddingBottom:{xl:"0.6rem"}  }}>
              <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm:"0.95rem", xl:"1rem" },
                    color: "red",
                    position: {xl:"absolute"},
                  }}
                >
                  {globalState?.otpErrosMessage}
                </Typography>
              </Box>
            )}

            {!showCheckBox && (
              <Box sx={{ marginTop: "1.4em" }}>
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
                      sx={{
                        marginBottom: {
                          xs: "20px",
                          sm: "0px",
                          md: "0px",
                          lg: "0px",
                          xl: "0px",
                        },
                      }}
                    />
                  }
                  checked={true}
                  label={
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "15px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }, // Adjust the font size as per your requirement
                      }}
                    >
                      I would like to get latest job updates on Whatsapp
                    </Typography>
                  }
                />
              </Box>
            )}

            <Box sx={{ display: "flex",marginTop:!showCheckBox? 0 : "1rem" }}>
              <Typography sx={{ fontSize: "15px" }}>
                Didn’t get the OTP?
              </Typography>
              <Button
                sx={{ marginTop: "-.5rem" }}
                variant="text"
                disabled={!status}
                onClick={() => {
                  reSendOtp();
                }}
              >
                Resend
              </Button>
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#0D0E10",
                marginTop: ".5rem",
                color: "white",
                "&:hover": {
                  backgroundColor: "#0D0E10",
                  color: "white",
                },
                width: "100%",
              }}
              disabled={!(otp?.length == 6)}
              onClick={submit}
            >
              Verify
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default OtpCard;