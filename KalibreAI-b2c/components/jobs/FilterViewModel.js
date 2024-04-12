import {
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
} from "@mui/material";
import React from "react";
import ModelSearchInput from "./ModelSearchInput";
import CloseIcon from "@mui/icons-material/Close";
import { checkArrayLength } from "../GlobalFunction";



function FilterViewModel(props) {
  const {
    openModal,
    handleCloseModal,
    searchQuery,
    setSearchQuery,
    filteredList,
    addNonBreakingSpaces,
    handleListChange,
    selectedFilterList
  } = props;

  return (
    <>
   <Box>
  <div style={{ borderRadius: "20px", }}>
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
        <ModelSearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
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
        <Box sx={{ height: "30rem", columnCount: 4, columnGap: "16px",  }}>
          {checkArrayLength(filteredList) &&
            filteredList?.map((data,index) => {
              addNonBreakingSpaces(data.name);
              return (
                <Box key={index}>
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
              );
            })}
        </Box>
      </DialogContent>
    </Dialog>
  </div>
</Box>
    </>
  );
}

export default FilterViewModel;
