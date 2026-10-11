
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="glow-section container">
      <div className="section-heading" data-aos="fade-up">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h1>Let's talk <em>skincare.</em></h1>
        <p>Have a question about your routine? Send us a message.</p>
      </div>

      <div className="row g-5">
        <div className="col-lg-5" data-aos="fade-right">
          <div className="contact-info">
            <h3>We would love to hear from you.</h3>
            <p>
              Send your questions, feedback, or skincare
              shopping enquiries through the form.
            </p>

            <div className="contact-detail">
              <i className="bi bi-envelope" />
              <div>
                <strong>Email</strong>
                <p>hello@glowritual.example</p>
              </div>
            </div>

            <div className="contact-detail">
              <i className="bi bi-clock" />
              <div>
                <strong>Response hours</strong>
                <p>Monday–Saturday, 10 AM–6 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7" data-aos="fade-left">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contactName">Your name</label>
            <input
              id="contactName"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="contactEmail">Email address</label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              className="form-control"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="contactSubject">Subject</label>
            <select
              id="contactSubject"
              name="subject"
              className="form-select"
              required
              defaultValue=""
            >
              <option value="" disabled>Select a subject</option>
              <option>Product enquiry</option>
              <option>Skincare routine</option>
              <option>Order enquiry</option>
              <option>Other</option>
            </select>

            <label htmlFor="contactMessage">Your message</label>
            <textarea
              id="contactMessage"
              name="message"
              className="form-control"
              rows="5"
              placeholder="How can we help?"
              required
            />

            <button className="glow-button mt-4" type="submit">
              Send message <i className="bi bi-arrow-right" />
            </button>

            {submitted && (
              <p className="form-success">
                Thank you! Your demo message has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
