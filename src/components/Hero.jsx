import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="reveal">
      <h1 className="gradient">Achuth Ram</h1>
      <h2>Frontend Developer</h2>
      <img src={hero} width="300" />
    </section>
  );
}
export default Hero;