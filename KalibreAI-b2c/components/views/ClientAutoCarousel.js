import React ,{useState, useEffect} from 'react'
import { checkArrayLength } from '../GlobalFunction';
import { Box } from '@mui/material';
function ClientAutoCarousel(props) {
    const {image_carousel} = props;
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      let list = addElementsToArray(image_carousel);
      setImages(list);
    }, []);
  
    const addElementsToArray = (arr) => {
      return [...arr, ...arr, ...arr];
    };
  
    return (
      <>
        <Box className="carousel_container">
          <Box className="client_slide_container_left"
            
          >
            {checkArrayLength(image_carousel) &&
              image_carousel?.map((data, idx) => {
                return (
                  <Box key={idx} className="content">
                    <img src={data}/>
  
                  </Box>
                );
              })}
          </Box>
        </Box>
      </>
    );
}

export default ClientAutoCarousel