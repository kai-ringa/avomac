import handSeedlingImage from '../images/hand_seedling.jpg';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="image-text-container">
          <div className="image-container">
            <img src={handSeedlingImage} alt="hand holding seedling" />
          </div>
          <div className="text-container">
            <h2>Welcome to Avomac!</h2>
            <p>
              Looking for fresh and high-quality organic avocados and macadamia
              nuts at an affordable price? Avomac is the platform to connect you
              to quality farm produce from around the country. We offer
              farm-fresh produce that you won't find anywhere else. Whether
              you're in search of macadamia nuts or avocados, Avomac has got you
              covered. Visit our website today and experience the best produces
              from around the country!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
