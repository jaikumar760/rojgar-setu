import React from "react";

export default function Contact({ formspreeUrl }) {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <form action={formspreeUrl} method="POST" style={{ display: "flex", flexDirection: "column", gap: 15, maxWidth: 500, margin: "auto" }}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="mobile" placeholder="Mobile Number" pattern="[0-9]{10}" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" className="button">Send Message</button>
      </form>
    </section>
  );
}
