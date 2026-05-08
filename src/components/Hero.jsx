import hero from "../assets/hero.png";
import "./all.css";

function Hero() {
  return (
    <section className="reveal-hero">
        <div className="hero-left">
          <h1 className="gradient">
        Atchyuta Ramayya Illa 
        </h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="hero-right">
         <div className="img-part">
            <img src={hero} width="300" className="heroImg01"/>     
        </div>
      </div>
      
     

    </section>
  );
}
export default Hero;