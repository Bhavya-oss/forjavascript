import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ModelSearchInput from "./ModelSearchInput";
import { checkArrayLength } from "../GlobalFunction";
import { CheckBox } from "@mui/icons-material";
import api from "../../utils/httpCommons";
import FilterSlider from "../FilterSlider";

function FiltersList(props) {
  const {
    endpoint,
    datalist,
    selectedFilterList,
    name,
    addNonBreakingSpaces,
    count,
    show_more,
    multiselect,
    setSelectedFiltersList,
    value,
    modelContentShow,
    id,
    setIsWhichFilterActive,
    isWhichFilterActive,
    intailSelectedFilterList,
    setSelected,
    checkedChip,
    setCheckedChip,
  } = props;

  const [list, setList] = useState(datalist);
  const [showAllList, setShowAllList] = useState(false);

  // useEffect(() => {
  //   fetchList();
  // }, []);

  // console.log("awd  checking model id ===", value);

  const fetchList = async () => {
    setShowAllList(!showAllList);
    try {
      const response = await api.get(endpoint);
      const result = response.data;
      setList(result?.results);
      // console.log("zaq result ===", result);
    } catch (error) {
      console.log(error);
      setList([]);
    }
  };

  const visibleList = showAllList
    ? list
    : Array.isArray(list)
    ? list.slice(0, count)
    : [];

  const handleListChange = useCallback(
    (event) => {
      let copyList = [...list];

      const selectedListValue = event.target.value;

      if (isWhichFilterActive.filterName == "quick_filter") {
        setSelectedFiltersList(intailSelectedFilterList);
        setSelected(null);
      }
      setIsWhichFilterActive({ filterName: "side_filters", isReset: false });

      // console.log("debug before select ===",selectedListValue)

      // if (multiselect) {
      //   if (event.target.checked) {
      //     let index;
      //     let listObj;
      //     checkArrayLength(copyList) &&
      //       copyList?.map((role, idx) => {
      //         if (selectedListValue === role.value) {
      //           index = idx;
      //           listObj = role;
      //         }
      //       });

      //     copyList.splice(index, 1);
      //     copyList.unshift(listObj);

      //     setList(copyList);
      //   }
      // }

      setSelectedFiltersList((previousData) => {
        const tempData = previousData;
        let tempArray = tempData?.[value];
        console.log("qwe prev selected before arrat ===", tempArray);

        if (multiselect) {
          if (tempArray?.includes(selectedListValue)) {
            tempArray = tempArray?.filter((list) => list != selectedListValue);
            setCheckedChip((prev) =>
              tempArray?.length === 0
                ? prev.filter((item) => item !== value)
                : [...prev]
            );
          } else {
            setCheckedChip((prev) =>
              prev.includes(value) ? prev : [...prev, value]
            );

            tempArray = [...tempArray, selectedListValue];
          }
        } else {
          if (tempArray?.includes(selectedListValue)) {
            tempArray = tempArray?.filter((list) => list != selectedListValue);
            setCheckedChip((prev) => prev.filter((item) => item !== value));
          } else {
            setCheckedChip((prev) =>
              prev?.includes(value) ? [...prev] : [...prev, value]
            );
            tempArray = [selectedListValue];
          }
        }

        return {
          ...previousData,
          [value]: tempArray,
        };
      });
    },
    [list, isWhichFilterActive]
  );

  return (
    <>
      <Box id={id} ref={(ref) => (modelContentShow.current[id] = ref)}>
        <Typography
          sx={{
            fontWeight: { xs: "550", sm: "600", md: "900" },
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "16px" },
            marginTop: "2rem",
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            columnGap: "16px",
            columnCount: { xs: 1, sm: 2 },
            marginBottom:"8px",
            // marginBottom: "2rem",
          }}
        >
          {checkArrayLength(list) &&
            visibleList?.map((data, idx) => (
              <Box key={idx}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleListChange}
                      style={{
                        color: selectedFilterList?.includes(data.value)
                          ? "#0D0E10"
                          : null,
                      }}
                    />
                  }
                  label={data.name}
                  value={data.value}
                  checked={selectedFilterList?.includes(data.value)}
                />
              </Box>
            ))}
        </Box>
      </Box>
      {show_more && (
        <Button
          onClick={fetchList}
          variant="outlined"
          size="small"
          sx={{ textTransform: "none", backgroundColor:"black" ,
          "&:hover": {
            borderColor: "black",
          },
        }}
        >
          {showAllList ? "Show less" : "Show more"}
        </Button>
      )}
    </>
  );
}

function TabViewModel(props) {
  const {
    openModal,
    handleCloseModal,
    searchQuery,
    setSearchQuery,
    filters,
    selectedFiltersList,
    addNonBreakingSpaces,
    setSelectedFiltersList,
    modelContentShow,
    showButton,
    setSliderstatus,
    intailSelectedFilterList,
    setSelected,
    sliderStatus,
    setIsWhichFilterActive,
    isWhichFilterActive,
    checkedChip,
    setCheckedChip,
  } = props;

  // console.log("test side developer ===", filters);
  // console.log("test side developer ===", selectedFiltersList);

  return (
    <>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "20px",
          },
        }}
      >
        <DialogTitle>
          {/* <ModelSearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          /> */}

          <Box
            sx={{
              marginTop: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "1em",
            }}
          >
            <Typography variant="h5">Filters</Typography>

            {showButton && (
              <Button
                variant="text"
                onClick={() => {
                  setSliderstatus(true);
                  setSelectedFiltersList(intailSelectedFilterList);
                  setSelected(null);
                  setCheckedChip([]);
                }}
              >
                clear
              </Button>
            )}
          </Box>

          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "gray",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box sx={{ marginTop: "36px" }}>
            {checkArrayLength(filters) &&
              filters?.map((data, idx) => {
                if (data?.type != "slider") {
                  return (
                    <Box key={idx}>
                      <FiltersList
                        {...data}
                        addNonBreakingSpaces={addNonBreakingSpaces}
                        selectedFilterList={selectedFiltersList?.[data?.value]}
                        setSelectedFiltersList={setSelectedFiltersList}
                        modelContentShow={modelContentShow}
                        setIsWhichFilterActive={setIsWhichFilterActive}
                        isWhichFilterActive={isWhichFilterActive}
                        intailSelectedFilterList={intailSelectedFilterList}
                        setSelected={setSelected}
                        checkedChip={checkedChip}
                        setCheckedChip={setCheckedChip}
                      />
                    </Box>
                  );
                } else {
                  return (
                    <Box key={idx} sx={{ marginTop: "2rem" }}>
                      <FilterSlider
                        {...data?.slider_data}
                        setSelectedFiltersList={setSelectedFiltersList}
                        modelContentShow={modelContentShow}
                        sliderStatus={sliderStatus}
                        setSliderstatus={setSliderstatus}
                        id={data.id}
                      />
                    </Box>
                  );
                }
              })}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TabViewModel;
