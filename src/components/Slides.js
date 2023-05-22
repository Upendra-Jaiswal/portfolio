import ImageSlider from "./ImageSlider";
import twitterWEB3dApp from "../photos/twitterWEB3dApp.png";
import lotteryDapp from "../photos/lotteryDapp.png";
import transferWithdrawDAPP from "../photos/transferWithdrawDAPP.png";
import classes from "./slide.module.css";
const App = () => {
  const slides = [
    { url: twitterWEB3dApp, title: "twitterWEB3dApp" },
    { url: lotteryDapp, title: "lotteryDapp" },
    { url: transferWithdrawDAPP, title: "transferWithdrawDAPP" },
  ];
  // const containerStyles = {
  //   width: "300px",
  //   height: "150px",
  //   margin: "0 auto",
  // };
  return (
    <div>
      <h1></h1>
      <div className={classes.containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};

export default App;
