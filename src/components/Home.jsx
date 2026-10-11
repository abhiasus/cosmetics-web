
import { Link } from "react-router-dom";

import hero from "../assets/image/hero.jpg";
import cleanser from "../assets/image/cleanser.jpg";
import serum from "../assets/image/serum.jpg";
import sunscreen from "../assets/image/sunscreen.jpg";
import nightCream from "../assets/image/night-cream.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Gentle Daily Cleanser",
    price: 399,
    image: cleanser,
    label: "MORNING ESSENTIAL",
  },
  {
    id: 3,
    name: "Hydrating Face Serum",
    price: 699,
    image: serum,
    label: "DAILY HYDRATION",
  },
  {
    id: 5,
    name: "Daily Sunscreen SPF 50",
    price: 549,
    image: sunscreen,
    label: "SUN PROTECTION",
  },
];

export default function Home({ addToCart }) {
  return (
    <>
      <section className="glow-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="eyebrow">YOUR SKIN, YOUR RITUAL</span>

              <h1>
                Small rituals.
                <br />
                <em>Lasting glow.</em>
              </h1>

              <p>
                Discover simple skincare essentials for
                mornings that shine and nights that restore.
              </p>

              <Link to="/products" className="glow-button">
                Explore skincare <i className="bi bi-arrow-right" />
              </Link>

              <div className="hero-note">
                <i className="bi bi-droplet-half" />
                Your everyday skincare destination
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="hero-image-wrap">
                <img src={hero} alt="Glow Ritual skincare collection" />
                <div className="hero-sticker">
                  <span>DAILY</span>
                  <strong>Glow</strong>
                  <span>ESSENTIALS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="routine-strip">
        <div className="container">
          <div className="row text-center g-4">
            {[
              ["bi-sun", "Morning care", "Start fresh"],
              ["bi-moon-stars", "Night care", "End gently"],
              ["bi-droplet", "Daily hydration", "Comfort your skin"],
              ["bi-flower1", "Simple rituals", "Care made easy"],
            ].map(([icon, title, description]) => (
              <div className="col-6 col-lg-3" key={title}>
                <i className={`bi ${icon}`} />
                <h6>{title}</h6>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glow-section container">
        <div className="section-heading" data-aos="fade-up">
          <span className="eyebrow">THE EVERYDAY EDIT</span>
          <h2>Your daily <em>essentials</em></h2>
          <p>Build your routine with the products you reach for every day.</p>
        </div>

        <div className="row g-4">
          {featuredProducts.map((product, index) => (
            <div
              className="col-md-4"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="glow-product">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.label}</span>
                </div>

                <div className="product-info">
                  <h5>{product.name}</h5>
                  <div className="product-bottom">
                    <strong>₹{product.price}</strong>
                    <button
                      className="add-button"
                      onClick={() => addToCart(product)}
                    >
                      Add to bag +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/products" className="glow-button">
            View all products
          </Link>
        </div>
      </section>

      <section className="glow-routine-banner">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="eyebrow">AM TO PM</span>
              <h2>
                Different moments.
                <br />
                <em>One mindful routine.</em>
              </h2>
              <p>
                Discover a routine that fits your day, from your
                first cleanse to your final night cream.
              </p>
              <Link to="/routine" className="glow-button">
                Discover your routine
              </Link>
            </div>

            <div className="col-lg-5 text-center" data-aos="zoom-in">
              <img
                src={nightCream}
                alt="Glow Ritual night cream"
                className="banner-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
