
import { Link } from "react-router-dom";

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="glow-section container">
      <div className="section-heading" data-aos="fade-up">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>Your skincare <em>bag.</em></h1>
        <p>Your everyday essentials, all in one place.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart" data-aos="fade-up">
          <i className="bi bi-bag-heart" />
          <h3>Your bag is waiting for a ritual.</h3>
          <p>Explore our daily skincare essentials to get started.</p>
          <Link to="/products" className="glow-button">
            Explore products
          </Link>
        </div>
      ) : (
        <div className="row g-5">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h5>{item.name}</h5>
                  <p>₹{item.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-end">
                  <strong>₹{item.price * item.quantity}</strong>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="cart-summary">
              <h4>Order summary</h4>

              <div className="summary-line">
                <span>Subtotal</span>
                <strong>₹{total}</strong>
              </div>

              <div className="summary-line">
                <span>Delivery</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="summary-line summary-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <button
                className="glow-button checkout-button"
                onClick={() => alert("Checkout is a demo feature.")}
              >
                Continue to checkout
              </button>

              <Link to="/products" className="continue-shopping">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
