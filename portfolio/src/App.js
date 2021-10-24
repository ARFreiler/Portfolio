import './App.css';

import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import Home from './scenes/home';
// import About from './scenes/about';
// import Work from './scenes/work';
// import Contact from './scenes/contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Contact /> */}
      {/* <About />
      <Work /> */}
      <Footer />
    </div>
  );
}

export default App;
