import React, { useCallback, useEffect, useState } from "react";
import {
  TextField,
  TextareaAutosize,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { submitContactUs } from "../ApiCalls";

const intialFormData = {
  name: "",
  phonenumber: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(intialFormData);

  const [errorField, setErrorField] = useState(intialFormData);

  const [showError, setshowError] = useState({
    name: false,
    phonenumber: false,
    email: false,
  });

  const [success, setSuccess] = useState(false);

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

    if (name === "phonenumber") {
      const phonenumberRegex = /^\d{10}$/;
      if (!phonenumberRegex.test(value)) {
        setErrorField((prev) => ({
          ...prev,
          phonenumber: "Phone number should be 10 digits",
        }));
        setshowError((prev) => ({ ...prev, phonenumber: true }));
      }
    }

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

      if (!checkError && !showError.phonenumber && !showError.email) {
        // console.log(formData);
        submitContactUs(formData)
        setFormData(intialFormData);
        setSuccess(true);
      }
    },
    [formData, showError]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className="form_label">Your name</Typography>
          <TextField
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            error={showError.name}
            helperText={errorField.name}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className="form_label">Phone number</Typography>
          <TextField
            fullWidth
            name="phonenumber"
            placeholder="Enter your phone number"
            value={formData.phonenumber}
            onChange={handleChange}
            helperText={errorField.phonenumber}
            error={showError.phonenumber}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className="form_label">Email address</Typography>
          <TextField
            fullWidth
            name="email"
            type="email"
            placeholder="Enter your Email address"
            value={formData.email}
            onChange={handleChange}
            helperText={errorField.email}
            error={showError.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className="form_label">Message</Typography>
          <TextareaAutosize
            minRows={10}
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", resize: "none" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#0D0E10",
              color: "white",
              padding: "16px 17px",
              "&:hover": {
                backgroundColor: "#0D0E10",
                color: "white",
              },
              width: {sm:"97%", xl:"100%"},
            }}
          >
            Submit
          </Button>
        </Grid>
       {success && (
          <Typography
            sx={{
              color: "green",
              fontSize: {sm:"18px", md:"23px"},
              marginTop:{ sm:"15px", xs:"4px"},
              marginLeft: {sm:"8rem",xl:"7rem"},
            }}
          >
            Successfully Submited
          </Typography>
      )}  
      </Grid>
    </form>
  );
};

export default ContactForm;
