import "./Works.scss";

import { Work } from "@material-ui/icons";

import { projectsData } from "../../projects-data";
import { useState } from "react";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlide(
        currentSlide > 0 ? currentSlide - 1 : projectsData.length - 1
      );
    } else {
      setCurrentSlide(
        currentSlide < projectsData.length - 1 ? currentSlide + 1 : 0
      );
    }
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projectsData.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc} </p>
                </div>
              </div>
              <div className="right">
                <img src="src/assets/techs.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="src/assets/left.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="src/assets/left.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
