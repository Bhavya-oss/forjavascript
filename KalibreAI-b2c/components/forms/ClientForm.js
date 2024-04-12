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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon
import { handleClientForm } from "../ApiCalls";
// import { handleClientForm } from "../ApiCalls";

function ClientForm(props) {
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
  const [showError, setshowError] = useState({
    name: "",
    email: "",
    company_name:"",
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
      console.log("Submit", formData);
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
        setErrorField((prev) => ({ ...prev, ["company_name"]: "Name is required!" }));
        setshowError((prev) => ({ ...prev, ["company_name"]: true }));
      }
      console.log("Submit");

      if (!checkError && !showError.phonenumber && !showError.email) {
        console.log(formData, "Submit");
        handleClientForm(formData);
        setFormData(intialFormData);
        setSuccess(true);
      }
    },
    [formData, showError]
  );
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const snackBarHandleClick = () => {
    setSnackBar(true);
  };

  const snackBarHandleClose = () => {
  

    setSnackBar(false);
  };


  return (
    <Box>
        
      <Dialog open={open} onClose={handleClose}  style={{ overflowX: 'hidden !important',  minHeight: 0, minWidth: 0 }}
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
        <DialogContent>
          {/* Form Fields */}
          {/* Add your form fields or content here */}
          <form onSubmit={handleSubmit}>
            <Typography variant="h4">Early Access Program</Typography>

            <Box sx={{ margin: "20px 0px" }}>
              <Typography>
                We're rolling out an Early Access program with limited spots.
                We'd love to have you join us as we revolutionize the Tech
                Hiring landscape.
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
                    padding:"10px",
                    width: "96%",
                    resize: "none",
                    fontSize: "18px", // Adjust the font size as needed
                    ...inputStyle, // Apply the same style to the textarea
                  }}
                />
              </Grid>
              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#0D0E10",
                    color: "white",
                    padding: "16px 17px",
                    lineHeight:0.8,

                    "&:hover": {
                      backgroundColor: "#0D0E10",
                      color: "white",
                      lineHeight:0.8,

                    },
                    // width: { sm: "97%", xl: "100%" },
                    marginLeft: "16px",
                    marginTop: "16px",
                  }}
                  onClick={snackBarHandleClick}
                >
                  Submit
                </Button>

                {success && (
                 <Snackbar
                 open={snackBar}
                 autoHideDuration={6000}
                 onClose={snackBarHandleClose}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'center',
                 }}
               >
                 <SnackbarContent
                   message="Thank you for joining the Priority Early Access Waitlist. We will get back to you soon."
                   style={{
                     backgroundColor: 'white', // Change background color to white
                     color: 'green', // Change text color to green
                   }}
                 />
               </Snackbar>
                )

                }
                {/* {success && (
                  <Typography
                    sx={{
                      color: "green",
                      fontSize: { sm: "18px", md: "23px" },
                      marginTop: { sm: "15px", xs: "4px" },
                      //   marginLeft: {sm:"8rem",xl:"7rem"},
                    }}
                  >
                    Thank you for joining the Priority Early Access Waitlist. We
                    will get back to you soon.
                  </Typography>
                )} */}
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ClientForm;
