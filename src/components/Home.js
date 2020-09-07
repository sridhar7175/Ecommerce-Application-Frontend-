import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Home = () => {
  const slideImages = ["images/1.webp", "images/2.jpg", "images/3.jpeg"];
  return (
    <div>
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                width: "100%",
                height: "500px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[1]})`,
                width: "100%",
                height: "500px",
                width: "100%",
                height: "500px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[2]})`,
                width: "100%",
                height: "500px",
                width: "100%",
                height: "500px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
