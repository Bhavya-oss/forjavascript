import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function HideOnScroll(props) {
  const { children, window } = props;
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true, // Prevents a delay in hiding the AppBar
    threshold: 0, // Triggers the effect immediately on scroll
  });

  useEffect(() => {
    // When the trigger state changes, update the shouldHide state based on scroll direction
    if (prevScrollY > trigger) {
      setShouldHide(true);
    } else {
      setShouldHide(false);
    }

    // Update the previous scroll position
    setPrevScrollY(trigger);
  }, [prevScrollY, trigger]);

  return (
    <Slide appear={false} direction={shouldHide ? "up" : "down"} in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HideOnScroll;
