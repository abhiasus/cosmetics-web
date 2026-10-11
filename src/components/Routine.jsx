
import { Link } from "react-router-dom";

import serum from "../assets/image/serum.jpg";
import nightCream from "../assets/image/night-cream.jpg";

const routines = [
  {
    title: "Morning Ritual",
    subtitle: "WAKE UP TO FRESH SKIN",
    image: serum,
    steps: [
      "Gentle cleanser",
      "Hydrating toner (optional)",
      "Face serum",
      "Moisturizer",
      "Broad-spectrum sunscreen SPF 30 or higher",
    ],
  },
  {
    title: "Night Ritual",
    subtitle: "WIND DOWN AND REPLENISH",
    image: nightCream,
    steps: [
      "Remove makeup and sunscreen",
      "Gentle cleanser",
      "Night treatment if suitable",
      "Moisturizer or night cream",
    ],
  },
];

export default function Routine() {
  return (
    <section className="glow-section container">
      <div className="section-heading" data-aos="fade-up">
        <span className="eyebrow">YOUR DAILY GUIDE</span>
        <h1>Rituals that feel <em>like you.</em></h1>
        <p>
          Keep your routine consistent and choose products
          that suit your skin.
        </p>
      </div>

      {routines.map((routine, index) => (
        <div
          className={`row align-items-center g-5 routine-detail ${
            index % 2 ? "flex-lg-row-reverse" : ""
          }`}
          key={routine.title}
          data-aos="fade-up"
        >
          <div className="col-lg-5">
            <img
              className="routine-detail-image"
              src={routine.image}
              alt={routine.title}
            />
          </div>

          <div className="col-lg-7">
            <span className="eyebrow">{routine.subtitle}</span>
            <h2>{routine.title}</h2>
            <ol className="routine-steps">
              {routine.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}

      <div className="text-center mt-5">
        <Link to="/products" className="glow-button">
          Shop your routine
        </Link>
      </div>
    </section>
  );
}
