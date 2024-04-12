import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const VerticalProgressBar = () => {
  const totalSections = 3;
  const sectionDuration = 1000; 
  const [activeSection, setActiveSection] = useState(1);
  const [sectionFillHeight, setSectionFillHeight] = useState(0); 
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let progressInterval;
    if (!isPaused) {
      progressInterval = setInterval(() => {
        console.log("progressInterval", progressInterval)

        setSectionFillHeight(prevHeight => {
          if (prevHeight < 100) {
            console.log("progressInterval", prevHeight)

            return prevHeight + 1; 
          } else {
            setActiveSection(prevSection => prevSection < totalSections ? prevSection + 1 : 1);
            return 0; 
          }
        });
      }, sectionDuration / 40); 
    }

    return () => clearInterval(progressInterval);
  }, [isPaused, activeSection]);

  const handleSectionClick = (sectionNumber) => {
    setIsPaused(false);
    setActiveSection(sectionNumber);
    setSectionFillHeight(0); 
  };

  return (
    <Box sx={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center" }}>
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ width: '18px', height: '550px', display: 'flex', flexDirection: 'column', background: "gray", borderRadius:"15px" }}
      >
        {Array.from({ length: totalSections }, (_, i) => i + 1).map(sectionNumber => (
          <div
            key={sectionNumber}
            onClick={() => handleSectionClick(sectionNumber)}
            style={{
              height: '183.3px',
              backgroundColor: 'transparent',
              position: 'relative',
            }}
          >
            {activeSection === sectionNumber && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0, // Change to bottom
                height: `${sectionFillHeight}%`,
                backgroundColor: '#0255DC',
                borderRadius:"15px",
              }}></div>
            )}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default VerticalProgressBar;