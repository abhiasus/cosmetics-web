
import { useState } from "react";

import cleanser from "../assets/image/cleanser.jpg";
import toner from "../assets/image/toner.jpg";
import serum from "../assets/image/serum.jpg";
import moisturizer from "../assets/image/moisturizer.jpg";
import sunscreen from "../assets/image/sunscreen.jpg";
import cleansingBalm from "../assets/image/cleansing-balm.jpg";
import nightSerum from "../assets/image/night-serum.jpg";
import nightCream from "../assets/image/night-cream.jpg";
import eyeCream from "../assets/image/eye-cream.jpg";

const products = [
  { id: 1, name: "Gentle Daily Cleanser", price: 399, image: cleanser, type: "Morning" },
  { id: 2, name: "Balancing Toner", price: 449, image: toner, type: "Morning" },
  { id: 3, name: "Hydrating Face Serum", price: 699, image: serum, type: "Morning" },
  { id: 4, name: "Daily Moisturizer", price: 499, image: moisturizer, type: "Morning" },
  { id: 5, name: "Daily Sunscreen SPF 50", price: 549, image: sunscreen, type: "Morning" },
  { id: 6, name: "Cleansing Balm", price: 599, image: cleansingBalm, type: "Night" },
  { id: 7, name: "Night Repair Serum", price: 799, image: nightSerum, type: "Night" },
  { id: 8, name: "Overnight Cream", price: 649, image: nightCream, type: "Night" },
  { id: 9, name: "Eye Care Cream", price: 499, image: eyeCream, type: "Night" },
];

export default function Products({ addToCart }) {
  const [filter, setFilter] = useState("All");

  const visibleProducts = products.filter(
    (product) => filter === "All" || product.type === filter
  );

  return (
    <section className="glow-section container">
      <div className="section-heading" data-aos="fade-up">
        <span className="eyebrow">THE SKINCARE SHELF</span>
        <h1>Find your daily <em>essentials.</em></h1>
        <p>Simple products for your morning and evening rituals.</p>
      </div>

      <div className="filter-row">
        {["All", "Morning", "Night"].map((item) => (
          <button
            key={item}
            className={`filter-btn ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {visibleProducts.map((product, index) => (
          <div
            className="col-sm-6 col-lg-4"
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 100}
          >
            <div className="glow-product">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.type} care</span>
              </div>

              <div className="product-info">
                <h5>{product.name}</h5>
                <div className="product-bottom">
                  <strong>₹{product.price}</strong>
                  <button
                    className="add-button"
                    onClick={() => {
                      addToCart(product);
                      console.log("Added to cart:", product.name);
                    }}
                  >
                    Add to bag +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
