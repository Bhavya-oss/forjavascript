import React from 'react';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useScrollTrigger, Zoom } from '@mui/material';

const ScrollToTopButton = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <ScrollToTopButton onClick={handleClick} role="presentation">
        <Fab color="#FBFCFC" size="small" aria-label="scroll-to-top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTopButton>
    </Zoom>
  );
};

export default ScrollToTop;