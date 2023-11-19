import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

import img1 from "../../../public/assets/carrossel1.png";
import img2 from "../../../public/assets/carrossel2.png";
import img3 from "../../../public/assets/carrossel3.png";
import img4 from "../../../public/assets/carrossel4.png";


function Carrosel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="container" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} alt="" style={{ width: "100%"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" style={{ width: "100%"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" style={{ width: "100%"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} alt="" style={{ width: "100%"}} />
        
      </Carousel.Item>
    </Carousel>
  ); 
}

export default Carrosel;