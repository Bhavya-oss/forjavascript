import api from "../utils/httpCommons";



//send phone number to backend
export const sendPhoneNumber = async (postData) => {
  try {
    const response = await api.post("auth/signinup/code", postData);
    const result = await response.data;
    // console.log("asd result in async ", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//cheking phonenumber already exist or not
export const isExistPhoneNumber = async (postData) => {
  try {
    const response = await api.get(
      "supertoken/checkphonenumberexist/" + postData
    );
    const result = await response.data;
    // console.log("result in async ", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//resend the phonenumber to backend
export const resendPhoneNumber = async (postData) => {
  try {
    const response = await api.post("auth/signinup/code/resend", postData);
    const result = response.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//send the otp to backend
export const otpSubmit = async (postData) => {
  try {
    const response = await api.post("auth/signinup/code/consume", postData);
    const result = response.data;

    return result;
  } catch (error) {
    console.log(error);
  }
};

// otp response manupulation
export const otpValidation = (result, setstate) => {
  if (result?.status == "OK") {
    const info = {
      isAuth: true,
      role: result.role[0],
    };

    localStorage.setItem("info", JSON.stringify(info));
    setstate((prev) => {
      return {
        ...prev,
        ["userInfo"]: result,
        ["showCard"]: "successCard",
        ["isAuthentication"]: info,
      };
    });

    setstate((prev) => {
      return {
        ...prev,
      };
    });
  } else {
    if (result?.status === "INCORRECT_USER_INPUT_CODE_ERROR") {
      setstate((prev) => {
        return {
          ...prev,
          ["otpErrosMessage"]:
            "Wrong OTP! Please try again,Number of attempts left :" +
            (result?.maximumCodeInputAttempts -
              result?.failedCodeInputAttemptCount),
        };
      });
    } else if (result?.status === "EXPIRED_USER_INPUT_CODE_ERROR") {
      setstate((prev) => {
        return {
          ...prev,
          ["otpErrosMessage"]: "Invalid OTP. Generate a new one and retry",
        };
      });
    } else {
      setstate((prev) => {
        return {
          ...prev,
          ["otpErrosMessage"]: "Login failed. Please try again",
        };
      });
    }
  }
};

//log out function
export const signOut = async (postData, setstate) => {
  try {
    const response = await api.post("auth/signout", postData);
    const result = response.data;

    localStorage.removeItem("info");
    setstate((prev) => {
      return {
        ...prev,
        ["isAuthentication"]: null,
      };
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

//get employer data
export const getEmployerInfo = async (value) => {
  try {
    const data = "/employers/get/" + value;
    const response = await api.get(data);
    const result = response.data;
    return result;
  } catch (erorr) {
    console.log(erorr);
  }
};

//get flag , it takes country code "IN" like this
export const getFlagEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

//contact info  submition
export const submitContactUs = async (data) => {
  console.log("data ====", data);

  try {
    const response = await api.post("b2c/contactus", data);
    const result = response.data;
    return result;
  } catch (erorr) {
    console.log(erorr);
  }
};

//this function accept two array  and return  unique array
export const getUniqueArray = (array1, array2) => {
  const combinedArray = array1.concat(array2);

  const uniqueArray = combinedArray.filter((item, index) => {
    return combinedArray.indexOf(item) === index;
  });

  return uniqueArray;
};

export async function handleClientForm(data) {
  console.log("data ====", data);

  try {
    const response = await api.post("client/earlyaccessprogram", data);
    const result = response.data;
    return result;
  } catch (erorr) {
    console.log(erorr);
  }
}


//get for candidate techskills logos
export const getTechSkills = async () => {
  console.log("dceu check in the useeffect getTechSkills", )

  try {
    const data = `b2c/skillslogo`
    const response = await api.get(data);
    console.log("dceu check in the useeffect", response)

    // console.log("dceu check in the useeffect",response )

   return response.data;
  } catch (error) {
    console.log("dceu check in the useeffect", error)

    console.log(error);
  }
};


export const getJobCountEmployer = async () => {
  // console.log("getJobCountEmployer")

  try {
    const data = `search/jobscountwrtempployer/`
    const response = await api.get(data);
    // console.log("dceu check in the useeffect getJobCountEmployer", response)

    // console.log("dceu check in the useeffect",response )

   return response.data;
  } catch (error) {
    // console.log("dceu check in the useeffect", error)

    console.log(error);
  }
};








export const getCompanyCategory = async () => {
  console.log("getCompanyCategory")

  try {
    const data = `search/companycategory/`
    const response = await api.get(data);
    console.log("dceu check in the useeffect getCompanyCategory", data)

    // console.log("dceu check in the useeffect",response )

   return response.data;
  } catch (error) {
    // console.log("dceu check in the useeffect", error)

    console.log(error);
  }
};

export const getEmployerUnicorn = async (data) => {
  console.log("getEmployerUnicorn", getEmployerUnicorn)

  try {
    const data = `search/employers/?valuation__in=unicorn`
    const response = await api.get(data);
    console.log("bahubali", data.name)

    // console.log("dceu check in the useeffect",response )

   return response.data;
  } catch (error) {
    // console.log("dceu check in the useeffect", error)

    console.log(error);
  }
};


