import "./Intro.scss";

import { ArrowDownward } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Full Stack", "Backend", "Software"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="src\assets\me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I am</h2>
          <h1>Yevgeni Karpilovsky</h1>
          <div className="job-wrapper">
            <h3 ref={textRef}> </h3>
          </div>
          <span>Developer</span>
        </div>
        <a href="#portfolio">
          <ArrowDownward className="arrow-down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
