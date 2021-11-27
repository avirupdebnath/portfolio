import { useRoutes } from "hookrouter";
import React from "react";
import { DownloadResume } from "./Pages/DownloadResume";
import "./css/App.css"
import Introduction from "./Pages/Introduction";
import Home from "./Pages/Home";
import ProfileImage from "./Components/ProfileImage";
import TsParticles from "./Components/TsParticles";
import Head from "./Components/Head";
import GlobalStyle from "./Themes/GlobalStyle";

const routes = {
  '/': ()=> <Home/>,
  '/about-me': ()=> <Introduction />,
  '/experience': ()=> <ProfileImage />,
  '/download-resume': ()=> <DownloadResume />
}

function App() {
  const match = useRoutes(routes)
  return (
    <div className="App">
    <GlobalStyle/>
      <Head/>
      {match}
   
    </div>
  );
}

export default App;
