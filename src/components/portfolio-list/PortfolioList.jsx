import { useState } from "react";

import "./PortfolioList.scss";

const PortfolioList = (props) => {
  const onProjectHandleClick = () => {
    props.setActiveProjectId(props.id);
  };

  return (
    <li
      className={
        props.activeProjectId ? "portfolio-list active" : "portfolio-list"
      }
      onClick={onProjectHandleClick}
    >
      {props.title}
    </li>
  );
};

export default PortfolioList;
