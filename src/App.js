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
    <div className="wrapper">
      <div className="intro">
        <div className="info">
          <div className="heading">
            <h2>Hi!</h2>
          </div>
          <div className="text">
            <p>
              I’m Jané Conradie, a programmer with a passion in coding games,
              and websites.
            </p>
          </div>
        </div>
        <div className="portrait">
          <img
            src={portrait}
            onMouseOver={(e) => (e.currentTarget.src = portrait_smiling)}
            onMouseLeave={(e) => (e.currentTarget.src = portrait)}
            alt=""
          />
        </div>
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
