import React, { useState, useEffect, useCallback } from "react";
import api from "../../utils/httpCommons";
import { checkArrayLength, createList } from "../GlobalFunction";
import {
  Box,
  Button,
  FormControlLabel,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import ModelSearchInput from "./ModelSearchInput";
import FilterViewModel from "./FilterViewModel";

function FilterView(props) {
  const {
    name,
    endpoint,
    multiselect,
    value,
    show_more,
    datalist,
    selectedFilterList,
    setSelectedFiltersList,
    count,
    setSelected,
    intailSelectedFilterList,
    isWhichFilterActive,
    setIsWhichFilterActive,
  } = props;

  const [list, setList] = useState(datalist);
  // const [selectedListItems, setSelectedListItems] = useState([]);
  const [showAllList, setShowAllList] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // console.log("checking data list =====",datalist);

  // useEffect(() => {
  //   fetchList();
  // }, []);

  const fetchList = async () => {
    try {
      const response = await api.get(endpoint);
      const result = response.data;

      // console.log("checking data list inside function =====", result);

      setList(result.results);
    } catch (error) {
      console.log(error);
      setList([]);
    }
  };

  const handleListChange = useCallback(
    (event) => {
      let copyList = [...list];

      const selectedListValue = event.target.value;

      if (isWhichFilterActive?.filterName == "quick_filter") {
        setSelectedFiltersList(intailSelectedFilterList);
        setSelected(null);
      }
      setIsWhichFilterActive({ filterName: "side_filters", isReset: false });
      // console.log("debug before select ===",selectedListValue)

      if (show_more) {
        if (event.target.checked) {
          let index;
          let listObj;
          checkArrayLength(copyList) &&
            copyList?.map((role, idx) => {
              if (selectedListValue === role?.value) {
                index = idx;
                listObj = role;
              }
            });

          copyList?.splice(index, 1);
          copyList?.unshift(listObj);

          setList(copyList);
        }
      }
      setSelectedFiltersList((prev) => {
        const tempData = prev;
        let tempArray = tempData?.[value];

        // console.log("qwe prev selected before arrat ===", tempArray);

        if (multiselect) {
          if (tempArray?.includes(selectedListValue)) {
            tempArray = tempArray?.filter((list) => list != selectedListValue);
          } else {
            tempArray = [...tempArray, selectedListValue];
          }
        } else {
          if (tempArray?.includes(selectedListValue)) {
            tempArray = tempArray?.filter((list) => list != selectedListValue);
          } else {
            tempArray = [selectedListValue];
          }
        }

        return {
          ...prev,
          [value]: tempArray,
        };
      });
    },
    [isWhichFilterActive,list]
  );

  const handleOpenModal = () => {
    fetchList();
    setSearchQuery("");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // const visibleList = showAllList ? list : list?.slice(0, count);

  const visibleList = showAllList
    ? list
    : Array?.isArray(list)
    ? list?.slice(0, count)
    : [];

  const filteredList =
    Array?.isArray(list) &&
    list?.filter((data) => {
      return (
        data?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        data?.description
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()) ||
        data?.value?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    });

  const addNonBreakingSpaces = (text) => {
    const spaceSeparatedText = text?.replace(/ /g, "\u00a0");
    return spaceSeparatedText;
  };

  return (
    <>
      <Typography sx={{ margin: "1% 0", fontWeight: "900" }} variant="h6 ">
        {name}
      </Typography>

      <Box>
        {checkArrayLength(list) &&
          visibleList?.map((data, idx) => (
            <Box key={idx}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleListChange}
                    style={{
                      color: selectedFilterList?.includes(data?.value)
                        ? "#0D0E10"
                        : null,
                    }}
                  />
                }
                label={data?.name}
                value={data?.value}
                checked={selectedFilterList?.includes(data?.value)}
              />
            </Box>
          ))}

        {show_more && (
          <Button
            onClick={handleOpenModal}
            variant="text"
            size="small"
            sx={{ textTransform: "none" }}
          >
            {showAllList ? "Show less" : "Show more"}
          </Button>
        )}
      </Box>

      <FilterViewModel
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredList={filteredList}
        addNonBreakingSpaces={addNonBreakingSpaces}
        handleListChange={handleListChange}
        selectedFilterList={selectedFilterList}
      />
    </>
  );
}

export default FilterView;
