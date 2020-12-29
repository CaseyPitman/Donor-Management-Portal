/* 
This component renders the home page consisting of a header with 
a login button, a splash image and a quote about the value of literacy.
*/

//Assets
// import hero from "../images/child-reading.jpg";

//Styles
import "../css/home.css";

const Home = () => {
  return (
    <div className='home'>
      <div className='quote-text'>
        <h1>
          "The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go."
        </h1>
        <h2>- Dr. Seuss</h2>
      </div>

      {/* <img src={hero} alt='Child reading in wonder.' className='hero-image' /> */}
    </div>
  );
};

export default Home;
