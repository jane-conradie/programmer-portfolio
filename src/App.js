import "./App.css";

import portrait from "./images/portrait.png";
import portrait_smiling from "./images/portrait_smiling.png";

function App() {
  var projects = [
    {
      projectNumber: 1,
      imageSource: require("./images/project1.png"),
      name: "",
      description: "",
    },
    {
      projectNumber: 2,
      imageSource: require("./images/project1.png"),
      name: "",
      description: "",
    },
    {
      projectNumber: 3,
      imageSource: require("./images/project1.png"),
      name: "",
      description: "",
    },
    {
      projectNumber: 4,
      imageSource: require("./images/project1.png"),
      name: "",
      description: "",
    },
    {
      projectNumber: 5,
      imageSource: require("./images/project1.png"),
      name: "",
      description: "",
    },
  ];

  return (
    <div className="portfolio">
      <div className="intro-grid grid">
        <div className="intro-block">
          <div className="info">
            <h1 className="intro-heading header">Hi!</h1>
            <div>
              I’m <b>Jané Conradie</b>, a programmer with a passion in coding
              games, and websites.
            </div>
          </div>
          <div className="portrait">
            <img
              src={portrait}
              onMouseOver={(e) => (e.currentTarget.src = portrait_smiling)}
              onMouseOut={(e) => (e.currentTarget.src = portrait)}
            />
          </div>
        </div>
      </div>
      <div className="game-dev-grid grid">
        <div className="info">
          <h2 className="header2">Game development</h2>
          <div className="tag-line">
            The following are guided projects that I have made as I have been
            learning game development
          </div>
          <div className="showcase-grid">
            {projects.map((element) => {
              return (
                <div className={"project" + element.projectNumber}>
                  <img src={element.imageSource} />
                  {/* thumbnail
            below shows on hover
            project name
            description */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
