import { React } from "react";
import NavBar from "./components/NavBar";
import HomeBody from "./components/HomeBody";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomeBody />
          <Skills />
          <AboutMe />
          <Contact />
          <Projects />
        </Route>

        <Route path="/home" exact>
          <HomeBody />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/aboutme" exact>
          <AboutMe />
        </Route>
        <Route path="/contactme" exact>
          <Contact />
        </Route>
        <Route path="/myprojects" exact>
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
