import {
  Box,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import api from "../../utils/httpCommons";
import { checkArrayLength } from "../GlobalFunction";

function SearchField(props) {
  const {
    handleSearchClick,
    get,
    setSearQueary,
    isWhichFilterActive,
    setIsWhichFilterActive,
    setSelectedFiltersList,
    intailSelectedFilterList,
    setSelected
  } = props;

  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [previousSearch, setPreviousSearch] = useState(null);

  const suggestionsRef = useRef(null);

  const onChangeSearch = useCallback(
    (text) => {
      setSearch(text);

      if (text?.length >= 2) {
        suggetionApi(text);
      } else {
        setSuggestion([]);
      }
    },
    [search]
  );

  useEffect(() => {
    if (isWhichFilterActive?.isReset) {
      handleClearSearch();
    }
  }, [isWhichFilterActive]);

  // console.log("sssab calling .....", suggestion);

  useEffect(() => {
    if (search === "") {
      handleClearSearch();
      setSuggestion([]);
    }
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        setHoveredIndex((prevIndex) =>
          prevIndex < suggestion.length - 1 ? prevIndex + 1 : 0
        );
      } else if (event.key === "ArrowUp") {
        setHoveredIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : suggestion.length - 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [suggestion]);

  useEffect(() => {
    // Move focus to the selected suggestion when hoveredIndex changes
    if (suggestionsRef.current) {
      const suggestionBoxes =
        suggestionsRef.current.querySelectorAll("[data-index]");
      if (suggestionBoxes && suggestionBoxes.length > 0) {
        suggestionBoxes[hoveredIndex]?.focus();
      }
    }
  }, [hoveredIndex]);

  const handleSubmitSearch = useCallback(
    (data = checkArrayLength(suggestion) && suggestion?.[0]) => {
      console.log("rty search term ====", data);

      if(isWhichFilterActive.filterName == "quick_filter"){
        setSelectedFiltersList(intailSelectedFilterList)
        setSelected(null)
      }
      setIsWhichFilterActive({filterName : "search_bar" ,isReset:false})
      //removing  space and making small case
      let searchTerm = search != "" && search.toLowerCase().replace(/\s/g, "");

      // console.log("making lower case code ====",searchTerm);

      let query = data?.value;
      if (query != undefined) {
        getJobs(query + searchTerm + "*");
        setPreviousSearch(query);
      } else {
        if (previousSearch == null) {
          getJobs("search=" + searchTerm);
        } else {
          getJobs(previousSearch + searchTerm + "*");
        }
      }
    },
    [search, suggestion, previousSearch,isWhichFilterActive]
  );

  const suggetionApi = async (term) => {
    try {
      const response = await api("search/suggestjobs/" + term);
      const result = response.data;

      setSuggestion(result);
    } catch (erorr) {
      console.log(erorr);
      setSuggestion([]);
    }
  };

  const getJobs = (url) => {
    // get("search/b2cjobs/?" + url);
    console.log("wer ===", url);
    setSearQueary(url);
    setSuggestion([]);
  };

  const handleClearSearch = () => {
    setSearch("");
    setSuggestion([]);
    getJobs("");
  };

  const dropdownHeight = suggestion?.length >= 5 ? "14rem" : "auto";

  return (
    <>
      <TextField
        placeholder="Search by roles, skills, companies, locations..."
        onClick={handleSearchClick}
        value={search}
        onChange={(e) => {
          onChangeSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmitSearch();
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {search && (
                <IconButton onClick={handleClearSearch}>
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        sx={{
          width: {
            xs: "93%",
            sm: "77%",
            md: "67%",
            xl: "67%",
          },
          background: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "20px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
        size="large"
      />

      <Box
        ref={suggestionsRef}
        sx={{
          marginLeft: {
            xs: "6%",
            sm: "12%",
            md: "17%",
            lg: "15rem",
            xl: "18.4rem",
          },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          borderRadius: "10px",
          width: { xs: "79%", sm: "69.3%", md: "60%", lg: "20%", xl: "20%" },
          zIndex: 1,
          position: "absolute",
          background: "#fff",
          height: dropdownHeight,
          overflowX: "auto",
        }}
      >
        {checkArrayLength(suggestion) && search != "" && (
          <Box sx={{ textAlign: "left" }}>
            {suggestion.map((data, index) => {
              return (
                <Box
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  // tabIndex="0" // Add this tabIndex to make the Box focusable
                  onFocus={() => setHoveredIndex(index)} // Update hoveredIndex when focused
                  onClick={() => {
                    handleSubmitSearch(data), setHoveredIndex(-1);
                  }}
                  sx={{
                    fontSize: "20px",
                    display: "flex",
                    padding: "8px 15px",
                    alignItems: "baseline",
                    background:
                      hoveredIndex === index ||
                      (hoveredIndex === -1 && index === 0)
                        ? "#EFEFEF"
                        : "transparent",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}
                  >
                    {search} .
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "10px", md: "12px" },
                      color: "#8C8C8C",
                    }}
                  >
                    {data.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
}

export default SearchField;
