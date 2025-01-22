import React from "react";
import "../app.css";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import pic4 from "../img/pic4.png";
import pic5 from "../img/pic5.png";
import pic6 from "../img/pic6.png";
import pic7 from "../img/pic7.png";
import pic8 from "../img/pic8.png";
import pic9 from "../img/pic9.png";
import pic10 from "../img/pic10.png";
import pic11 from "../img/pic11.png";
import pic12 from "../img/pic12.png";
import pic13 from "../img/pic13.png";
import pic14 from "../img/pic14.png";
import pic15 from "../img/pic15.png";
import pic16 from "../img/pic16.png";
import pic17 from "../img/pic17.png";
import pic18 from "../img/pic18.png";
import pic19 from "../img/pic19.png";
import pic20 from "../img/pic20.png";
import pic21 from "../img/pic21.png";
import pic22 from "../img/pic22.png";
import pic23 from "../img/pic23.png";
import pic24 from "../img/pic24.png";



const Gallery = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24];
  return (
    <div className="gallery-container">
       <div className="gallery-image"></div>
      <div className="gallery-text">
        <h1>GALLERY</h1>
      </div>
      <div className="pictures-grid">
        {images.map((image, index) => (
          <div key={index} className="picture">
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
