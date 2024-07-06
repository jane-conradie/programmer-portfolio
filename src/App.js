import "./App.css";

import portrait from "./images/portrait.png";
import portrait_smiling from "./images/portrait_smiling.png";

import { Navbar, Grid, Skills, Footer } from "./components";

import { projects as gameDevelopmentProjects } from "./data/game_development_projects";
import { projects as webDevelopmentProjects } from "./data/web_development_projects";
import { skills } from "./data/skills";

// import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "buildUnity/Sloper/Build/sloper.loader.js",
  //   dataUrl: "buildUnity/Sloper/Build/sloper.data",
  //   frameworkUrl: "buildUnity/Sloper/Build/sloper.framework.js",
  //   codeUrl: "buildUnity/Sloper/Build/sloper.wasm",
  //   webglContextAttributes: {
  //     preserveDrawingBuffer: true,
  //   },
  // });

  return (
    <div className="portfolio">
      <Navbar />
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
      <div className="projects-showcase">
        <div className="game-development">
          <h2 className="header2">Game development</h2>
          <div className="tag-line">
            The following are guided projects that I have made as I have been
            learning game development
          </div>
          <Grid projects={gameDevelopmentProjects} />
        </div>
        <div className="web-development">
          <h2 className="header2">Web development</h2>
          <div className="tag-line">
            The following are projects to showcase my web development skill
          </div>
          <Grid projects={webDevelopmentProjects} />
        </div>
      </div>
      <div className="skills">
        <h2 className="header2">Skills</h2>
        <Skills skills={skills} />
      </div>
      <Footer />
      {/* <div className="grid game">
        <Unity
          unityProvider={unityProvider}
          style={{ width: 800, height: 600 }}
        />
      </div> */}
    </div>
  );
}

export default App;
