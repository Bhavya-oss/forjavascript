import React, { useState,createContext } from "react";


export const MyContext = createContext();

const data = {
  skills: null,
  //user system info
  userSystemInfo:null,
  //show cards in login process
  showCard:"signInCard",
  //storing user information
  userInfo:null,
  //this is otp errorMessage
  otpErrosMessage:null,
  //auth model open or close
  authModel : false,
  //checking is authenticate
  isAuthentication : null
};

function ContextProvider({ children }) {
  const [globalState, setGlobalState] = useState(data);

  return (
    <MyContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
