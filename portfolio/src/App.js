import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";
// import { StyledLink } from "../src/styles";

import './App.css';

// import Header from './containers/header/header';
// import Footer from './containers/footer/footer';
// import Home from './scenes/home-scene/home';
// import About from './scenes/about-scene/about';
// import Work from './scenes/work/work';
import Contact from './scenes/contact-scene/contact';


// function App() {
//   return (
//     <div className="App">
//       {/* <Header /> */}
//       <Home />
//       {/* <Contact /> */}
//       {/* <About /> */}
//       {/* <Work /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <About />, */}
      <Contact />
      {/* <About />, */}
      {/* <Footer /> */}
      {/* <Router>
        <nav>
          <StyledLink to="/scenes/home-scene/home">Home</StyledLink>
          <StyledLink to="/scenes/about-scene/about">About Me</StyledLink>
          <StyledLink to="/scenes/work/work">My Work</StyledLink>
          <StyledLink to="/scenes/contact-scene/contact">Contact</StyledLink>
        </nav>
        <Switch>
          <Route exact path="/scenes/home-scene/home">
            <Home />
          </Route>,
          <Route exact path="/scenes/about-scene/about">
            <About />
          </Route>,
          <Route exact path="/scenes/work-scene/work">
            <Work />
          </Route>,
          <Route exact path="/scenes/contact-scene/contact">
            <Contact />
          </Route>

        </Switch>
      </Router> */}
    </div>
  );
}

// const App = () => {
//   return (
//     <section className="App">
//       <Router>
//         <nav>
//           <StyledLink to="../../scenes/home-scene/home">Home</StyledLink>
//           {/* <StyledLink to="../../scenes/about-scene/about">About us</StyledLink> */}
//           {/* <StyledLink to="/contact">Contact</StyledLink> */}
//         </nav>
//         <Switch>
//           <Route exact path="../../scenes/home-scene/home">
//             <Home />
//           </Route>
//           {/* <Route path="/about-us">
//             <About />
//           </Route> */}
//           {/* <Route path="/contact">
//             <Contact />
//           </Route> */}
//         </Switch>
//       </Router>
//     </section>
//   );
// };

export default App;
