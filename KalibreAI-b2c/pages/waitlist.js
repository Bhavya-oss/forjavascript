import React, { useCallback, useState, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  TextareaAutosize,
  IconButton,
  Typography,
  Grid,
  Button,
  Snackbar,
  SnackbarContent,
  Container,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon
import { handleClientForm, submitContactEmail } from "../components/ApiCalls";
function waitlist(props) {
  const { open, handleClose } = props;

  const inputStyle = {
    borderRadius: "10px", // Adjust the border radius as needed
    border: "1px white",
    backgroundColor: "#f5f5f4",
  };

  const intialFormData = {
    name: "",

    email: "",
    company_name: "",
    message: "",
  };
  const [formData, setFormData] = useState(intialFormData);
  const [errorField, setErrorField] = useState(intialFormData);
  const [isEmailFullFilled, setIsEmailFullFilled] = useState(false);
  const [showError, setshowError] = useState({
    name: "",
    email: "",
    company_name: "",
  });

  const [success, setSuccess] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  useEffect(() => {
    let timeoutId;

    if (success) {
      timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [success]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    setErrorField((prev) => ({ ...prev, [name]: "" }));

    setshowError((prev) => ({ ...prev, [name]: false }));

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        setErrorField((prev) => ({ ...prev, email: "Invalid email format" }));
        setshowError((prev) => ({ ...prev, email: true }));
      }
    }
  };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Submit", e);
      let checkError = false;

      if (formData.name === "") {
        checkError = true;
        setErrorField((prev) => ({ ...prev, ["name"]: "Name is required!" }));
        setshowError((prev) => ({ ...prev, ["name"]: true }));
      }

      if (formData.email === "") {
        checkError = true;
        setErrorField((prev) => ({ ...prev, ["email"]: "Email is required!" }));
        setshowError((prev) => ({ ...prev, ["email"]: true }));
      }
      if (formData.company_name === "") {
        checkError = true;
        setErrorField((prev) => ({
          ...prev,
          ["company_name"]: "Name is required!",
        }));
        setshowError((prev) => ({ ...prev, ["company_name"]: true }));
      }
      console.log("Submit");

      const emailSend = formData.email;
      console.log("emailSend", emailSend)

if(emailSend != ""){
      try {
        // Call the asynchronous function and wait for the result
        const getStatus = submitContactEmail(emailSend)?.then((response) => {
          if (response?.public_domain) {
            setIsEmailFullFilled(true);
            console.log("response?.public_domain", response?.public_domain);
            // console.log("response?.payload?.public_domain",
            //  response?.payload?.public_domain)
          } else {
            if (!checkError && !showError.phonenumber && !showError.email) {
              console.log(formData, "Submit");
              handleClientForm(formData);
              setFormData(intialFormData);
              setSuccess(true);
            }

          }
        });
      } catch (error) {
        console.error(error);
        // Handle errors if needed
      }


    }




      

      
    },
    [formData, showError]
  );

  const emailVerify = useCallback(
    (e) => {
      e.preventDefault();
      console.log("emailVerify", e);
      // let formData = {...e}

      // console.log("Submit", formData);
      let checkError = false;
      const emailSend = formData.email;

      try {
        // Call the asynchronous function and wait for the result
        const getStatus = submitContactEmail(emailSend)?.then((response) => {
          if (response?.public_domain) {
            setIsEmailFullFilled(true);
            console.log("response?.public_domain", response?.public_domain);
            // console.log("response?.payload?.public_domain",
            //  response?.payload?.public_domain)
          } else {
            handleSubmit(formData);
            console.log("response?.public_domain", response?.public_domain);

          }
        });

        // Now you can use getStatus in the rest of your function
        // if (getStatus.public_domain == false) {
        //   setIsEmailFullFilled(true); // Open the Snackbar
        // }else{
        //   handleSubmit(formData);

        // }
        // ... rest of your code using getStatus ...
      } catch (error) {
        console.error(error);
        // Handle errors if needed
      }
    },
    [formData, showError]
  );

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const snackBarHandleClick = () => {
    setSnackBar(true);
  };

  const snackBarHandleClose = () => {
    setSnackBar(false);
  };

  const handleCloseSnackbar = () => {
    setIsEmailFullFilled(false);
  };

  return (
    <Box>
      {/* <Dialog open={open} onClose={handleClose}  style={{ overflowX: 'hidden !important',  minHeight: 0, minWidth: 0 }}
      >
        
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent> */}
      {/* Form Fields */}
      {/* Add your form fields or content here */}
      <Container sx={{ minWidth: "30%" }}>
        <Box
          sx={{
            padding: {
              xs: "7rem 0rem 4rem 0rem",
              sm: "8rem 0rem 5rem 0rem",
              md: "8rem 3rem 8rem 3rem",
            },
          }}
        >
          <Grid container>
            <Grid item sm={2} xl={2}></Grid>
            <Grid item sm={8} xl={8}>
              <Box>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ textAlign: "center", marginBottom: "35px" }}>
                    <Typography variant="client_section_three_heading">
                      Early Access Program
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      margin: {
                        xs: "25px 0px 42px 0px",
                        sm: "20px 0px 35px 0px",
                        xl: "20px 25px 35px 25px",
                      },
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6">
                      We're rolling out an Early Access program with limited
                      spots. We'd love to have you join us as we revolutionize
                      the Tech Hiring landscape.
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography className="form_label">Your name</Typography>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                        InputProps={{ style: inputStyle }}
                        placeholder="Enter your full name"
                        error={showError.name}
                        helperText={errorField.name}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography className="form_label">Work Email</Typography>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        value={formData.email}
                        name="email"
                        type="email"
                        placeholder="Enter Email address"
                        InputProps={{ style: inputStyle }}
                        helperText={errorField.email}
                        error={showError.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="form_label">Company</Typography>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        value={formData.company_name}
                        name="company_name"
                        type="company_name"
                        placeholder="Enter your Company Name"
                        helperText={errorField.company_name}
                        error={showError.company_name}
                        InputProps={{ style: inputStyle }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="form_label">Message</Typography>
                      <TextareaAutosize
                        minRows={6}
                        onChange={handleChange}
                        value={formData.message}
                        name="message"
                        style={{
                          padding: "10px",
                          width: "96%",
                          resize: "none",
                          fontSize: "18px", // Adjust the font size as needed
                          ...inputStyle, // Apply the same style to the textarea
                        }}
                      />
                    </Grid>
                    <Grid>
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          sx={{
                            backgroundColor: "#0D0E10",
                            color: "white",
                            padding: "16px 17px",
                            lineHeight: 0.8,
                            fontSize: {
                              xs: "18px",
                              sm: "20px",
                              md: "20px",
                              lg: "26px",
                            },

                            "&:hover": {
                              backgroundColor: "#0D0E10",
                              color: "white",
                              lineHeight: 0.8,
                              fontSize: {
                                xs: "18px",
                                sm: "20px",
                                md: "22",
                                lg: "26px",
                              },
                            },
                            // width: { sm: "97%", xl: "100%" },
                            marginLeft: "16px",
                            marginTop: "16px",
                          }}
                          onClick={snackBarHandleClick}
                        >
                          Submit
                        </Button>
                      </Box>
                      {success && (
                        <Snackbar
                          open={snackBar}
                          onClose={snackBarHandleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                        >
                          <Alert
                            onClose={snackBarHandleClose}
                            sx={{
                              fontSize: { md: "20px", lg: "22px", xl: "26px" },
                            }}
                          >
                            Thank you for joining the Priority Early Access
                            Waitlist. We will get back to you soon.
                          </Alert>
                        </Snackbar>
                      )}
                      {/* <Snackbar open={snackBar}  onClose={snackBarHandleClose}
              anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'center',
                   }}
              >

              <Alert severity="success" onClose={snackBarHandleClose}
              sx={{fontSize: { md: '20px', lg: '22px', xl: '26px' },
              display: 'flex',
              alignItems: 'center', }}
              >Thank you for joining the Priority Early Access Waitlist. We will get back to you soon.</Alert>
                    </Snackbar>
                )

                } */}
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* </DialogContent>
      </Dialog> */}
      {isEmailFullFilled && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isEmailFullFilled}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          <SnackbarContent
            message="You can not login in Personal email"
            sx={{
              backgroundColor: "white", // Change background color to white
              color: "green", // Change text color to green
              fontSize: { md: "20px", lg: "22px", xl: "26px" },

            }}
          />
        </Snackbar>
      )}
    </Box>
  );
}

waitlist.hideFooter = true;
export default waitlist;
