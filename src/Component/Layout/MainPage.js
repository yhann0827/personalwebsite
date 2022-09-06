import "./MainPage.scss";
import programmingImage from "../../Photos/languageImg.png";
const MainPage = ({ handleClick }) => {
  return (
    <div className="intro__outerdiv">
      <div className="intro__div">
        <div className="intro__para">Hey, I am Yong Hann!</div>
        <p className="intro__para2">
          A computer science student who is passionate in programming.
        </p>
        <button onClick={() => handleClick()} className="startbutton">
          Let's get started!
        </button>
      </div>
      <div className="image__div">
        <img
          className="image"
          src="http://wallpaperset.com/w/full/4/9/6/149665.jpg"
          alt="A computer background"
        />
        <img
          className="image2"
          src={programmingImage}
          alt="Various programming languages"
        />
      </div>
    </div>
  );
};
export default MainPage;
