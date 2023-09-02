import "./Topbar.scss";

import { Person, Mail } from "@material-ui/icons";

const Topbar = (props) => {
  const onHamburgerClick = () => {
    props.setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            V
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>0524368823</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jeanya12@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={onHamburgerClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
