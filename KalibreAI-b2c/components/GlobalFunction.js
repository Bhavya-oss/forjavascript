import moment from "moment";
import { DEFAULT_COMPANY_IMAGE } from "./constants/ImagesLink";

//checking array lenght and return true or false
export const checkArrayLength = (array) => {
  if (array?.length > 0) {
    return true;
  } else {
    return false;
  }
};

//checking object lenght and return true or false
export const checkObjectLength = (object) => {
  return Object.keys(object).length != 0;
};

// formatting the experiance
export const getformateExperiance = (min, max) => {
  if (min != undefined && max != undefined) {
    // Remove the decimal part if it ends with zero
    const maxExp = max % 1 === 0 ? Math.floor(max) : max;
    const minExp = min % 1 === 0 ? Math.floor(min) : min;

    return `${minExp} - ${maxExp}`;
  }
};

// checking is link is valid link
export const isValidLink = async (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// getting the  diffrence  based on current date
export const getDiffrenceInDate = (date) => {
  if (date != undefined) {
    const today = moment();
    const postedOn = moment(date, "YYYY-MM-DD");
    const diffInDays = today.diff(postedOn, "days");

    if (diffInDays === 0) {
      return "today";
    } else if (diffInDays === 1) {
      return "1 day ";
    } else if (diffInDays === 2) {
      return "2 days ";
    } else if (diffInDays <= 30) {
      return `${diffInDays} days`;
    } else if (diffInDays <= 365) {
      const diffInMonths = Math.floor(diffInDays / 30);
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
    } else {
      const diffInYears = Math.floor(diffInDays / 365);
      return `${diffInYears} year${diffInYears > 1 ? "s" : ""}`;
    }
  }
};

//get skill names
// export const getSkillName = (totalList, valueList) => {
//   const list = [];

//   if (checkArrayLength(totalList) && checkArrayLength(valueList)) {
//     totalList?.forEach((data) => {
//       let flag = false;

//       valueList?.forEach((info) => {
//         if (info === data.value) {
//           flag = true;
//         }
//       });

//       if (flag) {
//         list.push(data.name);
//       }
//     });
//   }

//   return list;
// };


//pageManupaletion 
export const convertToHttps = (url) => {
  if (url.startsWith("http://")) {
    return url.replace("http://", "https://");
  }
  return url;
}

