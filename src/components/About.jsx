
import { Link } from "react-router-dom";
import hero from "../assets/image/hero.jpg";

export default function About() {
  return (
    <section className="glow-section container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6" data-aos="fade-right">
          <img className="about-image" src={hero} alt="Glow Ritual skincare collection" />
        </div>

        <div className="col-lg-6" data-aos="fade-left">
          <span className="eyebrow">OUR PHILOSOPHY</span>
          <h1 className="about-title">
            Less noise.
            <br />
            <em>More care.</em>
          </h1>

          <p>
            Glow Ritual is a skincare shop concept built around
            everyday consistency, simple routines, and thoughtful
            product choices.
          </p>

          <p>
            Our approach is straightforward: cleanse gently,
            hydrate well, protect your skin during the day,
            and keep nighttime care comfortable.
          </p>

          <p>
            Whether you are building your first routine or
            refining an existing one, we make exploring
            everyday skincare simple.
          </p>

          <Link to="/routine" className="glow-button">
            Explore our routines
          </Link>
        </div>
      </div>

      <div className="row g-4 about-values">
        <div className="col-md-4" data-aos="fade-up">
          <div className="value-card">
            <i className="bi bi-droplet-half" />
            <h4>Everyday essentials</h4>
            <p>Build a consistent routine with practical skincare basics.</p>
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <div className="value-card">
            <i className="bi bi-sun" />
            <h4>AM to PM</h4>
            <p>Discover products organized around morning and night care.</p>
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div className="value-card">
            <i className="bi bi-flower1" />
            <h4>Simple by design</h4>
            <p>Make skincare feel approachable, not overwhelming.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
