import { useState } from "react";

import "./App.scss";

import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar.jsx";

import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Milstones from "./components/milstones/Milstones.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Milstones /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
