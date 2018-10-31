import React, { Component } from "react";
import "./App.css";
import PicPlusSkills from "./Components/PicPlusSkills.jsx";
import GeneralData from "./Components/GeneralData.jsx";
import NavBarTop from "./Components/NavBarTop.jsx";

//import skill from "./Components/PicPlusSkills.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBarTop />
        <div className="App">
          <PicPlusSkills />
          <GeneralData />
        </div>
      </div>
    );
  }
}

export default App;
