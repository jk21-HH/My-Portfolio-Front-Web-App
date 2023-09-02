import { useEffect, useState } from "react";
import PortfolioList from "../portfolio-list/portfolioList";

import "./Portfolio.scss";

import { projects } from "./../../data";

const Portfolio = () => {
  const projectList = [
    {
      id: 1,
      title: "pj1",
    },
    {
      id: 2,
      title: "pj2",
    },
    {
      id: 3,
      title: "pj3",
    },
    {
      id: 4,
      title: "pj4",
    },
    {
      id: 5,
      title: "pj5",
    },
    {
      id: 6,
      title: "pj6",
    },
  ];

  const [activeProjectId, setActiveProjectId] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projects[activeProjectId - 1]);
  }, [activeProjectId]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {projectList.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            activeProjectId={activeProjectId === item.id}
            setActiveProjectId={setActiveProjectId}
          />
        ))}
      </ul>

      <div className="container">
        <div className="item">
          <img src={data.img} alt="" />
          <h3>{data.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
