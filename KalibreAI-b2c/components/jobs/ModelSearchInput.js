import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import React, {useState, useEffect} from 'react'
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

function ModelSearchInput(props) {
  const {searchQuery,setSearchQuery} = props
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search === "") {
      handleClearSearch();
    }
  }, [search]);

 const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearch("");
   
  };

  const CustomTextField = styled(TextField)(({ theme }) => ({
    borderRadius: '20px',
  }));

  return (
    <>
  <TextField
  size="small"
  placeholder="Search here..."
  value={searchQuery}
  onChange={handleSearchChange}
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
          <CloseIcon />
        </IconButton>
        )}
      </InputAdornment>
    ),
  }}
  sx={{
    border: "2px solid rgba(47, 43, 67, 0.10)",
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
    marginTop:{xs:"45px", sm:"0px"}
    // width:{xs:"265px", sm:"335px"}
  }}
/>
    </>
  )
}

export default ModelSearchInput