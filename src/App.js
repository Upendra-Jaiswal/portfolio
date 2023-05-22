import "./App.css";
import NAV from "./components/NAV";
import Intro from "./components/Intro";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import classes from "./App.css";
//import Slideshow from "./components/Slideshow";
import SlidePhoto from "../src/photos/SlidePhoto.jpeg";
import upendra from "../src/photos/upendra.jpg";
import Slides from "./components/Slides";
import Sociallinks from "./components/Sociallinks";

//import RowCol from "./components/RowCol";

function App() {
  return (
    <div className="App">
      <NAV />

      <Intro />
      <Slides />
      <Sociallinks />
      <Footer />
    </div>
  );
}

export default App;
