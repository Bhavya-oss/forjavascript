import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DEFAULT_COMPANY_IMAGE } from "../constants/ImagesLink";
import { isValidLink } from "../GlobalFunction";

function AvatarImage(props) {
  const { style, url, altName, shape } = props;

  const [validImage, setValidImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const isValid = await isValidLink(url);
      if (isValid) {
        setValidImage(url);
      } else {
        setValidImage(DEFAULT_COMPANY_IMAGE);
      }
    };

    fetchImage();
  }, [url]);



  return (
    <>
      <img
        style={{...style}}
        src={validImage}
        // variant={shape}
        // alt={altName}
      />
    </>
  );
}

export default AvatarImage;
