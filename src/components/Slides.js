import ImageSlider from "./ImageSlider";
import Github from "../photos/GithubImage.png";
import Twitter from "../photos/TwitterImage.png";
const App = () => {
  const slides = [
    { url: Github , title: "beach" },
    { url:Twitter, title: "boat" },
    { url: Github , title: "forest" },
    { url: Twitter, title: "city" },
    { url:Github , title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    
  };
  return (
    <div>
      <h1></h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};

export default App;