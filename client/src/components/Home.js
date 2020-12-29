/* 
This component renders the home page consisting of a header with 
a login button, a splash image and a quote about the value of literacy.
*/

//Components
import Header from "./Header";

//Assets
import hero from "../images/child-reading.jpg";

//Styles
import "../css/home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <img src={hero} alt='Child reading in wonder.' className='hero-image' />
    </div>
  );
};

export default Home;
