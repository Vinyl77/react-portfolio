import Navigation from '../Nav';
import './style.css';

const Hero = () => {
  return (
    <div className="hero-image">
      <Navigation />
      <div className="hero-text">
        <h1 className="hero-title">Richard Yvarra</h1>
        <p className="hero-tagline">
          ServiceTrade Software Engineer
          <span className="hero-tagline-divider">/</span>
          Small Business AI Consultant
          <span className="hero-tagline-divider">/</span>
          Web Designer
          <span className="hero-tagline-divider">/</span>
          Based in New Haven, CT
        </p>
      </div>
    </div>
  );
};

export default Hero;
